import localFont from "next/font/local";
import "./globals.css";
import { AuthContextProvider } from "../_utils/auth-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lexie's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className="bg-[#1e1e1e] text-[#ffff] font-mono">{children}</body>
      </AuthContextProvider>
    </html>
  );
}
