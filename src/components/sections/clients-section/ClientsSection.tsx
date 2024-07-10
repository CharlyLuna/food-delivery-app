import { CLIENTS_REVIEWS } from "@/utils"
import Image from "next/image"

export const ClientsSection = () => {
  return (
    <div className='min-h-[500px] px-10 py-10 mural-background'>
      <h1 className='text-4xl text-center font-bold mb-2'>
        <span className='text-white'>CLIENT </span>SAYS
      </h1>
      <p className='text-center text-lg'>
        Check some of our clients reviews and what they have to say about our
        food and service.
      </p>
      <div className='flex flex-wrap justify-center items-stretch gap-8 mt-10'>
        {CLIENTS_REVIEWS.map((review) => (
          <div
            key={review.name}
            className='px-10 bg-[#EAEAE9] max-w-[450px] rounded-lg shadow-lg p-4 flex flex-col justify-between gap-4 hover:scale-110 transition-transform duration-500 ease-in-out'
          >
            <p className='text-lg'>{review.review}</p>
            <div>
              <Image
                height={100}
                width={100}
                src={review.image}
                alt={review.name}
                className='rounded-full h-16 w-16 aspect-square object-cover'
              />
              <p className='font-bold'>{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
