import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Header_51 from '@/components/Header_51';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'The Wild Oasis - 51',
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    //在app資料夾裡layout.js是body而pages.js是children(think:pages.js是路由)
    <html lang='en'>
      <body
        className={`${josefin.variable} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header_51 />
        <div className='flex-1 px-8 py-12'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
