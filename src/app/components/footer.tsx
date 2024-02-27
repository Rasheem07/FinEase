import Link from 'next/link'
import React from 'react'

export default function Footer(){
  return (
      <div className='w-full min-h-[40vh] bg-[#1F7D72] shadow-inner mx-auto text-[#f2f2f2] py-4 px-8 flex flex-col items-center'>
        <h1 className='text-xl font-bold py-4 text-center'>FinEase</h1>
        <div className="flex flex-row justify-around w-[75%]">
       <div className="flex flex-col">
         <h2 className='text-lg text-white font-semibold capitalize py-1'>help & support</h2>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='https://merchant.razorpay.com/policy/NefnUNyDO32m8f/terms'>
            terms & conditions
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='https://merchant.razorpay.com/policy/NefnUNyDO32m8f/refund'>
            cancellations & refunds
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='https://merchant.razorpay.com/policy/NefnUNyDO32m8f/shipping'>
             shipping details
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='https://merchant.razorpay.com/policy/NefnUNyDO32m8f/contact_us'>
             contact us
          </Link>
       </div>
       <div className="flex flex-col">
         <h2 className='text-lg text-white font-semibold capitalize py-1'>follow us</h2>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/socials'>
            twitter
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/socials'>
            facebook
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/socials'>
             instagram
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/socials'>
             LinkedIn
          </Link>
       </div>
       <div className="flex flex-col">
         <h2 className='text-lg text-white font-semibold capitalize py-1'>utilities</h2>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/'>
            calculator
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/'>
            currency convertor
          </Link>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/'>
            e-books
          </Link>
       </div>
       <div className="flex flex-col">
         <h2 className='text-lg text-white font-semibold capitalize py-1'>utilities</h2>
          <Link target="_blank" className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/about'>
            about us
          </Link>
          <Link  className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/'>
            version
          </Link>
          <Link className='text-md font-sans capitalize hover:font-medium hover:text-gray5' href='/'>
            pricing
          </Link>
       </div>
       </div>
    </div>
  )
}
