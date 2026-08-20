import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prisma-latam.com"),
  title: "PRISMA · Todo tu programa de seguros en una sola vista",
  description:
    "Organiza, visualiza y gestiona tu programa de seguros empresariales. Extracción automática de pólizas, vencimientos, TCOR y recomendaciones en una sola plataforma.",
  openGraph: {
    title: "PRISMA · Todo tu programa de seguros en una sola vista",
    description:
      "Convertimos el caos de los archivos en claridad operativa. Pólizas, vencimientos, TCOR y recomendaciones en una sola vista.",
    url: "https://www.prisma-latam.com",
    siteName: "PRISMA",
    locale: "es_LA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
