// Reusable inline SVG components. No image files anywhere in this project.
import type { ReactNode, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/* ---------- Small line icons (use currentColor) ---------- */

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const GitHubIcon = (p: P) => (
  <svg {...line} {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const LinkedInIcon = (p: P) => (
  <svg {...line} {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...line} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const CodeIcon = (p: P) => (
  <svg {...line} {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const LayoutIcon = (p: P) => (
  <svg {...line} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

export const DatabaseIcon = (p: P) => (
  <svg {...line} {...p}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...line} {...p}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...line} {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ---------- Logo ---------- */

export const Logo = (p: P) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" {...p}>
    <rect width="32" height="32" rx="8" fill="#4F46E5" />
    <path
      d="M13 11l-5 5 5 5M19 11l5 5-5 5"
      fill="none"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- Hero illustration: laptop with code ---------- */

export const HeroIllustration = (p: P) => (
  <svg viewBox="0 0 480 360" role="img" aria-label="Laptop showing code" {...p}>
    <defs>
      <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#E0E7FF" />
        <stop offset="1" stopColor="#EEF2FF" />
      </linearGradient>
    </defs>
    <circle cx="240" cy="180" r="165" fill="url(#hero-bg)" />
    {/* Screen */}
    <rect x="90" y="60" width="300" height="195" rx="14" fill="#1E293B" />
    <circle cx="112" cy="80" r="4" fill="#F87171" />
    <circle cx="127" cy="80" r="4" fill="#FBBF24" />
    <circle cx="142" cy="80" r="4" fill="#34D399" />
    {/* Code lines */}
    <rect x="112" y="108" width="70" height="8" rx="4" fill="#818CF8" />
    <rect x="190" y="108" width="100" height="8" rx="4" fill="#94A3B8" />
    <rect x="130" y="130" width="110" height="8" rx="4" fill="#34D399" />
    <rect x="248" y="130" width="60" height="8" rx="4" fill="#94A3B8" />
    <rect x="130" y="152" width="50" height="8" rx="4" fill="#FBBF24" />
    <rect x="188" y="152" width="120" height="8" rx="4" fill="#94A3B8" />
    <rect x="130" y="174" width="90" height="8" rx="4" fill="#818CF8" />
    <rect x="228" y="174" width="70" height="8" rx="4" fill="#94A3B8" />
    <rect x="112" y="196" width="40" height="8" rx="4" fill="#F472B6" />
    <rect x="160" y="196" width="130" height="8" rx="4" fill="#94A3B8" />
    <rect x="112" y="218" width="24" height="8" rx="4" fill="#818CF8" />
    {/* Base */}
    <path d="M60 262h360l-24 -7H84z" fill="#CBD5E1" />
    <rect x="60" y="262" width="360" height="12" rx="6" fill="#94A3B8" />
    <rect x="210" y="262" width="60" height="5" rx="2.5" fill="#64748B" />
    {/* Floating accents */}
    <rect x="395" y="90" width="44" height="44" rx="12" fill="#4F46E5" />
    <path d="M409 106l-6 6 6 6M425 106l6 6-6 6" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="60" cy="110" r="14" fill="#A5B4FC" />
    <rect x="40" y="200" width="30" height="30" rx="8" fill="#C7D2FE" />
  </svg>
);

/* ---------- Avatar (About page) ---------- */

export const Avatar = (p: P) => (
  <svg viewBox="0 0 200 200" role="img" aria-label="Illustration of Jerieme" {...p}>
    <circle cx="100" cy="100" r="100" fill="#E0E7FF" />
    <path d="M30 175c8-34 38-50 70-50s62 16 70 50a100 100 0 0 1-140 0z" fill="#4F46E5" />
    <rect x="88" y="108" width="24" height="22" rx="8" fill="#F5C9A8" />
    <circle cx="100" cy="82" r="32" fill="#F5C9A8" />
    <path d="M68 78c0-24 16-36 34-36s30 12 30 32c-10-4-20-14-26-20-8 12-24 20-38 24z" fill="#1E293B" />
    <circle cx="88" cy="86" r="3" fill="#1E293B" />
    <circle cx="112" cy="86" r="3" fill="#1E293B" />
    <path d="M91 98q9 7 18 0" fill="none" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ---------- Project thumbnails (Portfolio page) ---------- */

const thumbBg = [
  ["#E0E7FF", "#C7D2FE"],
  ["#DCFCE7", "#BBF7D0"],
  ["#FEF3C7", "#FDE68A"],
  ["#E0F2FE", "#BAE6FD"],
  ["#FCE7F3", "#FBCFE8"],
  ["#EDE9FE", "#DDD6FE"],
];

export function ProjectThumb({ variant, ...p }: P & { variant: number }) {
  const [c1, c2] = thumbBg[variant % thumbBg.length];
  const id = `thumb-${variant}`;
  const shapes: ReactNode[] = [
    // 0: portfolio site (browser with hero)
    <g key="0">
      <rect x="60" y="30" width="280" height="180" rx="12" fill="#fff" />
      <rect x="60" y="30" width="280" height="24" rx="12" fill="#E2E8F0" />
      <circle cx="76" cy="42" r="4" fill="#F87171" />
      <circle cx="90" cy="42" r="4" fill="#FBBF24" />
      <rect x="80" y="76" width="120" height="14" rx="7" fill="#4F46E5" />
      <rect x="80" y="100" width="150" height="8" rx="4" fill="#CBD5E1" />
      <rect x="80" y="116" width="110" height="8" rx="4" fill="#CBD5E1" />
      <rect x="80" y="140" width="60" height="22" rx="11" fill="#4F46E5" />
      <circle cx="285" cy="120" r="34" fill="#C7D2FE" />
    </g>,
    // 1: task manager (checklist)
    <g key="1">
      <rect x="90" y="28" width="220" height="184" rx="14" fill="#fff" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="120" cy={70 + i * 46} r="11" fill={i === 0 ? "#22C55E" : "#fff"} stroke="#22C55E" strokeWidth="3" />
          {i === 0 && <path d="M114 70l4 4 8-8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />}
          <rect x="145" y={64 + i * 46} width={120 - i * 20} height="12" rx="6" fill={i === 0 ? "#BBF7D0" : "#CBD5E1"} />
        </g>
      ))}
    </g>,
    // 2: enrollment form
    <g key="2">
      <rect x="90" y="24" width="220" height="192" rx="14" fill="#fff" />
      <rect x="110" y="44" width="100" height="12" rx="6" fill="#F59E0B" />
      <rect x="110" y="72" width="180" height="22" rx="6" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="110" y="104" width="180" height="22" rx="6" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="110" y="136" width="84" height="22" rx="6" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="204" y="136" width="86" height="22" rx="6" fill="#F1F5F9" stroke="#E2E8F0" />
      <rect x="110" y="172" width="80" height="26" rx="13" fill="#F59E0B" />
    </g>,
    // 3: weather dashboard
    <g key="3">
      <rect x="50" y="30" width="300" height="180" rx="14" fill="#fff" />
      <circle cx="130" cy="95" r="26" fill="#FBBF24" />
      <path d="M140 125a22 22 0 0 1 4-43 28 28 0 0 1 54 8 18 18 0 0 1-2 35z" fill="#7DD3FC" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={225 + i * 28} y={170 - [30, 55, 40, 65][i]} width="18" height={[30, 55, 40, 65][i]} rx="5" fill="#38BDF8" />
      ))}
      <rect x="75" y="150" width="90" height="10" rx="5" fill="#CBD5E1" />
      <rect x="75" y="170" width="60" height="8" rx="4" fill="#E2E8F0" />
    </g>,
    // 4: inventory tracker (bars + box)
    <g key="4">
      <rect x="50" y="30" width="300" height="180" rx="14" fill="#fff" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={75 + i * 34} y={180 - [50, 80, 35, 100, 65][i]} width="22" height={[50, 80, 35, 100, 65][i]} rx="5" fill={i === 3 ? "#EC4899" : "#F9A8D4"} />
      ))}
      <path d="M270 70l30-14 30 14v34l-30 14-30-14z" fill="#FBCFE8" stroke="#EC4899" strokeWidth="3" strokeLinejoin="round" />
      <path d="M270 70l30 14 30-14M300 84v34" fill="none" stroke="#EC4899" strokeWidth="3" />
    </g>,
    // 5: quiz game
    <g key="5">
      <rect x="70" y="26" width="260" height="188" rx="14" fill="#fff" />
      <rect x="92" y="46" width="216" height="14" rx="7" fill="#7C3AED" />
      <rect x="92" y="70" width="150" height="10" rx="5" fill="#CBD5E1" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="92" y={98 + i * 36} width="216" height="28" rx="8" fill={i === 1 ? "#DDD6FE" : "#F1F5F9"} stroke={i === 1 ? "#7C3AED" : "#E2E8F0"} strokeWidth="2" />
          <circle cx="110" cy={112 + i * 36} r="6" fill={i === 1 ? "#7C3AED" : "#CBD5E1"} />
        </g>
      ))}
    </g>,
  ];

  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Project thumbnail" {...p}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c1} />
          <stop offset="1" stopColor={c2} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#${id})`} />
      {shapes[variant % shapes.length]}
    </svg>
  );
}

