import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FeatureLoopStudio from '@/components/loopstudio/FeatureLoopStudio'

function LoopStudio() {
  return (
    <>
      <section
        id='hero'
        className="
          bg-[url('/images/loopstudio/mobile/image-hero.jpg')]
          bg-no-repeat
          object-center
          bg-cover
          bg-sky-200
          w-full
          md:bg-[url('/images/loopstudio/desktop/image-hero.jpg')]
      ">
        <div className="
        container
        max-w-6xl
        mx-auto
        px-6
        py-12
        ">
          <nav className='flex flex-row justify-between items-center font-bold text-white w-full'>
            <Image
              src={"/images/loopstudio/logo.svg"}
              width={200}
              height={100}
              className='object-contain'
              alt='logo image'
            />
            {/* Mobile container */}
            <div className='flex md:hidden' >

            </div>
            <div className='hidden md:flex h-10 font-alata space-x-8'>
              <div className='group'>
                <Link href="#">About</Link>
                <div className='mx-2 hover:border-blue hover:border-b-2' />
              </div>
              <div className='group'>
                <Link href="#">Careers</Link>
                <div className='mx-2 hover:border-blue hover:border-b-2' />
              </div>
              <div className='group'>
                <Link href="#">Events</Link>
                <div className='mx-2 hover:border-blue hover:border-b-2' />
              </div>
              <div className='group'>
                <Link href="#">Products</Link>
                <div className='mx-2 hover:border-blue hover:border-b-2' />
              </div>
              <div className='group'>
                <Link href="#">Support</Link>
                <div className='mx-2 hover:border-blue hover:border-b-2' />
              </div>
            </div>
          </nav>

          <div className='
          my-20
          p-5
          border-2
          text-white
          uppercase
          text-wrap
          text-4xl
          bg-transparent
          tracking-wide
          font-light
          md:max-w-md
          md:text-5xl
        '>
            IMPRESSIVE EXPERIANCE THAT DELIVER
          </div>
        </div>
      </section>
      <FeatureLoopStudio />
    </>

  )
}

export default LoopStudio
