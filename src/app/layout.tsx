import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "romeoparis.ch — Roméo Paris",
  description:
    "Le portfolio de Roméo Paris, 16 ans, candidat à un CFC d’informaticien dans la région de Fribourg.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="min-h-dvh antialiased">
        {children}
        <Script src="https://cdn-chatly.vyro.ai/chatly-make/sites-script/make-preview-runtime.js" strategy="afterInteractive" />
        <Script src="https://cdn-chatly.vyro.ai/chatly-make/sites-script/heading-override.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
