import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export default function Card({
  imgsrc,

  name,
  price,
  category,
  rating,
}) {
  return (
    <div>
      <div className="relative">
        <Image
          src={imgsrc}
          width={2000}
          height={2000}
          alt="imd"
          className="w-full h-[35vh]"
        />
        <div className="absolute top-0 flex  justify-end w-full p-2">
          <span className="bg-slate-900 rounded-xl px-2 py-0.5 flex gap-1 items-center">
            <StarIcon
              width={200}
              height={200}
              fill="yellow"
              className="w-3 h-3"
            />

            <p className="text-xs text-white">{rating}</p>
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm">{category}</p>
        <h2 className="text-2xl ">{name}</h2>
        <p className="text-sm">{price}</p>
      </div>
    </div>
  );
}
