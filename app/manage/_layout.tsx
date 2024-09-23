import './style.css'

export default function ManageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col h-screen">
            <div className='fixed flex justify-between px-4 w-full items-center drop-shadow-md bg-white'>
            <h1 className="text-2xl font-bold py-4 h-16">Quote Management</h1>
            <div className='flex items-center'>
            <button className='py-1.5 px-3.5 rounded-md bg-blue-300'>Logout</button>
            <div className='bg-blue-300 size-12 rounded-full ml-4'></div>
            </div>
        </div>

        <div className='flex flex-col mt-14 srcoll container mx-auto '>
            {children}
        </div>
        
      </div>
    ); 
  }