import Footer from "@/Components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TokenRefresher from "@/Components/TokenRefresher";
import Navbar from "@/Components/Navbar";

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
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">{children}</div>
          <footer>
            <Footer />
          </footer>
          <div>{/* <TokenRefresher /> */}</div>
        </div>
      </body>
    </html>
  );
}
