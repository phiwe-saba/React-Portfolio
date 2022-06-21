import { Element } from "react-scroll";

function contact(){
    return(
        <Element id="contact" name="contact">
            <div className="w-full my-10 flex flex-col justify-center items-center rounded pt-4 ">
                <h1 className="text-blue-600 text-4xl font-bold text-center">Contact</h1>
                <div className="flex justify-between text-center md:mx-10">              
                    <div className="flex flex-col md:ml-5 mx-5 mt-5">
                    <form>
                            <div className="form-group mb-4">
                            <input type="text" className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id=""
                                placeholder="Name" />
                            </div>
                            <div className="form-group mb-4">
                            <input type="email" className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id=""
                                placeholder="Email address" />
                            </div>
                            <div className="form-group mb-6">
                            <textarea
                            className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id=""
                            rows="3"
                            placeholder="Message"
                            ></textarea>
                            </div>
                            <button type="submit" className="
                            w-full
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out">Send</button>
                     </form>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default contact;