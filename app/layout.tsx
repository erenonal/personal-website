import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Script from "next/script";
export const metadata: Metadata = {
  title: {
    default: "erenonal.com",
    template: "%s | erenonal.com",
  },
  description: "Front end developer",
  openGraph: {
    title: "erenonal.com",
    description: "Front end developer",
    url: "https://erenonal.com",
    siteName: "erenonal.com",
    images: [
      {
        url: "https://erenonal.com/erenonal.jpg",
        width: 1200,
        height: 630,
        alt: "Eren Onal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "erenonal.com",
    description: "Front end developer",
    images: ["https://erenonal.com/erenonal.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <link rel="canonical" href="https://erenonal.com" />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Eren Onal",
              url: "https://www.linkedin.com/in/onaleren",
              sameAs: ["https://www.linkedin.com/in/onaleren"],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Eren Onal Web Development",
              },
              image: "https://erenonal.com/erenonal.jpg",
              description:
                "Frontend Developer specializing in JavaScript, React, Vue.js, and web development technologies.",
            }),
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F4QXSG320S"
        ></Script>
        <Script id="google-analytics">
          {` 
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F4QXSG320S');
          `}
        </Script>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
