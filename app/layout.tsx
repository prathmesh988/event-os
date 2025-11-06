import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { ThemeInitializer } from "@/components/shared/theme-initializer";
import { Toaster } from "@/components/shared/ui/toaster";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D Tale Creatrix - Premium Event Planning & Design",
  description:
    "Transform your dream events into reality with D Tale Creatrix. Professional event planning, wedding decoration, corporate events, and celebration management across India.",
  keywords:
    "event planning, wedding planner, corporate events, party planning, event management, celebration design, venue decoration",
  generator: "Next.js",
  openGraph: {
    title: "D Tale Creatrix - Premium Event Planning",
    description: "Professional event planning and design services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeInitializer />
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
