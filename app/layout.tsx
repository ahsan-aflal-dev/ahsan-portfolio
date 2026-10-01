import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tuan Ahsan Aflal | AI/ML Engineer",
    template: "%s | Tuan Ahsan Aflal",
  },
  description:
    "Tuan Ahsan Aflal is an AI/ML Engineer building intelligent systems that think, learn, and act.",
  keywords: [
    "Tuan Ahsan Aflal",
    "Ahsan",
    "AI Engineer",
    "ML Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Agentic AI",
    "Intelligent Systems",
  ],
  authors: [
    {
      name: "Tuan Ahsan Aflal",
    },
  ],
  creator: "Tuan Ahsan Aflal",
  metadataBase: new URL("https://ahsan-aflal-dev.vercel.app"),

  icons: {
    icon: "/brand/ahsan-mark.png",
    shortcut: "/brand/ahsan-mark.png",
    apple: "/brand/ahsan-mark.png",
  },

  openGraph: {
    title: "Tuan Ahsan Aflal | AI/ML Engineer",
    description:
      "Building Intelligent Systems That Think, Learn & Act.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}