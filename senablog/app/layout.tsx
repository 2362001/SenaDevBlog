import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sena Dev Blog",
  description: "Sena Dev Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      {/* <html lang="en" suppressHydrationWarning>
      <CrispProvider />
      <body className={font.className}>
        <ToasterProvider />
        <ModalProvider />
        {children}
      </body>
    </html> */}
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
