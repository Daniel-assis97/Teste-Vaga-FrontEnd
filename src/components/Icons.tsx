import type { ReactNode, SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number;
}

/** Base comum: ícones decorativos (aria-hidden) com traço herdando `currentColor`. */
function createIcon(viewBox: string, strokeWidth: number, children: ReactNode) {
  return function Icon({ size = 24, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {children}
      </svg>
    );
  };
}

// ---- Barra de benefícios ---------------------------------------------------
export const ShieldIcon = createIcon(
  '0 0 24 24',
  1.6,
  <>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12 2.3 2.3 4.2-4.6" />
  </>,
);

export const TruckIcon = createIcon(
  '0 0 24 24',
  1.6,
  <>
    <path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7" />
    <circle cx="7" cy="17" r="1.8" />
    <circle cx="17" cy="17" r="1.8" />
  </>,
);

export const CardIcon = createIcon(
  '0 0 24 24',
  1.6,
  <>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M2.5 9.5h19M6 15h5" />
  </>,
);

// ---- Header ---------------------------------------------------------------
export const SearchIcon = createIcon(
  '0 0 32 32',
  1.8,
  <>
    <circle cx="14" cy="14" r="8" />
    <path d="m20 20 7 7" />
  </>,
);

export const OrdersIcon = createIcon(
  '0 0 32 32',
  1.8,
  <>
    <path d="M4 10 16 4l12 6v14l-12 5L4 24V10Z" />
    <path d="M4 10l12 5 12-5M16 15v14M10 18l3-1.5-3-1.5" />
  </>,
);

export const HeartIcon = createIcon(
  '0 0 32 32',
  1.8,
  <path d="M16 27C6 20 3 14.5 3 10.8 3 7.6 5.5 5 8.7 5c2.8 0 5.3 1.7 7.3 4.5C18 6.7 20.500 5 23.300 5 26.500 5 29 7.600 29 10.800 29 14.500 26 20 16 27Z" />,
);

export const UserIcon = createIcon(
  '0 0 32 32',
  1.8,
  <>
    <circle cx="16" cy="16" r="13" />
    <circle cx="16" cy="12.500" r="4.500" />
    <path d="M7.500 25.500c1.500-4 4.800-6 8.500-6s7 2 8.500 6" />
  </>,
);

export const CartIcon = createIcon(
  '0 0 32 32',
  1.8,
  <>
    <path d="M3 5h4l3.500 15.500h14L28 10H8.500" />
    <circle cx="12" cy="25.500" r="2" />
    <circle cx="23" cy="25.500" r="2" />
  </>,
);

export const CrownIcon = createIcon(
  '0 0 24 24',
  1.5,
  <>
    <path d="m3 7 4.500 4.500L12 5l4.500 6.500L21 7l-2 11H5L3 7Z" />
    <path d="M5 21h14" />
  </>,
);

// ---- Categorias (linha 64x64) ----------------------------------------------
export const TechnologyIcon = createIcon(
  '0 0 64 64',
  2,
  <>
    <rect x="5" y="9" width="42" height="29" rx="2" />
    <path d="M19 38v9M11 47h26M5 32h42" />
    <rect x="40" y="24" width="18" height="30" rx="2.500" fill="#fff" />
    <path d="M46 49h6" />
  </>,
);

export const MarketIcon = createIcon(
  '0 0 64 64',
  2,
  <>
    <path d="M8 24 12 9h40l4 15" />
    <path d="M8 24c0 4 3.500 6 6.500 6S21 28 21 24c0 4 3.500 6 5.500 6s5.500-2 5.500-6c0 4 3 6 5.500 6s5.500-2 5.500-6c0 4 3.500 6 6.500 6s6.500-2 6.500-6" />
    <path d="M10 31v24h44V31" />
    <path d="M18 52h28M20 40h24l-2 8H22l-2-8Z" />
    <circle cx="25" cy="55" r="1.200" />
    <circle cx="39" cy="55" r="1.200" />
  </>,
);

export const DrinksIcon = createIcon(
  '0 0 64 64',
  2,
  <>
    <path d="M22 6h8v10l5 8v32H17V24l5-8V6Z" />
    <rect x="21" y="34" width="10" height="14" />
    <path d="M22 6h8M43 36h14v20H43z" />
    <path d="M43 42h14" />
  </>,
);

export const ToolsIcon = createIcon(
  '0 0 64 64',
  2,
  <>
    <path d="M10 54 38 26M54 54 26 26" />
    <path d="M38 26 31 19c-2-6 2-11 8-12l-4 6 4 4 6-4c-1 6-6 10-12 9" />
    <path d="M26 26 14 14l-5 2-3 6 6-3 10 10" />
    <path d="M12 56l-4-4 4-4 4 4-4 4Z" />
  </>,
);

export const HealthIcon = createIcon(
  '0 0 64 64',
  2,
  <>
    <path d="M32 26C20 18 18 12 18 9c0-4 3-7 7-7 3 0 5 2 7 5 2-3 4-5 7-5 4 0 7 3 7 7 0 3-2 9-14 17Z" transform="translate(0 4) scale(1)" />
    <path d="M4 44h11v14H4zM15 46l10-3h14c3 0 4 4 1 5l-11 1M15 56l10 3h12l22-12c2-1 1-4-1-4l-14 4" />
  </>,
);

export const FitnessIcon = createIcon(
  '0 0 64 64',
  2,
  <>
    <circle cx="38" cy="12" r="4.500" />
    <path d="m36 19-8 11 10 7-3 11M28 30l-9-1M38 37l9-5 5 2" />
    <path d="M6 58h44l8-10M14 58V46M10 46h12" />
  </>,
);

export const FashionIcon = createIcon(
  '0 0 64 64',
  2,
  <>
    <path d="m22 8 4 14-9 8v5l7 4-8 17h30l-8-17 7-4v-5l-9-8 4-14" />
    <path d="M22 8h10" />
    <path d="M44 6h10l3 5-8 9-8-9 3-5ZM41 11h16M49 6l-2 5 2 9 2-9-2-5" />
  </>,
);

// ---- Carrossel e modal ------------------------------------------------------
export const ChevronLeftIcon = createIcon('0 0 24 40', 3, <path d="M20 4 4 20l16 16" />);
export const ChevronRightIcon = createIcon('0 0 24 40', 3, <path d="m4 4 16 16L4 36" />);
export const CloseIcon = createIcon('0 0 24 24', 1.6, <path d="m4 4 16 16M20 4 4 20" />);
export const PlusIcon = createIcon('0 0 24 24', 2, <path d="M12 4v16M4 12h16" />);
export const MinusIcon = createIcon('0 0 24 24', 2, <path d="M4 12h16" />);
