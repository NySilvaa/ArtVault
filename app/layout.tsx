import "./globals.css";
import localFont from "next/font/local"

// FONTS CONFIG
export const satoshiRegular = localFont({
  src: "../public/fonts/Satoshi-Medium.otf",
  weight: "400",
  style: "normal",
  display: "swap"
});

export const satoshiLight = localFont({
  src: "../public/fonts/Satoshi-Light.otf",
  weight: "300",
  style: "normal",
  display: "swap"
});

export const satoshiBold = localFont({
  src: "../public/fonts/Satoshi-Bold.otf",
  weight: "600",
  style: "normal",
  display: "swap"
});

export const leotaroFree = localFont({
  src: "../public/fonts/Leotaro-Free.otf",
  weight: "500",
  style: "normal",
  display: "swap",
  variable: "--font-leotaro"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${satoshiRegular.className}`}>{children}</body>
    </html>
  );
}
