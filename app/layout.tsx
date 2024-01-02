import Footer from "@/Components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TokenRefresher from "@/Components/TokenRefresher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Therapy",
  description: "Get started on your journey of self-improvement!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div>{/* <TokenRefresher /> */}</div>
        <footer className="absolute bottom-0 w-full mt-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
