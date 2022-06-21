import React, {useState} from 'react';
import { Transition } from "@headlessui/react"; //for smooth transition.
import { Link } from "react-scroll"; //for smooth scroll.

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <nav className='' >
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-bold text-xl cursor-pointer'>Sibulele <span className='text-blue-600'>Saba</span></h1>
                            </div>
                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Link activeClass='Home' to='home' smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Home</Link>
                                    <Link activeClass='Skills' to='skills' smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Skills</Link>
                                    <Link activeClass='Projects' to='projects' smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Projects</Link>
                                    <Link activeClass='Contact' to='contact' smooth={true} offset={50} duration={500} className="cursor-pointer hover:text-blue-600 px-3 py-2 text-md">Contact</Link>
                                </div>
                            </div>
                        </div>

                        <div className="mr-14 flex md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-blue-600 inline-flex items-centerjustify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;