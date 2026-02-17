export function validateEmail(email: string): string | null {
  if (!email.trim()) return 'Te rugam sa introduci o adresa de email.';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Te rugam sa introduci o adresa de email valida.';
  return null;
}

export function validatePhone(phone: string): string | null {
  if (!phone.trim()) return 'Te rugam sa introduci un numar de telefon.';
  const digits = phone.replace(/[\s\-().+]/g, '');
  if (digits.length < 10) return 'Te rugam sa introduci un numar de telefon valid (minim 10 cifre).';
  return null;
}

export function validateRequired(value: string, fieldName: string): string | null {
  if (!value.trim()) return `Te rugam sa completezi campul ${fieldName}.`;
  return null;
}

export function validateGdpr(checked: boolean): string | null {
  if (!checked) return 'Trebuie sa fii de acord cu prelucrarea datelor.';
  return null;
}
