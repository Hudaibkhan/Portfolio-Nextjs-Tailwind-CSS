import Image from "next/image";
import "../app/globals.css";

interface CardProps {
  image: string;
  h3: string;
  p: string;
  href: string;
}

export default function Card({ image, h3, p, href }: CardProps) {
  return (
    <div className="w-[300px] bg-black [box-shadow:0px_0px_12px_rgb(243,_223,_223)] rounded-[10px] shadow-lg overflow-hidden p-5 text-center flex flex-col items-center border-[2px_solid_black] hover:-translate-y-[5px]">
      <div className="relative w-[280px] h-[250px] mb-[15px]">
        <Image
          src={image}
          alt="Portfolio Item Image"
          layout="fill" // Use 'fill' to cover the div
          className="rounded-[30px] object-cover [box-shadow:0_0px_18px_rgb(8,_143,_253)]" // Maintain aspect ratio and cover the area
        />
      </div>

      <h3 className="text-[1.4em] mx-0 my-[10px] font-bold">{h3}</h3>
      <p className="text-base mb-5">{p}</p>
      <button
        type="button"
        className="bg-[#007bff] text-white border-none px-5 py-[10px] rounded-[5px] text-[0.9em] cursor-pointer hover:bg-[#0056b3]"
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
          View Project
        </a>
      </button>
    </div>
  );
} 