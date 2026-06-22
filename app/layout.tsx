import type { Metadata } from "next";
import { Chango, Chewy, Elms_Sans, Fredericka_the_Great, Geist, Geist_Mono } from "next/font/google";
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

const frederickaTheGreat = Fredericka_the_Great({
  variable: "--font-fredericka-the-great",
  subsets: ["latin"],
  weight: "400"
});

const chewy = Chewy ({
  variable: "--font-chewy",
  subsets: ["latin"],
  weight: "400"
});

const elmsSans = Elms_Sans ({
  variable: "--font-elms-sans",
  subsets: ["latin"],
  weight: "500"
});

const chango = Chango ({
  variable: "--font-chango",
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
        className={`${chewy.variable} ${frederickaTheGreat.variable} ${elmsSans.variable} ${chango.variable}`}
        suppressHydrationWarning
      >
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  );
}