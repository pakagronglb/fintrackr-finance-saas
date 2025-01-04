import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'

import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";

import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinTrackr",
  description: "Track your finances with FinTrackr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};
