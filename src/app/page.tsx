"use client";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className=" md:flex-row flex items-center justify-center md:justify-around h-screen gap-5 p-5 flex-col-reverse">
      <div className="flex flex-col gap-[10px] md:items-start items-center justify-start xs:justify-center">
        <h3 className="font-bold text-lg">Hello, It&apos;s me</h3>
        <h1 className="font-bold md:text-[40px] xs:text-[32px] text-2xl text-center xs:text-start font-[cursive,'Times_New_Roman',_Times,_serif]">Hudaib Khan</h1>
        <h2 className="text-[2rem] font-[cursive_'Times_New_Roman',_Times,_serif] border-r-[4px_solid_black] overflow-hidden whitespace-nowrap  animate-[typing_3s_steps(30)_1s_infinite,_blink_0.75s_step-end_infinite] font-bold">And I am a <span className="text-[rgb(23,_84,_218)]">Developer</span></h2>
        <p className="flex md:text-base pt-[10px] md:pt-[0px] text-center md:text-start xs:text-start md:justify-center text-xs xs:text-sm">I, am passionate software engineer student and a future AI developer</p>
        <div className="flex md:pt-5 pt-[0px] gap-[15px]">
          <a href="https://www.linkedin.com/in/hudaib-khan-383b21330/" target="_blank">
          <Image
          src="/linkedin-logo.png"
          alt="Linkedin Logo"
          width={38}
          height={40}/>
          </a>
          <a href="https://github.com/Hudaibkhan" target="_blank">
          <Image
          src="/github-logo.png"
          alt="github Logo"
          width={62}
          height={40}/>
          </a>
          <a href="https://www.npmjs.com/~hudaib" target="_blank">
          <Image
          src="/npm-logo.avif"
          alt="npm Logo"
          width={63}
          height={40}/>
          </a>
        </div>
      </div>
      <div className="flex xs:items-start items-center">
        <Image
        src="/profile-image.jpeg"
        alt ="Profile Image"
        width={400}
        height={450}
        className="rounded-full w-[120px] h-auto sm:w-[150px] md:w-[300px] lg:w-[400px] xl:w-[400px] [box-shadow:0px_0px_20px_gray]"/>
      </div>
    </div>
  );
}
