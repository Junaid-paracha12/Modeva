import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Reviews() {
  const content = [
    {
      name: "MR.Jones",
      date: "17 june 2024",

      text: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.",
    },
    {
      name: "MR.Jones",
      date: "17 june 2024",

      text: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.",
    },
    {
      name: "MR.Jones",
      date: "17 june 2024",

      text: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.",
    },
  ];
  return (
    <div className="bg-slate-200/85 opacity-100 app-container  h-[60vh] relative top-32">
      <div>
        <Marquee className="mt-12 scroll-hidden">
          <div className="flex items-center ">
            {content?.map((v, i) => (
              <div
                key={i}
                className="hover-theme h-auto bg-white  py-4 px-8 w-full mx-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 ">
                    <span className="w-9 h-9 rounded-full bg-sky-800"></span>
                    <span className="flex flex-col ">
                      <h1 className=" text-xl">{v.name}</h1>

                      <p className=" text-sm md:text-xs  ">{v.date}</p>
                    </span>
                  </div>
                  <StarIcon
                    width={20}
                    height={20}
                    className="w-3 h-3"
                    fill="yellow"
                  />
                </div>
                <p className=" text-xs  max-w-xs py-2">{v.text}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
