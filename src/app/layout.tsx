import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProvidersChakra } from "./providersChakra";
import Header from "@/header";
import { ProvidersTanstack } from "./providersTanstack";
import MainLayout from "@/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Восход",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ProvidersTanstack>
          <ProvidersChakra>
            <Header />
            <MainLayout>{children}</MainLayout>
          </ProvidersChakra>
        </ProvidersTanstack>
      </body>
    </html>
  );
}
