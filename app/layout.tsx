import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://chamidu-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chamidu Sandeepa — Full-Stack & DevOps Engineer",
    template: "%s | Chamidu Sandeepa",
  },
  description:
    "Chamidu Sandeepa is a Computing & Information Systems undergraduate focused on full-stack engineering, cloud infrastructure, and dependable digital products.",
  applicationName: "Chamidu Sandeepa Portfolio",
  keywords: [
    "Chamidu Sandeepa",
    "Full-Stack Engineer",
    "DevOps",
    "Cloud Infrastructure",
    "Spring Boot",
    "React Native",
    "AWS",
    "Terraform",
  ],
  authors: [{ name: "Chamidu Sandeepa" }],
  creator: "Chamidu Sandeepa",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Chamidu Sandeepa — Engineering with intention",
    description:
      "Full-stack engineering, cloud infrastructure, and thoughtful digital experiences.",
    siteName: "Chamidu Sandeepa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chamidu Sandeepa — Full-Stack & DevOps Engineer",
    description: "Building digital products with a systems mindset.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#10110e",
  colorScheme: "dark",
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