import React from 'react'
import { Link } from 'react-router-dom'
import Bus1 from "../../../assets/bus1.png"
import Bus2 from "../../../assets/bus3.png"
import Bus3 from "../../../assets/bus5.png"

const Category = () => {
  return (
    <div className="w-full  lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
            <div className="flex items-center justify-between w-full">
              <h1 className="mb-6 text-2xl font-medium">
                  Category
              </h1>
              <Link to={"/bus"} className=' text-violet-600'>View All</Link>

            </div>
        
        <div className="grid grid-cols-3 gap-6">
            <Link to={"/bus"} className='relative block px-4 py-5 overflow-hidden duration-300 ease-in-out bg-neutral-900/40 dark:bg-neutral-900/40 rounded-xl group'> 
            
                <img src={Bus1} alt="Bus img" className="object-contain w-full aspect-video"/>

                    <div className="absolute top-0 left-0 items-center hidden w-full h-full duration-300 ease-in-out bg-gradient-to-t dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex ">
                      <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                        Private Bus
                      </h2>
                    </div>

            </Link>

            <Link to={"/bus"} className='relative block px-4 py-5 overflow-hidden duration-300 ease-in-out bg-neutral-200/60 dark:bg-neutral-900/40 rounded-xl group'> 
            
            <img src={Bus2} alt="Bus img" className="object-contain w-full aspect-video"/>

                <div className="absolute top-0 left-0 items-center hidden w-full h-full duration-300 ease-in-out bg-gradient-to-t dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex ">
                  <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                    Tourist Bus
                  </h2>
                </div>

        </Link>

        <Link to={"/bus"} className='relative block px-4 py-5 overflow-hidden duration-300 ease-in-out bg-neutral-200/60 dark:bg-neutral-900/40 rounded-xl group'> 
            
            <img src={Bus3} alt="Bus img" className="object-contain w-full aspect-video"/>

                <div className="absolute top-0 left-0 items-center hidden w-full h-full duration-300 ease-in-out bg-gradient-to-t dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 group-hover:flex ">
                  <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
                    Public Bus
                  </h2>
                </div>

        </Link>

        
      
        </div>
    </div>
  )
}

export default Category