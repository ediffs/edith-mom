import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { FihProvider } from "@/components/fihContext";
import FihBox from "@/components/fihBox";

const atkynsonMono = localFont({
  src: "../../public/AtkynsonMonoNerdFontMono-Regular.otf",
  variable: "--font-atkynson-mono",
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
          <FihProvider>
            <Navbar />
            <FihBox />
            {children}
          </FihProvider>
        </main>
      </body>
    </html>
  );
}
