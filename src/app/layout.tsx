import { type Metadata } from 'next';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';
import { Analytics } from "@vercel/analytics/react"

import '@/styles/tailwind.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Bradley Dirheimer',
    default: 'Bradley Dirheimer - Senior Consultant and Software Engineer',
  },
  description:
    'I\'m Bradley Dirheimer, a Senior Consultant and Software Engineer based in Hamilton, Ohio. I specialize in Salesforce, data platforms, and building cutting-edge solutions that optimize business processes and improve customer experiences.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
