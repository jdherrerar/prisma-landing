import { ArrowRight } from "lucide-react";
import { DEMO_URL } from "@/lib/config";

export function DemoButton({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "onDark";
  className?: string;
}) {
  const styles =
    variant === "onDark"
      ? "bg-cyan-brand text-ink hover:bg-cyan-300"
      : "bg-ink text-white hover:bg-slate-700";

  return (
    <a
      href={DEMO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors ${styles} ${className}`}
    >
      Agendar una demo
      <ArrowRight size={16} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
}
