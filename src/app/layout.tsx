import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const atkynsonMono = localFont({
  src: "../../public/AtkynsonMonoNerdFontMono-Regular.otf",
  variable: "--font-atkynson-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "edith's site!",
  description: "personal website & portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${atkynsonMono.variable} ${atkynsonMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          <Navbar />
        </main>
        {children}
      </body>
    </html>
  );
}
