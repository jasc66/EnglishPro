import { Inter } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'EnglishPro | Inglés para Profesionales en Costa Rica',
  description:
    'Clases de inglés especializadas por sector para profesionales en Costa Rica. Medicina, tecnología, finanzas, derecho y más. Primera clase gratis.',
  keywords: 'inglés profesional costa rica, clases inglés empresarial, inglés médico, inglés tecnología',
  openGraph: {
    title: 'EnglishPro | Inglés para Profesionales',
    description: 'El inglés que habla tu industria. Planes desde ₡25,000.',
    type: 'website',
    locale: 'es_CR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
