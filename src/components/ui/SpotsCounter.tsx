interface SpotsCounterProps {
  remaining: number;
  total: number;
}

export default function SpotsCounter({ remaining, total }: SpotsCounterProps) {
  const percentage = ((total - remaining) / total) * 100;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative w-full h-2 bg-light-gray rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <p className="text-sm text-muted font-semibold">
        <span className="text-accent">{remaining}</span> din {total} locuri ramase
      </p>
    </div>
  );
}
