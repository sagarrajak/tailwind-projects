import React from 'react'
import Image from 'next/image'

function Companies() {
  return (
    <section id='companies'>
      <div className='
          mb-20
          w-full
          flex
          flex-col
          justify-start
          items-center
          gap-20
          md:flex-row
          md:justify-center

        '>
        <Image
          alt='Image from next image'
          src={"/images/clipboard/logo-google.png"}
          width={150}
          height={150}
          className='object-contain'
        />
        <Image
          alt='Image from next image'
          src={"/images/clipboard/logo-ibm.png"}
          width={150}
          height={150}
          className='object-contain'
        />
        <Image
          alt='Image from next image'
          src={"/images/clipboard/logo-microsoft.png"}
          width={150}
          height={150}
          className='object-contain'
        />
        <Image
          alt='Image from next image'
          src={"/images/clipboard/logo-hp.png"}
          width={150}
          height={150}
          className='object-contain'
        />
          <Image
          alt='Image from next image'
          src={"/images/clipboard/logo-vector-graphics.png"}
          width={150}
          height={150}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default Companies
