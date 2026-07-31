import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppChatButton from "@/components/common/WhatsAppChatButton";
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
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Luxury Modular Kitchens & Furniture`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Kohinoor Kitchens designs premium modular kitchens and custom furniture for modern homes across Delhi NCR.",
  keywords: [
    "modular kitchen Delhi NCR",
    "custom wardrobes Delhi NCR",
    "luxury beds Delhi NCR",
    "modular sofa design",
    "TV panel design Delhi NCR",
    "dining furniture Delhi NCR",
  ],
  applicationName: SITE.name,
  generator: "Next.js",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: SITE.name,
    description:
      "Kohinoor Kitchens designs premium modular kitchens and custom furniture for modern homes across Delhi NCR.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE.url}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} preview image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description:
      "Kohinoor Kitchens designs premium modular kitchens and custom furniture for modern homes across Delhi NCR.",
    images: [`${SITE.url}/og-image.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={playfairDisplay.className} data-scroll-behavior="smooth">
      <head>
        <meta name="theme-color" content="#f7f5f0" />
      </head>
      <body suppressHydrationWarning className={dmSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppChatButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": SITE.url,
              name: SITE.name,
              url: SITE.url,
              telephone: SITE.phone,
              email: SITE.email,
              logo: `${SITE.url}/favicon.svg`,
              image: `${SITE.url}/og-image.svg`,
              description:
                "Kohinoor Kitchens designs premium modular kitchens and custom furniture for modern homes across Delhi NCR.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "G-396, Shaheed Nagar",
                addressLocality: "Ghaziabad",
                addressRegion: "Uttar Pradesh",
                postalCode: "201006",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.67761,
                longitude: 77.33542,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "19:00",
                },
              ],
              priceRange: "₹₹",
              sameAs: [SITE.mapUrl],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "120",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
