import React from 'react'

const Search = () => {
  return (
    <div className="w-full  lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
    
        <div className="w-full p-8 rounded-md bg-neutral-100 dark:bg-neutral-900/40 ">
            <div className="grid items-end grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 ">
                <div className="">
                 <label htmlFor="from" className="block mb-2 font-semibold ">
                    From
                 </label>
                 <select name='from' id='from' className='inline-block w-full h-12 px-3 border rounded-md appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-900 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                    <option value="">Select Location</option>
                    <option value="location1">location1</option>
                    <option value="location2">location2</option>
                    <option value="location3">location3</option>
                    
                 </select>
                </div>

                <div className="">
                 <label htmlFor="to" className="block mb-2 font-semibold ">
                    To
                 </label>
                 <select name='from' id='to' className='inline-block w-full h-12 px-3 border rounded-md appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-900 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
                    <option value="">Select Location</option>
                    <option value="location4">location4</option>
                    <option value="location5">location5</option>
                    <option value="location6">location6</option>
                    
                 </select>
                </div>

                <div className="">
                    <label htmlFor="date" className="block mb-2 font-semibold ">
                        Choose Date 
                    </label>
                    <input type="date" id='date' name='date' className="inline-block w-full h-12 px-3 border rounded-md appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-900 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"/>
                </div>

                <div className="">
                    
                    <button className="w-full h-12 px-4 text-base bg-violet-600 text-neutral-50">
                        Check Availability
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search