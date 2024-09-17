import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import SecondaryNavMenu from '@/components/ui/Header/components/SecondaryNavMenu';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { secondaryNavItems } from '@/components/ui/Header/data';

export const metadata: Metadata = {
  title: 'Drive Sales with Shoppable UGC Solutions ｜ Hue.',
  description:
    'Hue helps you embed UGC videos on your marketing channels. Shoppable UGC featuring authentic video testimonials from everyday people gives customer’s confidence to add to cart.',
};

const glacialFont = localFont({
  src: [
    {
      path: '../../../public/static/fonts/glacial-indifference/GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/glacial-indifference/GlacialIndifference-Italic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../../public/static/fonts/glacial-indifference/GlacialIndifference-Regular.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-body',
});

const leagueFont = localFont({
  src: [
    {
      path: '../../../public/static/fonts/leage-spartan/LeagueSpartan-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/static/fonts/leage-spartan/LeagueSpartan-Light.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/static/fonts/leage-spartan/LeagueSpartan-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${glacialFont.variable} ${leagueFont.variable}`}
    >
      <body className="layout-body">
        <SecondaryNavMenu {...{ secondaryNavItems }} />
        <Header />
        <main className="layout-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
