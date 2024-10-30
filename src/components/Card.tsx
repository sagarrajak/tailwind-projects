import React from 'react'

export interface PricingCard {
  price: string,
  title: string,
  subTitle: string,
  buttonTitle: string,
  bottomText1: string,
  bottomText2: string,
  bottonText3: string
}

function Card(props: PricingCard) {
  const {
    price,
    title,
    subTitle,
    buttonTitle,
    bottomText1,
    bottomText2,
    bottonText3,
  } = props;
  return (
    <div className='bg-slate-700 hover:bg-violet-800 rounded-xl text-white'>
      <div className='p-8 mx-2 mt-2 bg-slate-800 rounded-t-xl'>
        <div className='text-center uppercase'>{title}</div>
        <div className='text-center font-serif text-5xl mt-10 uppercase'>{subTitle}</div>
        <div className='text-center mt-2 font-sans text-sm'>{price}</div>
        <div className='flex justify-center'>
          <a href={'#'} className='
                inline-block
                px-5
                py-2
                mt-5
                rounded-md
                borde   r-violet-700
                text-white
                border-2
                duration-200
                hover:cursor-pointer
                hover:bg-violet-800
                hover:border-violet-800
              '>
            {buttonTitle}
          </a>
        </div>
      </div>
      {/* <div className='h-2'></div> */}
      <div className='border-t border-slate-700 border-1'></div>
      <div className='p-8 mx-2 mb-2 bg-slate-800 rounded-b-xl'>
        <div className='text-center font-sans text-xs font-medium'>{bottomText1}</div>
        <div className='text-center font-sans text-xs font-medium mt-2'>{bottomText2}</div>
        <div className='text-center font-sans text-xs font-medium mt-2'>{bottonText3}</div>
      </div>
    </div>
  )
}

export default Card
