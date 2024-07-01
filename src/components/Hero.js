import Image from "next/image";
import React from "react";

export default function Hero({ imgsrc, title, text }) {
  const card = [
    {
      img: "/h1.jpg",
      title: "Product name",
      price: "IDR 200.00",
      btn: "SHOP NOW",
    },

    {
      img: "/h1.jpg",
      title: "Product name",
      price: "IDR 200.00",
      btn: "SHOP NOW",
    },
  ];

  return (
    <div className="relative">
      <Image
        src={imgsrc}
        width={3000}
        height={3000}
        alt="img"
        className="h-auto lg:h-[95vh] w-full"
      />

      <div className="absolute top-0 w-full h-full bg-slate-500 bg-opacity-30 app-container">
        <div className="flex flex-col h-full px-7 mt-24 py-5">
          <div className="max-w-md">
            <p className="text-white text-xs md:text-sm">{text}</p>
            <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-medium">{title}</h1>
          </div>

          <div className="flex flex-row md:flex-col gap-5  items-end w-full">
            {card.map((v, i) => (
              <div key={i} className="bg-white h-auto md:h-36 w-auto md:w-72 grid grid-cols-2 ">
                <div>
                  <Image
                    src={v.img}
                    width={2000}
                    height={300}
                    alt={v.title}
                    className=""
                  />
                </div>
                <div className="flex flex-col justify-between py-3">
                  <span>
                    <h3>{v.title}</h3>
                    <p>{v.price}</p>
                  </span>
                  <span className="">
                    <u>
                      {" "}
                      <p className="text-xs">{v.btn}</p>
                    </u>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
