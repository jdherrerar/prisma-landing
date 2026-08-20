const HEX_POINTS = "12 2 20.66 7 20.66 17 12 22 3.34 17 3.34 7";

/**
 * Marca de agua hexagonal para fondos oscuros (hero y CTA).
 * Decorativa: se oculta a lectores de pantalla.
 */
export function HexWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <polygon
        points={HEX_POINTS}
        fill="none"
        stroke="#06B6D4"
        strokeWidth="0.35"
        opacity="0.35"
      />
      <polygon
        points={HEX_POINTS}
        fill="none"
        stroke="#0891B2"
        strokeWidth="0.35"
        opacity="0.5"
        transform="translate(-1.2 0.8) scale(0.9)"
      />
    </svg>
  );
}
