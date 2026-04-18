import './globals.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: 'ReshMadeIt | Android Developer',
  description: 'Android developer building modern Compose apps.',
};

export default function RootLayout({ 
  children
 }: { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
        <Navbar/>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}