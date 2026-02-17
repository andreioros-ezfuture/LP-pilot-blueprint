import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  error,
}: CheckboxProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-start gap-3 cursor-pointer">
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="sr-only peer"
          />
          <div
            className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${
              checked
                ? 'bg-accent border-accent'
                : error
                  ? 'border-danger'
                  : 'border-border'
            } peer-focus-visible:ring-2 peer-focus-visible:ring-accent/10`}
          >
            {checked && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
        <span
          className="text-sm text-body leading-relaxed"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </label>
      {error && (
        <p className="text-sm text-danger mt-0.5">{error}</p>
      )}
    </div>
  );
}
