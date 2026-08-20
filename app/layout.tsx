import './globals.css'
import { Analytics } from '@vercel/analytics/next';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "ReshMadeIt - Portfolio",
  icons: {
    icon: "/resh.png",
  },
  description: "Android developer building modern mobile experiences",
  openGraph: {
    title: "ReshMadeIt",
    description: "Android developer portfolio",
    url: "https://reshmadeit.vercel.app/",
    siteName: "ReshMadeIt Portfolio",
    images: [
      {
        url: "/resh.png",
        width: 1080,
        height: 1080,
        alt: "ReshMadeIt Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-render-layout="root-layout"
        className="flex min-h-screen flex-col bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300"
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
