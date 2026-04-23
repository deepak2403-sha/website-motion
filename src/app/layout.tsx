import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MotionProvider } from "@/components/providers/MotionProvider";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Deepak Sharma — Software Engineer",
  description:
    "Software Development Engineer with 3+ years building mission-critical fintech infrastructure. Distributed systems, AI/ML, and high-availability engineering.",
  openGraph: {
    title: "Deepak Sharma — Software Engineer",
    description:
      "SDE at Juspay. Distributed systems, fintech, LLM tooling, and high-availability engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", archivo.variable, spaceGrotesk.variable)}>
      <body className={cn("antialiased font-sans bg-background text-foreground")}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
