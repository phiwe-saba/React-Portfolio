import React from 'react';
import { Element } from 'react-scroll';
import { FaGithub, FaLaravel, FaServer, FaGit, FaMicrosoft, FaHtml5, FaBootstrap } from "react-icons/fa";

function skills(){
    return(
        <Element id="skills" name="skills">
            <div>
                <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
                    <h1 className="text-blue-600 text-4xl font-bold text-center">Skills</h1>
                    <div className="flex justify-between text-center mx-20 my-10 md:gap-10 gap-2">
                        <div className="flex justify-center items-center cursor-pointer">
                            <FaGithub className="md:w-20 md:h-20 w-16 text-gray-400 md:m-3 p-1 hover:text-black"/>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer">
                            <FaServer className="md:w-20 md:h-20 w-16 text-gray-400 md:m-3 p-1 hover:text-black"/>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer">
                            <FaLaravel className="md:w-20 md:h-20 w-16 text-gray-400 md:m-3 p-1 hover:text-black"/>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer">
                            <FaGit className="md:w-20 md:h-20 w-16 text-gray-400 md:m-3 p-1 hover:text-black"/>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer">
                            <FaMicrosoft className="md:w-20 md:h-20 w-16 text-gray-400 md:m-3 p-1 hover:text-black"/>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer">
                            <FaHtml5 className="md:w-20 md:h-20 w-16 text-gray-400 md:m-3 p-1 hover:text-black"/>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer">
                            <FaBootstrap className="md:w-20 md:h-20 w-16 text-gray-400 md:m-3 p-1 hover:text-black"/>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default skills;