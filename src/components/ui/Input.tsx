import React from 'react';

interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  type?: string;
}

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  type = 'text',
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-primary">
        {label}
        {required && <span className="text-danger ml-0.5">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`h-12 border rounded-xl px-4 text-body font-body outline-none transition-all ${
          error
            ? 'border-danger focus:border-danger focus:ring-2 focus:ring-danger/10'
            : 'border-border focus:border-accent focus:ring-2 focus:ring-accent/10'
        }`}
      />
      {error && (
        <p className="text-sm text-danger mt-0.5">{error}</p>
      )}
    </div>
  );
}
