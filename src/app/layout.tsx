import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siren MG | Toma el Manubrio de tu Empresa",
  description: "Sistema de Gobernanza, Dirección Fraccional y Captura de EBITDA para empresas B2B en Chile.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
