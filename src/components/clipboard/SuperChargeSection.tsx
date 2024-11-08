import React from 'react'
import Image from 'next/image'

function SuperChargeSection() {
  return (
    <section id="supercharge">
      <div className='section_cotainer mb-40 px-10 pt-16'>
        <h3 className='mb-10 text-5xl w-full font-bold text-darkGrayisBlue text-center'>Supercharge your workflow</h3>
        <p className='w-full  mx-auto mb-24 text-xl leading-9 text-center text-garyishBlue'>
          We&apos;ve got the tools to boost your productivity.
        </p>
        <div className='max-w-6xl flex flex-col justify-start items-center gap-20 md:flex-row md:justify-between md:gap-0'>
          <div className='flex flex-col items-center gap-5 max-w-sm'>
            <Image src="/images/clipboard/icon-blacklist.svg" width={50} height={50} alt='Blacklist' className='object-contain' />
            <h3 className='text-2xl text-darkGrayisBlue font-semibold mt-5'>
              Create BlackList
            </h3>
            <p className='text-sm text-garyishBlue font-medium'>
              Easily search your snippets by content, category, web address, application, and more.
            </p>
          </div>
          <div className='flex flex-col items-center gap-5 max-w-sm'>
            <Image src="/images/clipboard/icon-text.svg" width={50} height={50} alt='Text' className='object-contain' />
            <h3 className='text-2xl text-darkGrayisBlue font-semibold mt-5'>
              Plain Text Snippets
            </h3>
            <p className='text-sm text-garyishBlue font-medium'>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className='flex flex-col items-center gap-5 max-w-sm'>
            <Image src="/images/clipboard/icon-preview.svg" width={50} height={50} alt='Text' className='object-contain' />
            <h3 className='text-2xl text-darkGrayisBlue font-semibold mt-5'>
              Sneak Preview
            </h3>
            <p className='text-sm text-garyishBlue font-medium'>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuperChargeSection
