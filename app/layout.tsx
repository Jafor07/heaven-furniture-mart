import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heavenfurnituremart.com"),
  title: "Heaven Furniture Mart — Luxury Bespoke Furniture in Chattogram",
  description:
    "Bespoke furniture and interior styling designed around your space and taste for a home that feels truly yours.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Heaven Furniture Mart — Luxury Bespoke Furniture in Chattogram",
    description:
      "Bespoke furniture and interior styling designed around your space and taste for a home that feels truly yours.",
    images: [{ url: "/images/hero/hero2.jpeg", alt: "Heaven Furniture Mart showroom and tailored furniture styling" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaven Furniture Mart — Luxury Bespoke Furniture in Chattogram",
    description:
      "Bespoke furniture and interior styling designed around your space and taste for a home that feels truly yours.",
    images: ["/images/hero/hero2.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
