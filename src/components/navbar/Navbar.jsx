import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo1.png.jpg"
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaPhone } from 'react-icons/fa6';
import Theme from '../theme/Theme';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/bus", label: "Bus" },
        { href: "/services", label: "Services" },
    ]

    const handleClick = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className='w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50'>
            {/* Logo section */}
            <Link to={"/"} className='mr-16'>
                <img src={Logo} alt="logo" className="object-contain h-auto w-28 bg-blend-color-dodge" />
            </Link>

            {/* Toggle button */}
            <button onClick={handleClick} className="flex items-center justify-end flex-1 duration-300 ease-in-out md:hidden text-neutral-600 dark:text-neutral-300">
                {
                    open ?
                        <LiaTimesSolid className='text-xl' />
                        :
                        <FaBars className='text-xl' />
                }
            </button>

            {/* Navigation links */}
            <div className={`${open ? 'flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'} flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-neutral-100 md:shadow-none shadow-md rounded-md`}>
                <ul className="flex flex-col flex-wrap items-start text-base font-medium list-none md:items-center gap-x-5 gap-y-1 md:flex-row text-neutral-600 dark:text-neutral-500">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.href}
                                onClick={handleClose}
                                className="duration-300 ease-in-out hover:text-violet-600"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
              
                <div className="flex flex-col flex-wrap items-start text-base font-medium md:items-center gap-x-5 gap-y-2 md:flex-row text-neutral-800">
  
                    <div className="relative px-8 py-2 rounded-md cursor-pointer bg-violet-600 w-fit">
                        <div className="absolute top-[50%] -left-6 translate-y-[-50%] w-9 h-9 rounded-full bg-violet-600 border-4 border-neutral-100 dark:border-neutral-900 flex items-center justify-center">
                            <FaPhone className='text-sm text-neutral-50' />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-xs font-light text-neutral-200">
                                Need Help?
                            </p>
                            <p className="text-xs font-normal tracking-wide text-neutral-50">+91 1234567890</p>
                        </div>
                    </div>
                    <Link to={"/login"} className="duration-300 ease-in-out hover:text-violet-600">Login</Link>

                    {/* Theme */}
                    <Theme />
                </div>
            </div>

        </div>
    )
}

export default Navbar