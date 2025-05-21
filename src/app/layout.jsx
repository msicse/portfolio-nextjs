import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Md Sumon Islam - Full Stack Developer | PHP | Laravel | MySQL | JavaScript',
  description: 'Full-Stack Web Developer with 6+ years of experience in PHP, Laravel, MySQL, and JavaScript, specializing in digitalizing workflows and optimizing IT infrastructure.',
  keywords: 'PHP Developer, Laravel Developer, Full Stack Developer, Web Developer Bangladesh, DevOps Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}