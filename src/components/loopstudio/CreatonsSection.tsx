import React from 'react'

const ImageCard: React.FC<{
  linkImage: string,
  title: string
}> = ({ linkImage, title }) => {
  return (
      <div className='group overflow-hidden w-full md:w-[24%] hover:cursor-pointer relative rounded-sm border-black'>
        <div className='
        absolute
        w-full
        h-full
        top-0
        bottom-0
        bg-gradient-to-b
        from-transparent
        to-gray-900
        group-hover:from-gray-50
        group-hover:to-white
        group-hover:opacity-80
        '
        ></div>
        <img
            src={`/images/loopstudio/mobile/${linkImage}`}
            alt='Earth Image'
            className='
              w-full h-full object-cover group-hover:scale-110 transition-all md:hidden
            '
          />
        <img
            src={`/images/loopstudio/desktop/${linkImage}`}
            alt='Earth Image'
            className='
             w-full h-full object-cover group-hover:scale-110 transition-all md:block hidden
            '
          />
        <h4 className='absolute bottom-4 left-4 uppercase text-3xl font-thin tracking-widest md:max-w-6 group-hover:text-black group-hover:scale-110 transition-all'>
          {title}
        </h4>
      </div>
  )
};

function CreatonsSection() {

  const imagesList = [
    { "name": "image-curiosity.jpg", "title": "image curiosity" },
    { "name": "image-grid.jpg", "title": "image grid" },
    { "name": "image-pocket-borealis.jpg", "title": "image pocket borealis" },
    { "name": "image-deep-earth.jpg", "title": "image deep earth" },
    { "name": "image-soccer-team.jpg", "title": "image soccer team" },
    { "name": "image-fisheye.jpg", "title": "image fisheye" },
    { "name": "image-from-above.jpg", "title": "image from above" },
    { "name": "image-night-arcade.jpg", "title": "image night arcade" }
]

  return (
    <section id='creations'>
      <div className='container mx-auto max-w-6xl my-32 px-6 text-gray-900 md:px-0'>
        {/* Layout */}
        <div className='flex flex-col justify-center mb-20 md:justify-between md:flex-row'>
          <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
            Our creations
          </h2>
          <button className="
            px-10
            py-3
            uppercase
            text-gray-900
            border-2
            border-gray-900
            hover:text-white
            hover:bg-gray-900
            font-bold
            hidden
            md:block
            outline-none
            active:outline-none
            tracking-widest
            font-alata
          ">
            see all
          </button>

          {/* Mobile button */}
          <button
            className="
              px-10
              py-3
              uppercase
              text-gray-900
              border-2
              border-gray-900
              hover:text-white
              hover:bg-gray-900
              font-bold
              md:hidden
              outline-none
              active:outline-none
              tracking-widest
              font-alata
            "
          >
            see all
          </button>
        </div>
        {/* Items container */}
        <div className='
          flex
          flex-col
          justify-between
          text-2xl
          text-white
          uppercase
          w-full
          flex-wrap
          gap-y-4
          md:flex-row
          md:gap-x-1
        '>
          {
          imagesList.map(img =>
            <ImageCard
            linkImage={img.name}
            title={img.title}
            key={img.name}/>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default CreatonsSection
