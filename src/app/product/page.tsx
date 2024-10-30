import Image from 'next/image';
import React from 'react';

function Product() {
  return (
    <div
      className="bg-gray-100
       min-h-screen
       min-w-screen
       flex
       flex-row
       justify-center
       items-center"
    >
      <div
        className="
       bg-white
       shadow-md rounded-md
        shadow-slate-300
        md:w-[70%]
        md:h-[70%]
        w-[98%]
        max-w-96
        h-[98%]
        flex
        flex-col
        justify-start
        items-center
        space-y-5
        md:flex-row
        md:space-x-5
        md:space-y-0
        md:max-w-[700px]
        p-10
          "
      >
        <Image
          src={'/images/headphone.png'}
          width={150}
          height={150}
          className="object-cover hover:scale-105 duration-200"
          alt={'Product Image'}
        />
        <div className="flex flex-col items-center justify-start space-y-3 md:items-start">
          <div className="text-xs px-3 py-1 text-white bg-black rounded-full text-center">
            Free Shipping
          </div>
          <div className="text-2xl font-sans font-medium text-black text-center md:text-left">
            Razer Karken Kitty Edit Gaming Hadset Quartz
          </div>
          <div className="flex flex-col w-full justify-start items-center text-center md:text-left space-y-2 md:items-start">
            <div className="text-sm font-sans font-medium line-through text-gray-400 mt-10">
              $700
            </div>
            <div className="text-4xl font-bold text-black">$500</div>
            <div className="text-sm text-gray-500">
              The offer is valid untill April 3 as long as stock
            </div>
            <button
              className="
            bg-blue-500
            w-full
            text-center
            text-white
            rounded-md
            md:w-[300px]
            border-b-8
            border-blue-700
            hover:border-b-0
            hover:border-t-8
            transition-all
            duration-150
            hover:bg-blue-700
            hover:shadow-lg
            "
            >
              <div className="py-3 px-8">Add to cart</div>
            </button>
          </div>
          {/* Footer container */}
          <div className='flex flex-col space-y-3 w-full al'>
            <div className='text-xs text-gray-500 font-light'>50 pcs in stock</div>
            <div className='flex flex-col items-center justify-start gap-3 md:flex-row'>
              <button className='w-full py-3 rounded-md border-2 border-gray-300 text-center text-gray-700 text-sm font-medium md:w-[50%] shadow-sm hover:shadow-lg active:-translate-y-0.5 transition-all duration-150'>
                <Image src="/images/heart.png" alt="button icon" width={"25"} height={"25"} className='inline-block mr-2' />
                Add to wishlist
              </button>
              <button className='w-full py-3 rounded-md border-2 border-gray-300 text-center text-gray-700 text-sm font-medium shadow-sm md:w-[50%] hover:shadow-lg active:-translate-y-0.5 transition-all duration-150'>
                <Image src="/images/weight.png" alt="button icon" width={"25"} height={"25"} className='inline-block mr-2' />
                Add to cart
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Product;
