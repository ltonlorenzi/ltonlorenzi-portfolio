import ThemeProvider from '@/context/ThemeProvider';
import TranslationsProvider from '@/context/TranslationsProvider';
import ReactQueryProvider from '@/utils/ReactQueryProvider';
import type { Metadata } from 'next';
import './globals.css';
import { Fira_Code } from 'next/font/google';
import { ReactNode } from 'react';

import { Navbar } from '../components/Navbar';
import initTranslations from '../i18n';

const firaCode = Fira_Code({ subsets: ['latin'] });
const i18nNamespaces = ['common'];

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  //Con este metodo solo puedo hacer server side translations. Para hacer las client-side tengo que definir el translations provider
  //Translations provider: provide translations to all of the nested components
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${firaCode.className} bg-custom`}>
        <ReactQueryProvider>
          <main className="min-h-screen transition-colors duration-300 p-12 content">
            <ThemeProvider>
              <TranslationsProvider
                locale={locale}
                resources={resources}
                namespaces={i18nNamespaces}
              >
                <Navbar locale={locale} />
                {children}
              </TranslationsProvider>
            </ThemeProvider>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}