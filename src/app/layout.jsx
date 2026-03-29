import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Md Sumon Islam - Full-Stack Developer and DevOps Engineer',
  description: 'Full-Stack Developer and DevOps Engineer skilled in Laravel, Django, FastAPI, React, Linux server administration, CI/CD, Docker, and SIEM-driven security operations.',
  keywords: 'Full-Stack Developer, DevOps Engineer, Laravel, Django, FastAPI, React, Linux, CI/CD, SIEM, Bangladesh',
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