/* ---------- Gallery scenes (9 flat SVG scenes) ---------- */

export function GalleryScene({ index, ...p }: P & { index: number }) {
  const scenes: ReactNode[] = [
    // 0: code editor
    <g key="0">
      <rect width="400" height="300" fill="#312E81" />
      <rect x="40" y="40" width="320" height="220" rx="12" fill="#1E1B4B" />
      <rect x="40" y="40" width="70" height="220" rx="12" fill="#27235F" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={130 + (i % 3) * 18} y={68 + i * 30} width={[110, 150, 80, 130, 100, 60][i]} height="10" rx="5" fill={["#A5B4FC", "#34D399", "#FBBF24", "#F472B6", "#7DD3FC", "#A5B4FC"][i]} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="56" y={68 + i * 30} width="38" height="8" rx="4" fill="#4F46E5" />
      ))}
    </g>,
    // 1: laptop
    <g key="1">
      <rect width="400" height="300" fill="#E0F2FE" />
      <rect x="95" y="60" width="210" height="140" rx="10" fill="#0F172A" />
      <rect x="107" y="72" width="186" height="116" rx="4" fill="#38BDF8" />
      <circle cx="200" cy="130" r="26" fill="#fff" opacity="0.8" />
      <path d="M60 212h280l-20 -12H80z" fill="#CBD5E1" />
      <rect x="60" y="212" width="280" height="12" rx="6" fill="#94A3B8" />
    </g>,
    // 2: notebook
    <g key="2">
      <rect width="400" height="300" fill="#FEF3C7" />
      <rect x="110" y="40" width="190" height="230" rx="10" fill="#F59E0B" />
      <rect x="125" y="40" width="175" height="230" rx="10" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x="145" y={80 + i * 26} width={i % 2 ? 110 : 135} height="6" rx="3" fill="#E2E8F0" />
      ))}
      <rect x="145" y="58" width="80" height="10" rx="5" fill="#F59E0B" />
      <rect x="245" y="200" width="14" height="80" rx="4" fill="#4F46E5" transform="rotate(35 252 240)" />
    </g>,
    // 3: trophy
    <g key="3">
      <rect width="400" height="300" fill="#FFF7ED" />
      <path d="M140 70h120v50a60 60 0 0 1-120 0z" fill="#FBBF24" />
      <path d="M140 84h-32a30 30 0 0 0 36 46M260 84h32a30 30 0 0 1-36 46" fill="none" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" />
      <rect x="188" y="170" width="24" height="40" fill="#F59E0B" />
      <rect x="150" y="210" width="100" height="26" rx="8" fill="#4F46E5" />
      <path d="M200 90l8 16 18 3-13 12 3 18-16-9-16 9 3-18-13-12 18-3z" fill="#FEF3C7" />
    </g>,
    // 4: team
    <g key="4">
      <rect width="400" height="300" fill="#EEF2FF" />
      {[
        [110, "#4F46E5"],
        [200, "#EC4899"],
        [290, "#10B981"],
      ].map(([x, c], i) => (
        <g key={i}>
          <circle cx={x as number} cy={120} r="30" fill="#F5C9A8" />
          <path d={`M${(x as number) - 48} 250c0-44 22-70 48-70s48 26 48 70z`} fill={c as string} />
          <path d={`M${(x as number) - 30} 112c2-26 58-26 60 0-14-8-40-8-60 0z`} fill="#1E293B" />
        </g>
      ))}
    </g>,
    // 5: desk setup
    <g key="5">
      <rect width="400" height="300" fill="#F1F5F9" />
      <rect x="110" y="50" width="180" height="110" rx="8" fill="#1E293B" />
      <rect x="120" y="60" width="160" height="90" rx="3" fill="#818CF8" />
      <rect x="192" y="160" width="16" height="30" fill="#64748B" />
      <rect x="165" y="188" width="70" height="8" rx="4" fill="#64748B" />
      <rect x="30" y="220" width="340" height="16" rx="6" fill="#92400E" />
      <rect x="60" y="236" width="12" height="50" fill="#78350F" />
      <rect x="328" y="236" width="12" height="50" fill="#78350F" />
      <rect x="130" y="204" width="110" height="14" rx="5" fill="#CBD5E1" />
      <rect x="40" y="170" width="36" height="50" rx="6" fill="#fff" stroke="#CBD5E1" strokeWidth="3" />
      <path d="M58 170c-6-20 10-26 4-40" fill="none" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
    </g>,
    // 6: browser window
    <g key="6">
      <rect width="400" height="300" fill="#ECFEFF" />
      <rect x="45" y="50" width="310" height="200" rx="12" fill="#fff" />
      <rect x="45" y="50" width="310" height="30" rx="12" fill="#CFFAFE" />
      <circle cx="64" cy="65" r="5" fill="#F87171" />
      <circle cx="82" cy="65" r="5" fill="#FBBF24" />
      <circle cx="100" cy="65" r="5" fill="#34D399" />
      <rect x="120" y="58" width="200" height="14" rx="7" fill="#fff" />
      <rect x="65" y="100" width="130" height="14" rx="7" fill="#06B6D4" />
      <rect x="65" y="124" width="170" height="8" rx="4" fill="#CBD5E1" />
      <rect x="65" y="140" width="140" height="8" rx="4" fill="#CBD5E1" />
      <rect x="65" y="170" width="70" height="26" rx="13" fill="#06B6D4" />
      <rect x="250" y="100" width="85" height="110" rx="10" fill="#A5F3FC" />
    </g>,
    // 7: mobile app
    <g key="7">
      <rect width="400" height="300" fill="#FDF2F8" />
      <rect x="150" y="26" width="100" height="250" rx="18" fill="#1E293B" />
      <rect x="158" y="44" width="84" height="214" rx="8" fill="#fff" />
      <rect x="166" y="54" width="68" height="34" rx="8" fill="#EC4899" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="178" cy={112 + i * 40} r="10" fill="#FBCFE8" />
          <rect x="196" y={104 + i * 40} width="36" height="7" rx="3.5" fill="#CBD5E1" />
          <rect x="196" y={116 + i * 40} width="26" height="6" rx="3" fill="#E2E8F0" />
        </g>
      ))}
    </g>,
    // 8: database
    <g key="8">
      <rect width="400" height="300" fill="#F0FDF4" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path d={`M130 ${100 + i * 46}v34c0 14 31 24 70 24s70-10 70-24v-34`} fill="#10B981" opacity={1 - i * 0.18} />
          <ellipse cx="200" cy={100 + i * 46} rx="70" ry="22" fill="#34D399" />
        </g>
      ))}
      <ellipse cx="200" cy="100" rx="70" ry="22" fill="#6EE7B7" />
      <circle cx="80" cy="80" r="14" fill="#BBF7D0" />
      <circle cx="330" cy="210" r="20" fill="#BBF7D0" />
    </g>,
  ];

  return (
    <svg viewBox="0 0 400 300" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice" {...p}>
      {scenes[index % scenes.length]}
    </svg>
  );
}
