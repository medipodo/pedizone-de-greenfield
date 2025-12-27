import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pedizone.de",
  description: "Placeholder",
  verification: {
    google: "UKM11TUW3GPbiy32IASvNysVIFKDtRUYHC-3ya_ge6o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
