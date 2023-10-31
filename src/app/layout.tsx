import type { Metadata } from "next";

import "./globals.css";
import Toaster from "@/context/Toaster";
export const metadata: Metadata = {
  title: "ZOD",
  description: "ZOD is a Next.js starter kit with batteries included.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
