import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GROWSMMPANEL - #1 Best & Cheapest SMM Panel",
  description:
    "Experience the power of the Best SMM panel with MoreThanPanel. Elevate your social media strategy with the Cheapest SMM panel in the market!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: dark,
    // }}
    >
      <html lang="en">
        <head>
          <link
            rel="shortcut icon"
            href="/imgs/panel-icon-dark.png"
            type="image/x-icon"
          />
        </head>
        <body className={lexend.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
