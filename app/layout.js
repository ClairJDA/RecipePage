import { Young_Serif, Outfit } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon/icon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={`${youngSerif.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
