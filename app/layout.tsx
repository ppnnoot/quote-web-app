import Link from 'next/link';
import './globals.css'
import './img/bg.webp'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='h-full w-screen' lang="en">
      <body className="h-full">
        <div className="bg-[url('./img/bg.webp')] bg-repeat h-full">
          <div className='container mx-auto px-4 w-full'>
            <div className='fixed top-0 left-0 w-full'>
              <div className='flex justify-between items-center w-full py-4 px-6'>
                <Link href={"./quote"} className='text-2xl font-bold'>Quote App</Link>
                <div className='bg-gray-400 w-8 h-8 rounded-full outline outline-2 outline-offset-4 outline-gray-400 hover:cursor-pointer'></div>
              </div>
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
