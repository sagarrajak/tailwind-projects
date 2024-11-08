import React from 'react'
import Image from 'next/image'

function Features() {
  return (
    <section id="features">
      <div className='section_container px-10 mb-40'>
        <div className='flex flex-col md:flex-row justify-center gap-10'>
          <div className='w-full md:w-1/2 relative min-h-[28rem]'>
            <Image src={"/images/clipboard/image-computer.png"}
              layout='fill'
              alt='Compuer image'
              className='md:w-1/2'
              objectFit='contain'
            />
          </div>
          <div className='p-4 flex flex-col justify-start w-full md:w-1/2'>
            <div className='text-center md:text-start w-full flex flex-col gap-2 mb-10 md:max-w-sm'>
              <h4 className='text-xl text-darkGrayisBlue font-bold'>Quick Search</h4>
              <p className='text-base text-garyishBlue font-normal leading-9'>Easily search your snippets by content, category, web address, application, and more. </p>
            </div>
            <div className='text-center md:text-start w-full flex flex-col gap-2 mb-10 md:max-w-sm'>
              <h4 className='text-xl text-darkGrayisBlue font-bold'>iCloud Sync</h4>
              <p className='text-base text-garyishBlue font-normal leading-9'>nstantly saves and syncs snippets across all your devices.  </p>
            </div>

            <div className='text-center md:text-start w-full flex flex-col gap-2 mb-10 md:max-w-sm'>
              <h4 className='text-xl text-darkGrayisBlue font-bold'>Completely History</h4>
              <p className='text-base text-garyishBlue font-normal leading-9'>Retrieve any snippets from the first moment you started using the app.  </p>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}

export default Features
