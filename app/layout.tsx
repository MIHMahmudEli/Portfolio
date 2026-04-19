import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohsin Ibna Hossain — Developer Portfolio",
  description:
    "Full-stack developer & CS student at AIUB. Building web apps, Android applications, and exploring data science. Check out my projects on GitHub.",
  keywords: [
    "Mohsin Ibna Hossain",
    "MIHMahmudEli",
    "portfolio",
    "developer",
    "AIUB",
    "software engineer",
    "full stack",
    "Android",
    "JavaScript",
    "Kotlin",
  ],
  authors: [{ name: "Mohsin Ibna Hossain", url: "https://github.com/MIHMahmudEli" }],
  openGraph: {
    title: "Mohsin Ibna Hossain — Developer Portfolio",
    description: "Full-stack developer & CS student at AIUB.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohsin Ibna Hossain — Developer Portfolio",
    description: "Full-stack developer & CS student at AIUB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
