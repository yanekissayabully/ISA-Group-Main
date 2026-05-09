// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'IsaGroup',
//   description: 'Размещение рекламы на LED экранах в Алматинской области: г.Талгар, г.Есик, г.Каскелен',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IsaGroup',
  description: 'Размещение рекламы на LED экранах в Алматинской области: г.Талгар, г.Есик, г.Каскелен',
  icons: '/issa.svg'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru"> {/* поменял en на ru для русского языка */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}