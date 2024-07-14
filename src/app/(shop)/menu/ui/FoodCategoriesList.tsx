"use client"
import { IoIceCreamOutline, IoLeaf, IoLeafOutline } from "react-icons/io5"
import { LuSoup, LuUtensils } from "react-icons/lu"
import { useState } from "react"

const CATEGORIES = [
  {
    name: "Salad",
    icon: <IoLeafOutline size={30} />,
  },
  {
    name: "Main Course",
    icon: <LuUtensils size={30} />,
  },
  {
    name: "Dessert",
    icon: <IoIceCreamOutline size={30} />,
  },
  {
    name: "Soup",
    icon: <LuSoup size={30} />,
  },
]

interface Props {
  onCategoryChange: (category: string) => void
}

export const FoodCategoriesList = ({ onCategoryChange }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("Salad")

  const handleCategoryChange = (category: string) => {
    console.log(category)
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className='flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8'>
      {CATEGORIES.map((category) => (
        <button
          onClick={() => handleCategoryChange(category.name)}
          className={`${
            selectedCategory === category.name &&
            "bg-teal-600 text-white border-white !border-solid"
          } transition-all ease-out hover:bg-teal-600 duration-300 hover:text-white hover:border-white hover:border-solid px-6 py-10 min-w-[150px] border-2 border-dashed flex flex-col justify-center items-center border-gray-700 text-gray-700 font-bold`}
          key={category.name}
        >
          {category.icon}
          {category.name}
        </button>
      ))}
    </div>
  )
}
