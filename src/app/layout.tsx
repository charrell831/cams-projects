import type { Metadata } from "next";
import { League_Spartan, Pinyon_Script, Playfair } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--league-spartan',
})

const pinyonScript = Pinyon_Script({
  subsets: ["latin"], // Adjust as needed
  weight: "400", // Adjust as needed
  variable: '--pinyon-script',
});

const playfair = Playfair({
  subsets: ["latin"], // Adjust as needed
  weight: "400", // Adjust as needed
  variable: '--playfair',
});


export const metadata: Metadata = {
  title: "Cams Projects",
  description: "a site by cam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} ${pinyonScript.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
