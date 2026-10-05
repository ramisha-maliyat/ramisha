import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.ramishamaliyat.com";
const title = "Shaikh Ramisha Maliyat | Software Developer";
const description =
  "Software developer specialising in business applications, data engineering (BigQuery, SQL), Looker BI dashboards and API integration. Based in Dhaka, Bangladesh.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Ramisha Maliyat",
  },
  description,
  keywords: [
    "Software Developer",
    "Data Engineer",
    "BigQuery",
    "Looker",
    "C#",
    ".NET",
    "SQL Server",
    "REST API",
    "Next.js",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Shaikh Ramisha Maliyat", url: siteUrl }],
  creator: "Shaikh Ramisha Maliyat",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ramisha Maliyat",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
