import Image from "next/image";
import React from "react";
import "../globals.css"
export default function Contact(){
    return(
        <div className="px-[20px] py-[50px] font-[Arial,_sans-serif] text-[white]">
        <div className="max-w-[800px] mx-auto my-0 text-center">
          <h2 className="text-[2.5rem] font-bold mb-[30px] text-white hover:underline hover:cursor-pointer">Contact Me</h2>
          <form className=" flex flex-col items-center mb-[40px]">
            <div className=" animate-fadeIn w-full mb-5 font-medium text-left">
              <label htmlFor="name">Name:</label>
              <input className="w-full p-[10px] [box-shadow:0px_0px_18px_blue] rounded-[10px] text-[1rem] outline-none font-[cursive,'Times_New_Roman',_Times,_serif] bg-transparent text-white" type="text" id="name" name="name" required />
            </div>
            <div className="w-full mb-5 animate-fadeIn font-medium text-left">
              <label className="font-medium block mb-[5px]" htmlFor="email">Email:</label>
              <input className="w-full p-[10px] [box-shadow:0px_0px_18px_blue] rounded-[10px] text-[1rem] outline-none font-[cursive,'Times_New_Roman',_Times,_serif] bg-transparent text-white" type="email" id="email" name="email" required />
            </div>
            <div className="w-full mb-5 animate-fadeIn font-medium text-left">
              <label className="font-medium block mb-[5px]" htmlFor="message">Message:</label>
              <textarea className="h-[150px] w-full p-[10px] [box-shadow:0px_0px_18px_blue] rounded-[10px] text-[1rem] outline-none font-[cursive,'Times_New_Roman',_Times,_serif] bg-transparent text-white resize-none" id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="hover:bg-[#0e0ed4] animate-fadeIn inline-block px-[24px] py-[12px] rounded-[10px] no-underline font-medium [transition:background-color_0.3s_ease-in-out] bg-[#050525] text-white [box-shadow:0px_0px_18px_blue]">
              Send Message
            </button>
          </form>
          <div className=" animate-fadeIn flex justify-center gap-5">
            <a
              href="https://github.com/Hudaibkhan"
              target="_blank"
              className=" mx-[10px] my-[0] rounded-[50%] [box-shadow:0px_0px_20px_blue] hover:bg-blue-800"
            >
              <Image
                src="/github-icon.png"
                alt="GitHub"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hudaib-khan-383b21330/"
              target="_blank"
              className=" mx-[10px] my-[0] rounded-[50%] [box-shadow:0px_0px_20px_blue] hover:bg-blue-800"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.npmjs.com/~hudaib"
              target="_blank"
              className="mx-[10px] my-[0] rounded-[50%] [box-shadow:0px_0px_20px_blue] hover:bg-blue-800"
            >
              <Image
                src="/npm-icon.png"
                alt="Gmail"
                width={35}
                height={35}
                className="rounded-[30%] mt-[10px] ml-[5px] mr-[5px]"
              />
            </a>
          </div>
        </div>
      </div>
    )
}