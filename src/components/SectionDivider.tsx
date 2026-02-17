export function SectionDivider({ variant = 'gradient' }: { variant?: 'line' | 'gradient' | 'dots' }) {
  if (variant === 'gradient') {
    return (
      <div aria-hidden="true" className="h-px mx-auto max-w-xs bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    );
  }
  if (variant === 'dots') {
    return (
      <div aria-hidden="true" className="flex justify-center gap-1.5 py-4">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
        <span className="w-1.5 h-1.5 rounded-full bg-primary/20" />
        <span className="w-1.5 h-1.5 rounded-full bg-primary/10" />
      </div>
    );
  }
  return <div aria-hidden="true" className="h-px mx-auto max-w-md bg-gray-200" />;
}
