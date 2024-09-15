import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className="w-full  lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
        <div className="w-full items-center flex justify-between">
        <h1 className="text-2xl font-medium mb-6">
            Category
        </h1>
        <Link to={"/bus"} className=' text-violet-600'>View All</Link>

        </div>
    </div>
  )
}

export default Category