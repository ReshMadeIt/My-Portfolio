import './ui/global.css';
import { ProjectsSection } from './components/ProjectsSection';

export const metadata = {
  title: 'ReshMadeIt | Android Developer',
  description: 'Android developer building modern Compose apps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white font-sans">
        {children}
        <ProjectsSection />
      </body>
    </html>
  );
}