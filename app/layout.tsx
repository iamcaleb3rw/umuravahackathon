import type { Metadata } from "next";

import { Work_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`flex flex-col min-h-screen ${workSans.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
