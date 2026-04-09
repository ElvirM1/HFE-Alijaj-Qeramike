type Props = {
  iconSize?: number;
  showText?: boolean;
  textSize?: string;
  className?: string;
  light?: boolean;
};

export default function HFELogo({
  iconSize = 44,
  showText = true,
  textSize = "text-lg",
  className = "",
  light = false,
}: Props) {
  const bg = "#13151c";
  const fg = "#f0ede8";
  const amber = "#0F766E";
  const amber2 = "#f5b849";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        style={{ width: iconSize, height: iconSize }}
        className="relative shrink-0"
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="44" height="44" rx="10" fill={bg} />
          <rect
            x="0"
            y="30"
            width="14"
            height="14"
            rx="0"
            fill={amber}
            opacity="0.15"
          />
          <rect
            x="0"
            y="37"
            width="7"
            height="7"
            rx="0"
            fill={amber}
            opacity="0.35"
          />
          <circle cx="37" cy="7" r="2" fill={amber} />
          <circle cx="42" cy="7" r="1.2" fill={amber} opacity="0.5" />
          <circle cx="37" cy="12" r="1.2" fill={amber} opacity="0.5" />
          <rect x="6" y="12" width="4.5" height="20" rx="1.5" fill={amber} />
          <rect x="6" y="20" width="14" height="4" rx="1.5" fill={amber} />
          <rect x="15.5" y="12" width="4.5" height="20" rx="1.5" fill={amber} />
          <rect
            x="24"
            y="12"
            width="3"
            height="20"
            rx="1"
            fill={fg}
            opacity="0.9"
          />
          <rect
            x="24"
            y="12"
            width="9"
            height="3"
            rx="1"
            fill={fg}
            opacity="0.9"
          />
          <rect
            x="24"
            y="19"
            width="7"
            height="2.8"
            rx="1"
            fill={fg}
            opacity="0.7"
          />
          <defs>
            <linearGradient
              id="hfe-g"
              x1="0"
              y1="0"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={amber2} />
              <stop offset="100%" stopColor={amber} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none gap-0.5">
          <span
            className={`font-black tracking-tight ${textSize}`}
            style={{
              letterSpacing: "-0.02em",
              color: light ? "#1A1714" : "#f0ede8",
            }}
          >
            HFE-ALIJAJ
          </span>
          <span
            className="text-[9px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#0F766E", opacity: 0.85 }}
          >
            Qeramik &bull; Instalime &bull; Ngrohje
          </span>
        </div>
      )}
    </div>
  );
}
