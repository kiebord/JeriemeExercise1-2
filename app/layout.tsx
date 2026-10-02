import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jerieme.dev | BSIT Student and Aspiring Full-Stack Developer",
    template: "%s | Jerieme.dev",
  },
  description:
    "Personal portfolio of Jerieme Cosgafa, a BSIT student building simple, useful web apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
