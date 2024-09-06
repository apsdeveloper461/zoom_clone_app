import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoom Clone  - By Mehboob Alam",
  description:
    "A Zoom Clone built with Next.js for learning purposes. This project contains steam, recording, and chat features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme:dark,
      layout:{
        logoImageUrl:'/icons/main-logo.svg',
        socialButtonsVariant:'iconButton'
      },
      variables:{
        colorText:'#FFF',
        colorPrimary:'#0E78F9',
        colorBackground:'#1C1F2E',
        colorInputText:'#fff',
        // colorInputBackground:'#252a41',
     
      }
    }
    }
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>
          {children}
        <Toaster/>
          </body>
      </html>
    </ClerkProvider>
  );
}
