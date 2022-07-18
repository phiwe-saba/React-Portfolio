import React from "react";
import Image from "next/image";
import heroImage from "../public/Images/heroImage.jpg";

import { Element } from "react-scroll";


function Home(){
    return(
        <Element id="Home" name="Home">
            <div className="">
                <div className="flex justify-between text-center md:mx-15 md:pt-10 md:pb-15">                
                    <div className="flex flex-col md:ml-20 mx-20 mt-10">
                        <h1 className="font-bold text-7xl text-left mb-5">
                            Hello, <span className="text-blue-600">Sibulele</span> here!
                        </h1>
                        <p className="text-left font-normal font mb-5 flex-wrap">
                            I am a talented graduate developer with a strong academic background seeking a position that incorporates problem-solving, critical thinking and expands and improves on current skills. Expertise of building web applications and websites using C#, .Net technologies, Laravel, HTML, CSS and JavaScript.
                        </p>
                        <a href="https://drive.google.com/file/d/1Hcpf9GM0RXg0ocC9Zkbu2XPCtOp8wNsj/view?usp=sharing" className="font-semibold text-white md:mt-10 mt-5 pt-5 pb-10 bg-blue-600 rounded-md w-60 h-16 text-lg hover:bg-black">
                            Download CV.
                        </a>
                    </div>
                </div>
            </div>

         
           
        </Element>
    );
}

export default Home;
