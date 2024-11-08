import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function ClipboardContainer() {
  return (
    <section id='hero'>
      {/* Hero Section */}
      <div className='max-w-3xl mx-auto text-center mb-40 px-10 pt-16'>
        <Image
          src="images/clipboard/logo.svg"
          alt='log image'
          width={'100'}
          height={'100'}
          className='mx-auto my-16'
          objectFit='cover' />
        <h3 className='mb-10 text-5xl md:max-w-4xl font-bold text-darkGrayisBlue'>Clipboard for iOS and MacOS</h3>
        <h4 className='mb-8 text-xl leading-9 md:max-w-2xl text-garyishBlue'>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you&apos;re ready to start adding to your clipboard.  </h4>
        <div className='w-full flex flex-col justify-center mx-auto md:max-w-2xl md:flex-row gap-4 '>
          <Link href="#" className='px-8 p-4 bg-strongCyan rounded-full text-white text-base shadow-lg duration-200 hover:opacity-80'>Download for ios</Link>
          <Link href="#" className='px-8 p-4 bg-lightBlue rounded-full text-white text-base shadow-lg duration-200 hover:opacity-80'>Download for mac</Link>
        </div>
      </div>
    </section>
  )
}

export default ClipboardContainer
