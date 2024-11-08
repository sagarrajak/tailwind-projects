import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='bg-cyan-100 p-5 flex flex-col justify-start items-center md:flex-row md:justify-between'>
      <Image src='/images/clipboard/logo.svg' width={50} height={50} alt={'Logo'} />
      <div className='flex-1 flex flex-col md:flex-row flex-wrap gap-5'>
          <p className='font-medium text-sm min-w-5 text-start bg-blue-400 block'>FAQ</p>
          <p className='font-medium text-sm'>FAQ</p>
          <p className='font-medium text-sm'>FAQ</p>
          <p className='font-medium text-sm'>FAQ</p>
      </div>
    </footer>
  )
}

export default Footer
