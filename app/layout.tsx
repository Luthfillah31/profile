import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luthfillah | Portfolio",
  description: "Personal portfolio and digital workspace of Luthfillah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Updated with the coffee cream palette colors */}
      <body className={`${inter.className} bg-[#ece0d1] text-[#38220f] antialiased selection:bg-[#dbc1ac] selection:text-[#38220f]`}>
        {children}
      </body>
    </html>
  );
}