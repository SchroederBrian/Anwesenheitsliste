import '../app/globals.css';
import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Anwesenheitsliste',
  description: 'Moderne Anwesenheitsliste – Frontend Mockup',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="h-full">
      <body className="h-full">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}