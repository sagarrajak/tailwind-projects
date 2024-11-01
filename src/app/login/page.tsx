import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


function LoginMode() {
  return (
    <div className='bg-gray-100
        min-h-screen
        min-w-screen
        flex
        flex-col
        justify-center
        items-center
       '>
      <div className="
      h-full
      rounded-xl
      bg-white
      w-[20em]
      md:w-[92%]
      flex
      flex-col
      md:flex-row
      gap-2
      max-w-[750px]
      bg-[url('/images/login-model/image.jpg')]
      bg-cover
      bg-center
      bg-no-repeat
      ">
        <div className='w-full p-5 md:p-16 bg-white box-border flex-1'>
          <div className='w-full flex flex-col justify-start gap-4'>
            {/* Header */}
            <div className='flex flex-row justify-between items-center'>
              <h3 className='font text-3xl font-serif
          text-black font-semibold'>Log in </h3>
              <button className='rounded-full shadow-md w-7 h-7 bg-gray-400/50 active:-translate-y-0.5 hover:shadow-xl hover:cursor-pointer transition-all duration-150'>
                <FontAwesomeIcon icon={faXmark} className='text-black' />
              </button>
            </div>
            <div className='font-sans font-medium text-xs text-gray-500 text-wrap'>
              Log in to your account to upload or download pictures, videos or music.
            </div>
          </div>

          {/* Rest Items */}
          <div className='w-full flex flex-col justify-between items-center gap-4 mt-7'>
            <input className='focus:outline-none w-full border-2 rounded-md py-3 px-3 text-gray-500 placeholder:text-xs placeholder:font-normal placeholder:tracking-wider' placeholder='Enter your email address' />

            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-3 md:gap-0'>
              <a href='#' className='text-xs text-cyan-700'>Forgot password</a>
              {/* Button */}
              <button className='bg-cyan-700 text-white w-full rounded-md hover:bg-cyan-600 hover:-translate-y-0.5 transition-all duration-150 hover:shadow-md py-4 flex justify-center gap-3 md:w-24'>
                <p className='text-xs font-medium'>Next</p>
                <FontAwesomeIcon icon={faArrowRight} className='text-white' />
              </button>
            </div>


            {/* White line */}

            <div className='flex flex-col justify-between items-center gap-4 mt-2 w-full h-full'>
              <div className='w-full border-t-2 border-gray-200'></div>
              <div className='text text-xs text-gray-400'>or login with</div>
              <div className='flex flex-col w-full justify-between items-center md:flex-row gap-3'>
                <button className='flex flex-row justify-center w-full py-2 rounded-md border-2 active:-translate-y-0.5 transition-all hover:cursor-pointer active:shadow-lg shadow-sm'>
                  <Image src={"/images/login-model/google.png"} width={20} height={35} className='object-cover' alt='Google' />
                  <p className='text-gray-700 font-normal text-sm ml-2'>Google</p>
                </button>
                <button className='flex flex-row justify-center w-full py-2 rounded-md border-2 active:-translate-y-0.5 transition-all hover:cursor-pointer active:shadow-lg shadow-sm'>
                  <Image src={"/images/login-model/google.png"} width={20} height={35} className='object-cover' alt='Google' />
                  <p className='text-gray-700 font-normal text-sm ml-2'>Facebook</p>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className='hidden md:block  overflow-clip flex-1'>
          {/* <img src={"/images/login-model/image.jpg"} alt='Background image' className="object-cover" /> */}
        </div>
      </div>
    </div>
  )
}

export default LoginMode
