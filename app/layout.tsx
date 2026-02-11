import type { Metadata } from "next";
import { Prompt, Potta_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui";

const prompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const pottaOne = Potta_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-potta",
});

export const metadata: Metadata = {
  title: "PiPn",
  description: "Join a global trading community. Share ideas, offer services, and build credibility - all in one platform."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${prompt.className} ${pottaOne.variable} antialiased`}>
        <Toaster
          position="top-right"
          expand={true}
          richColors={false}
          closeButton={true}
          toastOptions={{
            style: {
              border: "none",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
