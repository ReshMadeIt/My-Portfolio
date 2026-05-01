import './globals.css'
import { Analytics } from '@vercel/analytics/next';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Reshley Atsiaya - Portfolio",
  icons: {
    icon: "icons/science.png",
  },
  description: "Android developer building modern mobile experiences",
  openGraph: {
    title: "Reshley Atsiaya",
    description: "Android developer portfolio",
    url: "https://reshleyatsiaya.vercel.app/",
    siteName: "ReshMadeIt Portfolio",
    images: [
      {
        url: "/reshmadeit.png",
        width: 1080,
        height: 1080,
        alt: "Reshley Portfolio",
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
