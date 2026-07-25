import type { Metadata } from "next";
import { Chango, Chewy, Instrument_Serif, JetBrains_Mono, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

const chewy = Chewy ({
  variable: "--font-chewy",
  subsets: ["latin"],
  weight: "400"
});

const chango = Chango ({
  variable: "--font-chango",
  subsets: ["latin"],
  weight: "400"
});

const instrumentSerif = Instrument_Serif ({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400"
});

const jetbrainsMono = JetBrains_Mono ({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "My Playground",
  description: "It's Me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body 
        className={`${chewy.variable} ${chango.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
        suppressHydrationWarning
      >
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  );
}