import React from 'react';
import { Element } from 'react-scroll';

function projects(){
    return(
        <Element id="projects" name="projects">
          
                <h1 className="text-blue-600 text-4xl pt-12 pb-10 font-bold text-center">Current Projects</h1>
                <div className="flex justify-center">
                    <div className="block p-12 m-12 rounded-lg shadow-lg bg-white max-w-md">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">We-Recruit</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Website to search and apply for jobs.
                        </p>
                        <a href="https://github.com/phiwe-saba/recruitment-app" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                View Project.
                        </a>
                    </div>

                    <div className="block p-12 m-12 rounded-lg shadow-lg bg-white max-w-md">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Medical Zone</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Booking a doctors appointment system.
                        </p>
                        <a href="https://github.com/phiwe-saba/HospitalApp" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                View Project.
                        </a>
                    </div>
                </div>
        </Element>
    )
}

export default projects;
