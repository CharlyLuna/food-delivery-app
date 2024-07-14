import Image from "next/image"
import Link from "next/link"

export const RecommendedProductsSplash = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 px-4'>
      <div className='group/card1 relative flex justify-center items-center bg-blue-600 min-h-[300px] lg:min-h-[500px] w-full p-2 lg:-skew-x-3'>
        <Image
          src='/product-images/french-onion-soup.png'
          alt='French Onion Soup'
          width={300}
          height={300}
          className=' md:h-[28vw] md:w-[28vw] lg:h-[18vw] lg:w-[18vw] aspect-square'
        />
        <div className='absolute flex opacity-0 group-hover/card1:opacity-100 group-hover/card1:bg-black/50 text-black h-full w-full text-center items-center flex-col justify-center transition-all duration-500'>
          <h1 className='text-3xl font-bold text-white'>Recommended</h1>
          <Link
            href={`/product/french-onion-soup`}
            className='text-white hover:underline px-4'
          >
            Check out our famous french onion soup
          </Link>
        </div>
      </div>
      <div className='group/card2 relative flex justify-center items-center bg-orange-600 min-h-[300px] lg:min-h-[500px] w-full p-2 lg:-skew-x-3'>
        <Image
          src='/product-images/lamb-rogan-josh.png'
          alt='Lamb Rogan Josh'
          width={300}
          height={300}
          className=' md:h-[28vw] md:w-[28vw] lg:h-[18vw] lg:w-[18vw] aspect-square'
        />
        <div className='absolute flex opacity-0 group-hover/card2:opacity-100 group-hover/card2:bg-black/50 text-black h-full w-full text-center items-center flex-col justify-center transition-all duration-500'>
          <h1 className='text-3xl font-bold text-white'>Recommended</h1>
          <Link
            href={`/product/lamb-rogan-josh`}
            className='text-white hover:underline px-4'
          >
            Check out our famous lamb rogan josh
          </Link>
        </div>
      </div>
      <div className='group/card3 relative flex justify-center items-center bg-purple-600 min-h-[300px] lg:min-h-[500px] w-full p-2 lg:-skew-x-3'>
        <Image
          src='/product-images/new-york-cheesecake.png'
          alt='New York Cheesecake'
          width={300}
          height={300}
          className=' md:h-[28vw] md:w-[28vw] lg:h-[18vw] lg:w-[18vw] aspect-square'
        />
        <div className='absolute flex opacity-0 group-hover/card3:opacity-100 group-hover/card3:bg-black/50 text-black h-full w-full text-center items-center flex-col justify-center transition-all duration-500'>
          <h1 className='text-3xl font-bold text-white'>Recommended</h1>
          <Link
            href={`/product/new-york-cheesecake`}
            className='text-white hover:underline px-4'
          >
            Check out our famous New York cheesecake
          </Link>
        </div>
      </div>
      <div className='group/card4 relative flex justify-center items-center bg-yellow-500 min-h-[300px] lg:min-h-[500px] w-full p-2 lg:-skew-x-3'>
        <Image
          src='/product-images/greek-gyro-platter.png'
          alt='Greek Gyro Platter'
          width={300}
          height={300}
          className=' md:h-[28vw] md:w-[28vw] lg:h-[18vw] lg:w-[18vw] aspect-square'
        />
        <div className='absolute flex opacity-0 group-hover/card4:opacity-100 group-hover/card4:bg-black/50 text-black h-full w-full text-center items-center flex-col justify-center transition-all duration-500'>
          <h1 className='text-3xl font-bold text-white'>Recommended</h1>
          <Link
            href={`/product/greek-gyro-platter`}
            className='text-white hover:underline px-4'
          >
            Check out our famous Greek gyro platter
          </Link>
        </div>
      </div>
    </div>
  )
}
