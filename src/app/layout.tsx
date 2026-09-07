import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Morgan — Software Engineer",
  description: "Portfolio of Alex Morgan, a software engineer building dependable web products and thoughtful interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        {children}
        <Script src="https://cdn-chatly.vyro.ai/chatly-make/sites-script/make-preview-runtime.js" strategy="afterInteractive" />
        <Script src="https://cdn-chatly.vyro.ai/chatly-make/sites-script/heading-override.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
