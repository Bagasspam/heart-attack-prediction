import React from "react";
import Navbar from "./components/Navbar"; // Impor Navbar
import { Geist, Geist_Mono } from "next/font/google"; // Menggunakan font dari Google
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Heart Attack Prediction App",
  description: "Predict heart attack risk based on user data",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0 }}
      >
        {/* Navbar tetap di sini untuk setiap halaman */}
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar/Navbar dengan lebar 1/4 */}
          <div className="lg:w-1/4 w-full bg-gray-700 text-white">
            <Navbar />
          </div>

          {/* Konten Utama dengan lebar 3/4 */}
          <div className="lg:w-3/4 w-full">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
