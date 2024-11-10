"use client";
import Image from "next/image";
import "../globals.css";
import { useState } from "react";

export default function About(){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return(
        <div className=" h-auto md:h-screen flex flex-col justify-center items-center gap-5 pt-[30px] pb-[33px]">
            <h1 className="text-[40px] font-bold">About <span className="text-[rgb(23,_84,_218)]">Me</span></h1>
            <Image
            src="/profile-image.jpeg"
            alt="profile picture"
            height={200}
            width={200}
            className="rounded-[50%] border-[2px] border-[solid] border-[black] [box-shadow:0px_0px_20px_rgb(33,_10,_233)]"/>
            <h2 className="text-2xl font-bold">Fronted Developer!</h2>
            <p className="flex mx-[50px] my-0 text-center">
            I have completed matriculation and I am enrolled in a 4-quarter based
            course called &apos;Generative AI and Computing.&apos; I have passed the
            first quarter focused on TypeScript and I am currently learning Next.js
            in the second quarter. I’ve completed HTML, CSS key concepts, and I am
            studying advanced topics. The upcoming quarters will cover Python,
            backend development, and AI. Additionally, I’m starting a 3-year diploma
            as an Associate Engineer in Software.
            </p>
            {/* Additional content shows up directly below the first paragraph when expanded */}
            {isExpanded && (
                <p className=" block mx-[50px] my-0 text-center">
                    Before beginning my current studies, I had little knowledge about programming, coding, or the complications of AI creation. My journey into technology has been a rewarding learning experience, allowing me to build essential skills in TypeScript, HTML, CSS, and Next.js. I’m driven by a strong career goal: to establish my own AI company specializing in intelligent agents and to contribute meaningfully to the AI industry. Additionally, as a Hafiz of the Quran, I bring a disciplined and focused approach to my work and studies, values that guide my journey in tech.
                </p>
            )}
            <button className=" bg-[#010b27] text-[white] border-none p-[10px] cursor-pointer text-[1em] rounded-[5px] mt-[10px] [box-shadow:0px_0px_10px_blue] hover:bg-[#1f0dc2]" onClick={toggleReadMore}>
                {isExpanded ? "Read Less" : "Read More"}
            </button>
        </div>
    )
}