import React from 'react'
import Image from 'next/image'

function AccessAnyWhere() {
  return (
    <section id="anywhere"
    >
      <div className='section_cotainer mb-40 px-10 pt-16'>
        <h3 className='mb-10 text-5xl font-bold text-darkGrayisBlue text-center'>Access Clipboard Anywhere</h3>
        <p className='max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-garyishBlue'>
          Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.
        </p>
        <div className='mt-5 w-full relative min-h-[32rem]'>
          <Image
          src="/images/clipboard/image-devices.png"
          layout="fill"
          alt='Device image'
          className='object-contain'
          />
        </div>
      </div>
    </section>
  )
}

export default AccessAnyWhere
