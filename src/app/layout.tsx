import type { Metadata } from "next";
import "./globals.scss";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { CSSProperties } from "react";
import Loading from "./components/loading/Loading";
import ReactLenis from "lenis/react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const gt = localFont({
  src: [
    {
      path: "../fonts/goodtiming.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const os = Open_Sans({ subsets: ["latin"] });

const title = "Vir2al Verse";

const description =
  " Vir2alVerse is the next step in quality entertainment, bringing a colorful collection of virtual talents to new and greater heights!";
const banner =
  "http://shubastore.caprover.venmi.art/api/public/dl/xBi_5PZz?inline=true";
const url = "https://vir2alverse.com";

export const metadata: Metadata = {
  title: title,

  metadataBase: new URL(url),

  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  keywords: [
    "Vir2alverse",
    "vir2al",
    "virtualverse",
    "vtubers agency",
    "vtuber groups",
    "vtuber",
    "anime",
    "streamer",
  ],
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
        style={
          {
            "--fontH": gt.style.fontFamily,
            "--fontP": os.style.fontFamily,
          } as CSSProperties
        }
      >
        <Loading isMain={true} />
        <ReactLenis root>
          <Header />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
