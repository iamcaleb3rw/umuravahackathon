import type { Metadata } from "next";

import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["400", "500", "600", "700"], // Include the weights you use
  style: ["normal", "italic"], // Optional, add italic if needed
  variable: "--font-dm-sans", // Optional: use a custom CSS variable
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
