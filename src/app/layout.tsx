import 'styles/main.scss';

import { DataContextProvider } from 'context/DataContext';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Challenge Multistep',
  description: 'Changellenge multistep Frontend Mentor'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <DataContextProvider>
      <html lang="pt-BR">
        <body
          suppressHydrationWarning={true}
          className="block md:flex items-center justify-center w-screen h-screen bg-pool"
        >
          {children}
        </body>
      </html>
    </DataContextProvider>
  );
}
