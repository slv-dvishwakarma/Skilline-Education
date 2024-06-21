import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/template/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skilline Education",
  description: "Skilline is transforming education by providing affordable, AI-powered training courses tailored to the needs of rural youth, job seekers, and corporate employees, ensuring alignment with job market demands.",
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
      </body>
    </html>
  );
}
