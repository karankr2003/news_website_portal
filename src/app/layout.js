import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkMode from "../components/DarkMode";
import SearchBar from "../components/SearchBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "News Website",
  description: "My News Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: "var(--background-color)", color: "var(--font-color)" }}
      >
        {children}
      </body>
    </html>
  );
}
