import { LogIn } from "lucide-react";
import { LOGIN_URL } from "@/lib/config";

/**
 * Acceso para usuarios existentes de PRISMA. Estilo secundario (ghost) para
 * no competir con el CTA principal de "Agendar una demo".
 */
export function LoginButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LOGIN_URL}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold tracking-wide text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink ${className}`}
    >
      <LogIn size={16} strokeWidth={1.6} aria-hidden="true" />
      Iniciar sesión
    </a>
  );
}
