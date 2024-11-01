import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Gallery() {
  return (
    <div className="w-full min-h-screen bg-cyan-100 flex items-center justify-center md:items-start p-2">
      <div className="w-[80%] flex flex-col justify-start items-start bg-white rounded-xl shadow-xl p-6 md:p-10 text-black md:w-[99%] space-y-10">
        {/* Menu container */}
        <div
          className="w-full
                flex
                flex-col
                items-center
                justify-center
                space-y-1
                md:flex-row
                md:space-y-0
                font-sans
                md:space-x-5
                md:justify-end"
        >
          <div className="block group">
            <Link href="#" className="text-sm">
              Vector
            </Link>
            <div
              className="
              m-auto
              my-1
              px-1
              border-t-2
              w-0
              border-black
              opacity-0
              font-sans
              group-hover:opacity-100
              group-hover:w-full
              duration-300
              transition-all"
            />
          </div>
          <div className="block group">
            <Link href="#" className="text-sm">
              Illustrations
            </Link>
            <div
              className="
              m-auto
              my-1
              px-1
              border-t-2
              w-0
              font-sans
              border-black
              opacity-0
              group-hover:opacity-100
              group-hover:w-full
              duration-300
              transition-all"
            />
          </div>
          <div className="block group">
            <Link href="#" className="text-sm">
              Images
            </Link>
            <div
              className="
              m-auto
              my-1
              px-1
              border-t-2
              w-0
              font-sans
              border-black
              opacity-0
              group-hover:opacity-100
              group-hover:w-full
              duration-300
              transition-all"
            />
          </div>
          <div className="block group">
            <Link href="#" className="text-sm">
              Icons
            </Link>
            <div
              className="
              m-auto
              my-1
              px-1
              border-t-2
              w-0
              border-black
              opacity-0
              font-sans
              group-hover:opacity-100
              group-hover:w-full
              duration-300
              transition-all"
            />
          </div>
        </div>
        {/* Button and  */}
        <div className="w-full flex flex-col justify-between space-y-3 md:flex-row">
          <div className="flex flex-row justify-around w-[100%] md:w-[20%] border-b-2  border-gray-200 py-2 px-2">
            <input placeholder="seach" className="focus:outline-none" />
            <Image
              src={'images/search.svg'}
              width={25}
              height={25}
              className="object-cover"
              alt="search icon"
            />
          </div>
          <button className="w-full md:w-auto text-white bg-black rounded-md text-sm  hover:bg-white border-2 border-black hover:text-black duration-150 transition-all">
            <div className="py-2.5 md:px-10">Upload</div>
          </button>
        </div>
        {/*  Gallery container*/}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 w-full justify-items-center">
          <div className="relative group">
            <Image
              src={'/images/something1.jpg'}
              width={250}
              height={250}
              className="object-cover"
              alt="image 1"
            />
            <div className="absolute bottom-0 left-0 w-full h-[3rem] opacity-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-150 flex flex-row justify-between items-center px-2 hover:cursor-pointer">
              <div className='flex-1 flex-col justify-start items-stretch'>
                <p className='text-sm text-white font-medium'>Abstreact Painting</p>
                <p className='text-xs text-white font-normal'><span className='mr-2'>245 likes</span><span>35 shares</span></p>
              </div>
              <Image src={"/images/bookmark.svg"} width={20} height={30} className='object-cover' alt='bookmark icon' />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={'/images/something1.jpg'}
              width={250}
              height={250}
              className="object-cover"
              alt="image 1"
            />
            <div className="absolute bottom-0 left-0 w-full h-[3rem] opacity-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-150 flex flex-row justify-between items-center px-2">
              <div className='flex-1 flex-col justify-start items-stretch'>
                <p className='text-sm text-white font-medium'>Abstreact Painting</p>
                <p className='text-xs text-white font-normal'><span className='mr-2'>245 likes</span><span>35 shares</span></p>
              </div>
              <Image src={"/images/bookmark.svg"} width={20} height={30} className='object-cover' alt='bookmark icon' />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={'/images/something1.jpg'}
              width={250}
              height={250}
              className="object-cover"
              alt="image 1"
            />
            <div className="absolute bottom-0 left-0 w-full h-[3rem] opacity-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-150 flex flex-row justify-between items-center px-2">
              <div className='flex-1 flex-col justify-start items-stretch'>
                <p className='text-sm text-white font-medium'>Abstreact Painting</p>
                <p className='text-xs text-white font-normal'><span className='mr-2'>245 likes</span><span>35 shares</span></p>
              </div>
              <Image src={"/images/bookmark.svg"} width={20} height={30} className='object-cover' alt='bookmark icon' />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={'/images/something1.jpg'}
              width={250}
              height={250}
              className="object-cover"
              alt="image 1"
            />
            <div className="absolute bottom-0 left-0 w-full h-[3rem] opacity-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-150 flex flex-row justify-between items-center px-2">
              <div className='flex-1 flex-col justify-start items-stretch'>
                <p className='text-sm text-white font-medium'>Abstreact Painting</p>
                <p className='text-xs text-white font-normal'><span className='mr-2'>245 likes</span><span>35 shares</span></p>
              </div>
              <Image src={"/images/bookmark.svg"} width={20} height={30} className='object-cover' alt='bookmark icon' />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={'/images/something1.jpg'}
              width={250}
              height={250}
              className="object-cover"
              alt="image 1"
            />
            <div className="absolute bottom-0 left-0 w-full h-[3rem] opacity-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-150 flex flex-row justify-between items-center px-2">
              <div className='flex-1 flex-col justify-start items-stretch'>
                <p className='text-sm text-white font-medium'>Abstreact Painting</p>
                <p className='text-xs text-white font-normal'><span className='mr-2'>245 likes</span><span>35 shares</span></p>
              </div>
              <Image src={"/images/bookmark.svg"} width={20} height={30} className='object-cover' alt='bookmark icon' />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={'/images/something1.jpg'}
              width={250}
              height={250}
              className="object-cover"
              alt="image 1"
            />
            <div className="absolute bottom-0 left-0 w-full h-[3rem] opacity-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-150 flex flex-row justify-between items-center px-2">
              <div className='flex-1 flex-col justify-start items-stretch'>
                <p className='text-sm text-white font-medium'>Abstreact Painting</p>
                <p className='text-xs text-white font-normal'><span className='mr-2'>245 likes</span><span>35 shares</span></p>
              </div>
              <Image src={"/images/bookmark.svg"} width={20} height={30} className='object-cover' alt='bookmark icon' />
            </div>
          </div>
          <div className="relative group">
            <Image
              src={'/images/something1.jpg'}
              width={250}
              height={250}
              className="object-cover"
              alt="image 1"
            />
            <div className="absolute bottom-0 left-0 w-full h-[3rem] opacity-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-150 flex flex-row justify-between items-center px-2">
              <div className='flex-1 flex-col justify-start items-stretch'>
                <p className='text-sm text-white font-medium'>Abstreact Painting</p>
                <p className='text-xs text-white font-normal'><span className='mr-2'>245 likes</span><span>35 shares</span></p>
              </div>
              <Image src={"/images/bookmark.svg"} width={20} height={30} className='object-cover' alt='bookmark icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
