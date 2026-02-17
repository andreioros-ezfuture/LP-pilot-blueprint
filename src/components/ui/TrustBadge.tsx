interface TrustBadgeProps {
  icon: 'shield' | 'noSpam' | 'clock';
  text: string;
}

function ShieldIcon() {
  return (
    <svg
      className="w-4 h-4 text-muted"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function NoSpamIcon() {
  return (
    <svg
      className="w-4 h-4 text-muted"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-4 h-4 text-muted"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const iconMap = {
  shield: ShieldIcon,
  noSpam: NoSpamIcon,
  clock: ClockIcon,
};

export default function TrustBadge({ icon, text }: TrustBadgeProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <IconComponent />
      <span>{text}</span>
    </div>
  );
}
