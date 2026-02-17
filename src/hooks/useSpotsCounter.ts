import { useState, useEffect } from 'react';
import { TOTAL_SPOTS, STORAGE_KEYS } from '../lib/constants';

export function useSpotsCounter() {
  const [remaining, setRemaining] = useState(TOTAL_SPOTS);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.SPOTS_REMAINING);
    if (stored !== null) {
      setRemaining(parseInt(stored, 10));
    } else {
      localStorage.setItem(STORAGE_KEYS.SPOTS_REMAINING, String(TOTAL_SPOTS));
    }
  }, []);

  const decrementSpot = () => {
    setRemaining((prev) => {
      const next = Math.max(0, prev - 1);
      localStorage.setItem(STORAGE_KEYS.SPOTS_REMAINING, String(next));
      return next;
    });
  };

  return { remaining, total: TOTAL_SPOTS, decrementSpot };
}
