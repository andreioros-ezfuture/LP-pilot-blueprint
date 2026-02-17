import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { FormValues, FormStatus } from './types';
import { TOTAL_SPOTS, STORAGE_KEYS } from './lib/constants';

interface AppContextType {
  spots: { remaining: number; total: number };
  decrementSpot: () => void;
  form: {
    values: FormValues;
    status: FormStatus;
    errors: Partial<Record<keyof FormValues, string>>;
  };
  setFormValues: (values: Partial<FormValues>) => void;
  setFormStatus: (status: FormStatus) => void;
  setFormErrors: (errors: Partial<Record<keyof FormValues, string>>) => void;
}

const defaultFormValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  cui: '',
  processes: '',
  gdprConsent: false,
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [remaining, setRemaining] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.SPOTS_REMAINING);
    return stored !== null ? parseInt(stored, 10) : TOTAL_SPOTS;
  });

  const [formValues, setFormValuesState] = useState<FormValues>(defaultFormValues);
  const [formStatus, setFormStatusState] = useState<FormStatus>('idle');
  const [formErrors, setFormErrorsState] = useState<Partial<Record<keyof FormValues, string>>>({});

  const decrementSpot = useCallback(() => {
    setRemaining((prev) => {
      const next = Math.max(0, prev - 1);
      localStorage.setItem(STORAGE_KEYS.SPOTS_REMAINING, String(next));
      return next;
    });
  }, []);

  const setFormValues = useCallback((values: Partial<FormValues>) => {
    setFormValuesState((prev) => ({ ...prev, ...values }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        spots: { remaining, total: TOTAL_SPOTS },
        decrementSpot,
        form: { values: formValues, status: formStatus, errors: formErrors },
        setFormValues,
        setFormStatus: setFormStatusState,
        setFormErrors: setFormErrorsState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
