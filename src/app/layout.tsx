import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Stars from "./_components/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mussaddiq Mahmood Resume",
  description: "Welcome to Mussaddiq Mahmood's resume. Explore my skills, experience, and achievements.",

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={` ${inter.className} bg-stone-200 dark:bg-gray-900 relative overflow-x-hidden `}
      >
        <Stars/>
        {children}
      </body>
    </html>
  );
}
