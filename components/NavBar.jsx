import Image from "next/image"
import Link from "next/link"

export default function NavBar({ connectWallet }) {
  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap gap-2 items-center justify-between mx-auto p-4'>
        <a href='' className='flex items-center'>
          <div className='h-8 mr-3'>
            <svg
              className='w-[30px]'
              viewBox='0 0 511 511'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect width='511' height='511' rx='255.5' fill='#2864FF' />
              <path
                d='M223.229 344.442L165.376 182.691H204.338L266.126 344.442H223.229Z'
                fill='white'
              />
              <path
                d='M281.868 344.442V182.691H406.625V212.995H316.501V344.442H281.868Z'
                fill='white'
              />
              <path d='M346.018 265.731V235.428H406.625V265.731H346.018Z' fill='white' />
              <path
                d='M167.737 281.08L148.06 225.195L102.014 344.836H145.305L167.737 281.08Z'
                fill='white'
              />
            </svg>
          </div>
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>AeroFund</span>
        </a>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={connectWallet}>
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  )
}
