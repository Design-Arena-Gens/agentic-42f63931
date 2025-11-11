import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple - Think Different",
  description: "Experience the future of innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sf-pro antialiased">
        {children}
      </body>
    </html>
  );
}
