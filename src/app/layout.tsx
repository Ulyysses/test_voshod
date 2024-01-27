import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import MainLayout from "@/components/main-layout";
import { Providers } from "@/lib/Providers";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Восход",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <MainLayout>{children}</MainLayout>
          {modal}
        </Providers>
      </body>
    </html>
  );
}
