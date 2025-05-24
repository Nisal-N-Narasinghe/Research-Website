import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "24-25J-216-Research",
  description: "LLM BASED MULTI-AGENT PLATFORM FOR WORKPLACE TASK AUTOMATION",
  generator: "Next.js",
  applicationName: "24-25J-216-Research-Website",
  authors: [
    {
      name: "24-25J-216",
    },
  ],
  icons: {
    icon: "/images/logo_1.svg",
  },
  keywords: [
    "LLM",
    "Multi-Agent",
    "Platform",
    "Workplace",
    "Task Automation",
    "Research",
  ],
  creator: "24-25J-216",
  publisher: "24-25J-216",
  openGraph: {
    title: "24-25J-216-Research",
    description: "LLM BASED MULTI-AGENT PLATFORM FOR WORKPLACE TASK AUTOMATION",
    url: "https://24-25j-216-research-website.vercel.app/",
    siteName: "24-25J-216-Research",
    images: [
      {
        url: "/images/system_overview_diagram.png",
        width: 800,
        height: 600,
        alt: "24-25J-216 Research System Overview Diagram",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@24-25J-216",
    title: "24-25J-216-Research",
    description: "LLM BASED MULTI-AGENT PLATFORM FOR WORKPLACE TASK AUTOMATION",
    images: [
      {
        url: "/images/system_overview_diagram.png",
        width: 800,
        height: 600,
        alt: "24-25J-216 Research System Overview Diagram",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
