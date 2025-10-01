import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "Stamp Sells and Collection in United Arab Emirates(UAE)",
  description: "Discover rare collectible stamps with detailed previews.",
  keywords: ["stamps", "collectibles", "rare stamps", "philately"],
  openGraph: {
    title: "Rare Stamp Collection",
    description: "An exclusive online portfolio of collectible stamps.",
    url: "https://www.mystampsite.com",
    siteName: "Stamp Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rare Stamp Collection",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
