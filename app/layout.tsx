import Link from 'next/link'
import './globals.css'
import './img/bg.webp'
import personIcon from './img/person.svg'


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
                <Link href={"./quote"}  className='text-2xl font-bold transition hover:scale-105 active:scale-95'>Quote App</Link>
                <Link href="./login" className='transition hover:scale-105 active:scale-95 w-8 h-8 outline outline-2 outline-offset-4 hover:outline-offset-[3px] rounded-full outline-gray-400'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" 
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </Link>
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
