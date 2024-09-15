import React from 'react'
import Bus2 from "../../../assets/bus3.png"
import { delay, motion, transform } from "framer-motion"

const Hero = () => {

  const imageVariants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "3%",
      transition: {
        duration: 3,
        ease: "easeInOut",
      }
    }
  }

  return (
    <div className="w-full h-[calc(100vh-8ch)] lg:px-28 md:px-16 sm:px-7 px-4 mt-[8ch] flex items-center justify-center flex-col hero relative">
      <div className='flex flex-col items-stretch justify-between flex-1 w-full gap-12 pb-10 md:flex-row'>
        {/* Left Content */}
        <motion.div className="w-full md:w-[35%] h-auto rounded-md flex justify-center flex-col space-y-8 md:space-y-14"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}>

          <motion.div className="space-y-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'linear', delay: 0.2 }}>

            <motion.h1 className='text-3xl mt-4 md:text-6xl font-bold text-neutral-50 leading-tight md:leading-[1.15]'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'linear', delay: 0.4 }}>
              Reserve Your Bus
              <span className="tracking-wider text-violet-400"> Tickets </span>
              Now
            </motion.h1>

            <motion.p className="text-base font-normal md:text-lg text-neutral-300 line-clamp-3 text-ellipsis"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'linear', delay: 0.6 }}>
              Book your bus tickets now and get ready for an unforgettable journey. We offer a wide range of bus routes and schedules to suit your needs.
            </motion.p>

          </motion.div>

          <motion.button className="px-4 py-2 font-medium duration-300 ease-in-out rounded-md w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 md:py-3 md:px-6">
            Reserve Seat Now
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <div className="w-full md:w-[70%] h-full rounded-md flex items-end justify-end relative md:absolute md:top-0 md:-right-28 lg:-right-48">
          <motion.img className="w-full aspect-auto md:aspect-[4/2] object-contain"
            src={Bus2}
            alt='bus image'
            initial="initial"
            animate="animate"
            variants={imageVariants}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
