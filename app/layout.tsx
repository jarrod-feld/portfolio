import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jarrodfeld.dev"),
  title: "Jarrod Feld | Mobile Engineer (React Native & iOS)",
  description:
    "Portfolio of Jarrod Feld, a mobile software engineer shipping production React Native + TypeScript apps to the iOS App Store, serving 4,500+ active users, with automated testing, CI/CD, and Expo/EAS release pipelines.",

  keywords: [
    "Jarrod Feld",
    "Mobile Engineer",
    "Mobile Software Engineer",
    "React Native Engineer",
    "React Native Developer",
    "iOS Engineer",
    "iOS Developer",
    "TypeScript",
    "Expo",
    "EAS Build",
    "App Store",
    "Software Engineer I",
    "Associate Software Engineer",
    "Entry Level Mobile Engineer",
    "New Grad Software Engineer",
    "Software Engineer Intern",
    "Software Engineering Intern",
    "Maxxed Studios",
    "Cal Poly Pomona",
    "Portfolio",
  ],

  authors: [{ name: "Jarrod Feld", url: "https://www.jarrodfeld.dev" }],
  openGraph: {
    title: "Jarrod Feld | Mobile Engineer (React Native & iOS)",
    description:
      "Mobile software engineer shipping production React Native + TypeScript apps to the iOS App Store: 3 shipped apps, 4,500+ active users, users in 15 countries.",
    url: "https://www.jarrodfeld.dev",
    siteName: "Jarrod Feld Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.jarrodfeld.dev/lull-card.png",
        width: 2214,
        height: 1315,
        alt: "Lull, an iOS sleep sounds app built by Jarrod Feld"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarrod Feld | Mobile Engineer (React Native & iOS)",
    description:
      "Mobile software engineer shipping production React Native + TypeScript apps to the iOS App Store: 3 shipped apps, 4,500+ active users, users in 15 countries.",
    images: ["https://www.jarrodfeld.dev/lull-card.png"]
  },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-6CTSHNZ5WZ" />
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
