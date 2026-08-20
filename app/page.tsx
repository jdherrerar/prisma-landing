import {
  FolderX,
  CalendarClock,
  EyeOff,
  FileSpreadsheet,
  ScanText,
  LayoutDashboard,
  Calculator,
  ClipboardCheck,
  Download,
  ShieldCheck,
  FileStack,
  TrendingUp,
  Mail,
  Globe,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { DemoButton } from "@/components/DemoButton";
import { ProductMockup } from "@/components/ProductMockup";
import { HexWatermark } from "@/components/HexPattern";
import { CONTACT_EMAIL, SITE_URL, LINKEDIN_URL } from "@/lib/config";

const ICON_PROPS = { size: 22, strokeWidth: 1.6, "aria-hidden": true } as const;

const PROBLEMAS = [
  {
    icon: <FolderX {...ICON_PROPS} />,
    title: "Pólizas dispersas en 40 carpetas",
    text: "PDFs en correos, carpetas compartidas y escritorios. Encontrar una cobertura toma horas, no segundos.",
  },
  {
    icon: <CalendarClock {...ICON_PROPS} />,
    title: "Vencimientos que se pasan",
    text: "Sin alertas centralizadas, una renovación olvidada deja a la empresa descubierta justo cuando más importa.",
  },
  {
    icon: <EyeOff {...ICON_PROPS} />,
    title: "Cero visibilidad del costo del riesgo",
    text: "Primas, siniestros y costos administrativos viven en sistemas distintos. Nadie ve el costo total del riesgo.",
  },
  {
    icon: <FileSpreadsheet {...ICON_PROPS} />,
    title: "Horas transcribiendo a Excel",
    text: "Cada póliza se copia a mano a una planilla que queda desactualizada al mes siguiente.",
  },
];

const FEATURES = [
  {
    icon: <ScanText {...ICON_PROPS} />,
    title: "Extracción automática de pólizas",
    text: "Sube el PDF y PRISMA extrae con IA el número, ramo, vigencias, primas, asegurados y corredor. Tú solo revisas y confirmas.",
  },
  {
    icon: <LayoutDashboard {...ICON_PROPS} />,
    title: "Dashboard en una sola vista",
    text: "Primas por aseguradora, ramo y año, comisiones y un calendario de vencimientos con alertas. Todo tu programa de un vistazo.",
  },
  {
    icon: <Calculator {...ICON_PROPS} />,
    title: "TCOR: costo total del riesgo",
    text: "Consolida primas, siniestros, endosos y costos administrativos para conocer el costo real de tu riesgo, año a año y por ramo.",
  },
  {
    icon: <ClipboardCheck {...ICON_PROPS} />,
    title: "Seguimiento de recomendaciones",
    text: "Las recomendaciones de tus aseguradoras dejan de perderse: estados, fechas de seguimiento y responsables en un solo tablero.",
  },
  {
    icon: <FileStack {...ICON_PROPS} />,
    title: "Suscripción sin fricción",
    text: "Extrae la información de formularios de suscripción automáticamente para preparar renovaciones más rápido.",
  },
  {
    icon: <Download {...ICON_PROPS} />,
    title: "Exporta a Excel cuando quieras",
    text: "Tus datos siguen siendo tuyos. Descarga el programa completo a Excel con un clic para reportes o auditorías.",
  },
];

const ROLES = [
  {
    icon: <ShieldCheck {...ICON_PROPS} />,
    role: "Risk managers",
    title: "Control operativo total",
    text: "Vencimientos, coberturas y recomendaciones bajo control. Nada se vence sin aviso y cada pendiente tiene responsable y fecha.",
  },
  {
    icon: <FileStack {...ICON_PROPS} />,
    role: "Responsables de seguros",
    title: "Una sola fuente de verdad",
    text: "Se acabó transcribir pólizas a mano. La información entra una vez, queda ordenada y cualquiera del equipo la encuentra en segundos.",
  },
  {
    icon: <TrendingUp {...ICON_PROPS} />,
    role: "CFOs",
    title: "Decisiones con datos",
    text: "El TCOR muestra cuánto cuesta realmente el riesgo de la compañía: primas, siniestros y gastos, comparables por año y por ramo.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink text-white">
          <HexWatermark className="-right-24 -top-24 h-[420px] w-[420px]" />
          <HexWatermark className="-bottom-40 -left-32 h-[380px] w-[380px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="mb-4 text-sm font-medium tracking-[0.2em] text-cyan-brand">
                CLARIDAD OPERATIVA
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-[0.06em] sm:text-5xl">
                Todo tu programa de seguros en una sola vista
              </h1>
              <p className="mt-5 max-w-md text-lg text-slate-300">
                PRISMA convierte el caos de los archivos en claridad operativa.
                Organiza, visualiza y gestiona tus seguros empresariales sin
                fricción.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <DemoButton variant="onDark" />
                <a
                  href="#producto"
                  className="text-sm font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
                >
                  Ver cómo funciona
                </a>
              </div>
            </div>
            <ProductMockup />
          </div>
        </section>

        {/* Problema */}
        <section id="problema" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[0.06em]">
              Tu programa de seguros no debería vivir en 40 carpetas
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Gestionar seguros empresariales con correos y planillas tiene un
              costo real. Estos son los problemas que escuchamos todos los días.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROBLEMAS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <span className="inline-flex rounded-lg bg-red-50 p-2.5 text-error">
                    {p.icon}
                  </span>
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Producto */}
        <section id="producto" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[0.06em]">
              Un prisma que ordena lo difuso
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              PRISMA toma un programa de seguros disperso en archivos y lo
              devuelve claro, ordenado y legible.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
                >
                  <span className="inline-flex rounded-lg bg-cyan-50 p-2.5 text-teal-brand">
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quién */}
        <section id="para-quien" className="scroll-mt-20 bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[0.06em]">
              Hecho para quienes responden por el riesgo
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {ROLES.map((r) => (
                <div
                  key={r.role}
                  className="rounded-xl border border-slate-200 bg-white p-8"
                >
                  <span className="inline-flex rounded-lg bg-slate-100 p-2.5 text-ink">
                    {r.icon}
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-brand">
                    {r.role}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative overflow-hidden bg-ink py-20 text-white">
          <HexWatermark className="-right-20 -bottom-32 h-[360px] w-[360px]" />
          <div className="relative mx-auto max-w-6xl px-4 text-center">
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[0.06em]">
              Encuentra cualquier póliza en segundos
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Agenda una demo y mira tu programa de seguros en una sola vista.
            </p>
            <div className="mt-8 flex justify-center">
              <DemoButton variant="onDark" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contacto */}
      <footer id="contacto" className="scroll-mt-20 border-t border-slate-100 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <div className="flex flex-col gap-2 text-sm text-slate-600 sm:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <Mail size={16} strokeWidth={1.6} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={`https://${SITE_URL}`}
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <Globe size={16} strokeWidth={1.6} aria-hidden="true" />
              {SITE_URL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PRISMA en LinkedIn"
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-slate-400">
          © 2026 PRISMA. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
