import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProvidersChakra } from "./providersChakra";
import Header from "@/components/header";
import { ProvidersTanstack } from "./providersTanstack";
import MainLayout from "@/components/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Восход",
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ProvidersTanstack>
          <ProvidersChakra>
            <Header />
            <MainLayout>{children}{modal}</MainLayout>
          </ProvidersChakra>
        </ProvidersTanstack>
      </body>
    </html>
  );
}
