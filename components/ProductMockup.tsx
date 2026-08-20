import { HexIsotype } from "./Logo";

/**
 * Mockup estilizado del dashboard de PRISMA: marco de navegador con KPIs,
 * gráficos abstractos y tabla de pólizas con estados de vencimiento.
 */
export function ProductMockup() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
      role="img"
      aria-label="Vista ilustrada del dashboard de PRISMA: primas, vencimientos y pólizas en una sola pantalla"
    >
      {/* Barra de navegador */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-[10px] text-slate-400 ring-1 ring-slate-200">
          prisma-latam.com/dashboard
        </span>
      </div>

      {/* Barra de la app */}
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
        <HexIsotype size={16} />
        <span className="text-[10px] font-semibold tracking-[0.06em] text-ink">
          PRISMA
        </span>
        <div className="ml-auto flex gap-3">
          {["Dashboard", "Pólizas", "TCOR"].map((t, i) => (
            <span
              key={t}
              className={`text-[9px] ${i === 0 ? "font-semibold text-teal-brand" : "text-slate-400"}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-3">
        {/* KPIs */}
        {[
          { label: "Pólizas vigentes", value: "48" },
          { label: "Prima total anual", value: "$2.4B" },
          { label: "Vencen en 30 días", value: "5", warn: true },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            <p className="text-[9px] text-slate-500">{kpi.label}</p>
            <p
              className={`text-lg font-semibold ${kpi.warn ? "text-warning" : "text-ink"}`}
            >
              {kpi.value}
            </p>
          </div>
        ))}

        {/* Gráfico de barras: primas por año */}
        <div className="rounded-lg border border-slate-100 p-3 sm:col-span-2">
          <p className="mb-2 text-[9px] font-medium text-slate-500">
            Primas por año y ramo
          </p>
          <svg viewBox="0 0 200 60" className="w-full" aria-hidden="true">
            {[
              [10, 28, 14],
              [42, 36, 10],
              [74, 22, 20],
              [106, 40, 8],
              [138, 30, 18],
              [170, 44, 12],
            ].map(([x, h1, h2], i) => (
              <g key={i}>
                <rect x={x} y={58 - h1} width="20" height={h1} rx="2" fill="#0F172A" />
                <rect x={x} y={58 - h1 - h2 - 2} width="20" height={h2} rx="2" fill="#06B6D4" />
              </g>
            ))}
          </svg>
        </div>

        {/* Dona: distribución por aseguradora */}
        <div className="rounded-lg border border-slate-100 p-3">
          <p className="mb-2 text-[9px] font-medium text-slate-500">
            Por aseguradora
          </p>
          <svg viewBox="0 0 60 60" className="mx-auto w-20" aria-hidden="true">
            <circle cx="30" cy="30" r="22" fill="none" stroke="#E2E8F0" strokeWidth="9" />
            <circle
              cx="30" cy="30" r="22" fill="none" stroke="#0F172A" strokeWidth="9"
              strokeDasharray="62 138" transform="rotate(-90 30 30)"
            />
            <circle
              cx="30" cy="30" r="22" fill="none" stroke="#0891B2" strokeWidth="9"
              strokeDasharray="42 158" strokeDashoffset="-62" transform="rotate(-90 30 30)"
            />
            <circle
              cx="30" cy="30" r="22" fill="none" stroke="#06B6D4" strokeWidth="9"
              strokeDasharray="28 172" strokeDashoffset="-104" transform="rotate(-90 30 30)"
            />
          </svg>
        </div>

        {/* Tabla de pólizas */}
        <div className="rounded-lg border border-slate-100 p-3 sm:col-span-3">
          <p className="mb-2 text-[9px] font-medium text-slate-500">
            Próximos vencimientos
          </p>
          <div className="space-y-1.5">
            {[
              { ramo: "Todo Riesgo Daños Materiales", dias: "12 días", tone: "bg-red-50 text-error" },
              { ramo: "Responsabilidad Civil", dias: "28 días", tone: "bg-amber-50 text-warning" },
              { ramo: "Transporte de Mercancías", dias: "45 días", tone: "bg-emerald-50 text-success" },
            ].map((row) => (
              <div
                key={row.ramo}
                className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-1.5"
              >
                <span className="text-[9px] text-slate-600">{row.ramo}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${row.tone}`}
                >
                  {row.dias}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
