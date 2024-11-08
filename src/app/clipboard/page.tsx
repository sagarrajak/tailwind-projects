import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Snippets from '@/components/clipboard/Snippets';
import { Metadata } from 'next';
import Features from '@/components/clipboard/Features';
import AccessAnyWhere from '@/components/clipboard/AccessAnyWhere';
import SuperChargeSection from '@/components/clipboard/SuperChargeSection';
import Companies from '@/components/clipboard/Companies';
import ClipboardContainer from '@/components/clipboard/ClipboardContainer';

export const metadata: Metadata = {
  title: 'Clipboard website',
  description: 'This is simple clipboard website'
};

function ClipBoard() {
  return (
    <div className="bg-[url('/images/clipboard/bg-header-mobile.png')]  md:bg-[url('/images/clipboard/bg-header-desktop.png')] bg-no-repeat bg-contain ">
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
          <h3 className='mb-10 text-5xl md:max-w-4xl font-bold text-darkGrayisBlue'>A history of everything you copy</h3>
          <h4 className='mb-8 text-xl leading-9 md:max-w-2xl text-garyishBlue'>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices. </h4>
          <div className='w-full flex flex-col justify-center mx-auto md:max-w-2xl md:flex-row gap-4 '>
            <Link href="#" className='px-8 p-4 bg-strongCyan rounded-full text-white text-base shadow-lg duration-200 hover:opacity-80'>Download for ios</Link>
            <Link href="#" className='px-8 p-4 bg-lightBlue rounded-full text-white text-base shadow-lg duration-200 hover:opacity-80'>Download for mac</Link>
          </div>
        </div>
      </section>
      <Snippets />
      <Features/>
      <AccessAnyWhere />
      <SuperChargeSection />
      <Companies/>
      <ClipboardContainer/>
    </div>
  )
}

export default ClipBoard
