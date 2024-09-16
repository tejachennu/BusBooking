import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Save from "../../../assets/save.png"; // Ensure you have the right path to your image

const Offer = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopiedCode(code);
        setTimeout(() => {
          setCopiedCode(null); // Reset the "Copied" message after 2 seconds
        }, 2000);
      })
      .catch((err) => {
        console.log('Async: Could not copy text: ', err);
      });
  }

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="flex items-center justify-between w-full">
        <h1 className="mb-6 text-2xl font-medium">
          Special Offers
        </h1>
        <Link to={"/bus"} className='text-violet-600'>View All</Link>
      </div>

      <div className='grid grid-cols-2 gap-16'>
        {/* Offer 1 */}
        <div className="flex items-center w-full h-auto p-8 shadow-md rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 gap-x-3">
          <img src={Save} alt='save img' className="w-52 aspect-[2/1] object-contain object-center" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-violet-600">Save
              <span className="text-3xl font-bold text-violet-600"> 20%</span>
            </h2>
            <p className="text-lg text-gray-500">Get 20% off on your first purchase</p>
            <div className="mt-4">
              <p className="text-lg font-semibold text-violet-600">Coupon: GTECH08</p>
              <p className="flex items-center gap-2 text-sm text-blue-600 underline cursor-pointer"
                onClick={() => handleCopy('GTECH08')}>
                {copiedCode === 'GTECH08' ? 'Copied!' : 'Copy Code'}
              </p>
            </div>
          </div>
        </div>

        {/* Offer 2 */}
        <div className="flex items-center w-full h-auto p-8 shadow-md rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 gap-x-3">
          <img src={Save} alt='save img' className="w-52 aspect-[2/1] object-contain object-center" />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-violet-600">Save
              <span className="text-3xl font-bold text-violet-600"> 30%</span>
            </h2>
            <p className="text-lg text-gray-500">Get 30% off on your second purchase</p>
            <div className="mt-4">
              <p className="text-lg font-semibold text-violet-600">Coupon: GTECH30</p>
              <p className="flex items-center gap-2 text-sm text-blue-600 underline cursor-pointer"
                onClick={() => handleCopy('GTECH30')}>
                {copiedCode === 'GTECH30' ? 'Copied!' : 'Copy Code'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Offer;