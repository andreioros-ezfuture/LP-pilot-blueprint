import React from 'react';

interface TextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-primary">
        {label}
        {required && <span className="text-danger ml-0.5">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`min-h-[100px] border rounded-xl px-4 py-3 text-body font-body outline-none transition-all resize-y ${
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
