import Image from "next/image";

const ICON_RATIO = 511 / 573;
const LOCKUP_RATIO = 1398 / 573;

/** Isotipo hexagonal, recortado del asset oficial del manual de marca. */
export function HexIsotype({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src="/brand/prisma-icon.png"
      alt=""
      width={Math.round(size * ICON_RATIO)}
      height={size}
      className={className}
      priority
    />
  );
}

/** Lockup completo (isotipo + wordmark), tal como en el manual de marca. */
export function Logo({ height = 70 }: { height?: number }) {
  return (
    <Image
      src="/brand/logo-prisma.png"
      alt="PRISMA"
      width={Math.round(height * LOCKUP_RATIO)}
      height={height}
      priority
    />
  );
}
