import { FaMoneyBill, FaMotorcycle } from "react-icons/fa"
import { IoRestaurant, IoThumbsUpSharp } from "react-icons/io5"

const BENEFITS = [
  {
    icon: <IoRestaurant size={25} className='text-teal-800' />,
    title: "Quality food",
    description:
      "We only use the best ingredients to make our food. You can taste the difference!",
  },
  {
    icon: <FaMotorcycle size={25} className='text-teal-800' />,
    title: "Fast delivery",
    description:
      "We deliver your food as fast as possible. You can also pick it up at the restaurant.",
  },
  {
    icon: <FaMoneyBill size={25} className='text-teal-800' />,
    title: "Great prices",
    description:
      "We offer the best prices in town. You can enjoy great food without breaking the bank!",
  },
  {
    icon: <IoThumbsUpSharp size={25} className='text-teal-800' />,
    title: "100% satisfaction guaranteed",
    description:
      "We are confident you will love our food. If you are not satisfied, we will give you a full refund!",
  },
]

export const BenefitsSection = () => {
  return (
    <div className=' text-gray-700 min-h-[400px] bg-[#EAEAE9] py-8 px-10'>
      <h1 className='text-center font-bold text-4xl mb-14'>OUR BENEFITS</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        {BENEFITS.map((benefit) => (
          <div className='max-w-[400px]' key={benefit.title}>
            <div className='flex items-center gap-2 mb-2'>
              {benefit.icon}
              <h2 className='sm:text-lg font-bold text-teal-800'>
                {benefit.title}
              </h2>
            </div>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
