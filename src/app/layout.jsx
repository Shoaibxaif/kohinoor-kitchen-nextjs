import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/constants/siteConfig";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: `${SITE.name} | Luxury Modular Kitchens & Furniture`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Kohinoor Kitchens designs premium modular kitchens and custom furniture for modern homes across Delhi NCR.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={playfairDisplay.className}>
      <head>
        <meta name="theme-color" content="#f7f5f0" />
      </head>
      <body suppressHydrationWarning className={dmSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
