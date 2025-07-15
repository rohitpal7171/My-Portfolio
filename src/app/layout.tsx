import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { PageTransition } from '@/components/layout/PageTransition';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })


export const metadata: Metadata = {
  title: 'CodeSphere by Rohit',
  description: 'The interactive portfolio of Rohit Singh Pal, a frontend software developer specializing in React.js, modern web technologies, and creating immersive digital experiences.',
  keywords: ['Rohit Singh Pal', 'Portfolio', 'Software Developer', 'Frontend Developer', 'React Developer', 'TypeScript', 'Next.js'],
  authors: [{ name: 'Rohit Singh Pal' }],
  creator: 'Rohit Singh Pal',
  openGraph: {
    title: 'CodeSphere by Rohit',
    description: 'Explore the interactive portfolio of Rohit Singh Pal, a creative frontend developer.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'CodeSphere by Rohit',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with a link to your OG image
        width: 1200,
        height: 630,
        alt: 'Rohit Singh Pal - Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeSphere by Rohit',
    description: 'Explore the interactive portfolio of Rohit Singh Pal, a creative frontend developer.',
    creator: '@your-twitter-handle', // Replace with your Twitter handle
    images: ['https://placehold.co/1200x630.png'], // Replace with a link to your OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, "font-body antialiased")} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>
            {children}
          </PageTransition>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
