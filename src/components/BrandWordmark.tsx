interface BrandWordmarkProps {
  className?: string;
}

export default function BrandWordmark({ className = '' }: BrandWordmarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex items-baseline font-heading font-extrabold tracking-[-0.04em] ${className}`}
    >
      <span className="text-black dark:text-white">JA</span>
      <span className="ml-[0.28em] text-blue-600 dark:text-blue-400">DOMAIN HUB</span>
      <span
        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-black via-blue-600 to-blue-600 opacity-80 dark:from-white dark:via-blue-400 dark:to-blue-400"
      />
    </span>
  );
}
