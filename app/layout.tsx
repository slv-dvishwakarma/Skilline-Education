import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/template/Header";
import { Footer } from "@/components/template/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skilline Education",
  description: "Empowering Minds: AI-Driven Education, Guaranteeing Fulfilling Careers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-fourthly ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
