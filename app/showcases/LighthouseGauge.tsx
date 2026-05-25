"use client";

type Props = {
  score: number;
  size?: number;
  label?: string;
};

function scoreColor(score: number) {
  if (score >= 90) return "#3FB950";
  if (score >= 50) return "#D29922";
  return "#F85149";
}

export default function LighthouseGauge({ score, size = 64, label }: Props) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const color = scoreColor(score);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background track */}
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#30363D"
            strokeWidth={6}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={6}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
          />
        </svg>
        {/* Score number */}
        <div
          className="absolute inset-0 flex items-center justify-center text-sm font-bold"
          style={{ color }}
        >
          {score}
        </div>
      </div>
      {label && (
        <span className="text-[10px] text-[#8B949E] text-center leading-tight max-w-[60px]">
          {label}
        </span>
      )}
    </div>
  );
}
