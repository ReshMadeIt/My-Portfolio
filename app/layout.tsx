import './globals.css'
import { Analytics } from '@vercel/analytics/next';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Reshley Atsaiya - Portfolio",
  description: "Android developer building modern mobile experiences",
  openGraph: {
    title: "Reshley Atsaiya",
    description: "Android developer portfolio",
    url: "https://reshleyatsiaya.vercel.app/",
    siteName: "ReshMadeIt Portfolio",
    images: [
      {
        url: "https://reshleyatsiaya.vercel.app/og-image.",
        width: 1200,
        height: 630,
        alt: "Reshley Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ 
  children
 }: { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body
        data-render-layout="root-layout"
        className="flex min-h-screen flex-col bg-[#0a0a0a] text-white"
      >
        <Navbar/>
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
