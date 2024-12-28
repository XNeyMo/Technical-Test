import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { plazaKitDarkTheme, PlazaKitProvider } from "@crhis35/plazakit";

const latoSans = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={latoSans.className}
      >
        <PlazaKitProvider theme={plazaKitDarkTheme}>
          {children}
        </PlazaKitProvider>
      </body>
    </html>
  );
}
