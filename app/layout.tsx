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
