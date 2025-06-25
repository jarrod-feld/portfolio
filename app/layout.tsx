import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jarrod's Portfolio",
  description: "Jarrod Feld's Portfolio",

  keywords: ["Portfolio", "Jarrod Feld", "Developer", 
    "Projects", "Web Developer", 
    "React", "Next.js",
    "Software Engineer","Software Developer",
    "Software Engineer Intern",
    "Software Engineering Intern",
    "Software Engineering"],

  authors: [{ name: "Jarrod Feld", url: "www.jarrodfeld.dev" }],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  openGraph: {
    title: "Jarrod's Portfolio",
    description: "Jarrod Feld's Portfolio showcasing personal projects and skills.",
    url: "www.jarrodfeld.dev",
    siteName: "Jarrod Feld Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://yourdomain.com/dp4.png",
        width: 1200,
        height: 630,
        alt: "Jarrod's profile Image"
      }
    ]
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Jarrod's Portfolio",
  //   description: "Jarrod Feld's Portfolio showcasing personal projects and skills.",
  //   creator: "@YourTwitterHandle",
  //   images: ["https://yourdomain.com/og-image.png"]
  // },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
            
<GoogleAnalytics gaId="G-6CTSHNZ5WZ" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}