import React from 'react'
import Image from 'next/image'

function FeatureLoopStudio() {
  return (
    <section id="feature" className='flex justify-center flex-row w-full'>
      <div className='
        flex
        flex-col
        w-full
        my-32
        px-6
        justify-between
        md:flex-row
        md:justify-between
        md:text-gray-900
        md:px-0
        md:w-[65%]
        relative
      '>
        <div className='h-96 relative md:hidden'>
          <Image
            src={"/images/loopstudio/mobile/image-interactive.jpg"}
            alt='Interactive image'
            layout='fill'
            className='transform transition-transform duration-500 ease-in-out object-contain'
          />
        </div>
        <Image
          src={"/images/loopstudio/desktop/image-interactive.jpg"}
          alt='Interactive image'
          width={1000}
          height={1000}
          className='
            transform
            transition-transform
            duration-500
            ease-in-out
            object-contain
            hidden
            md:block
          '
        />
        <div className='p-10 text-wrap bg-white max-w-md max-h-96 md:self-end md:absolute md:bottom-0 md:right-0'>
          <h1 className='uppercase text-3xl tracking-widest font-normal text-center w-full font-josefin'>The leader in interactive VR</h1>
          <p className='mt-10 text-md tracking-widest font-normal text-center font-josefin'>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeatureLoopStudio
