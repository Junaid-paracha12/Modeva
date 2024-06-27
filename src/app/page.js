import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Card from "@/components/ProductCard";
import Categaries from "@/components/Categaries";
import Hero from "@/components/Hero";
import React from "react";
import Service from "@/components/service";
import Reviews from "@/components/Reviews";

export default function Page() {
  const women = [
    {
      imgsrc: "/w1.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
    {
      imgsrc: "/w2.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
    {
      imgsrc: "/w3.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
    {
      imgsrc: "/w4.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
  ];
  const men = [
    {
      imgsrc: "/m1.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
    {
      imgsrc: "/m2.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
    {
      imgsrc: "/m3.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
    {
      imgsrc: "/m4.jpg",

      rating: "4.5",
      category: "Product Category",
      name: "Product Name",
      price: "IDR 200.00",
    },
  ];

  return (
    <div className="flex flex-col gap-10 ">
      <Hero
        imgsrc={"/hero.jpg"}
        text={"made in Indonesia, dedicated to Indonesia"}
        title={"Discover the Art of Dressing Up"}
      />
      <Categaries />
      <div className=" app-container">
        <h1 className="text-5xl font-normal py-4 max-w-lg">
          {" "}
          the best dress for the best woman
        </h1>
        <div className="grid grid-cols-4 gap-5">
          {women.map((item, index) => (
            <Card
              key={index}
              imgsrc={item.imgsrc}
              rating={item.rating}
              category={item.category}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
        <button className="button-theme   my-3 flex items-center gap-0.5">
          SEE More
          <ArrowRightIcon
            width={5}
            hanging={4}
            stroke="white "
            className="w-5 h-4"
          />
        </button>
      </div>

      <div className=" app-container">
        <h1 className="text-5xl font-normal py-4 max-w-lg">
          {" "}
          Best outfit for your happiness{" "}
        </h1>
        <div className="grid grid-cols-4 gap-5 app-container">
          {men.map((item, index) => (
            <Card
              key={index}
              imgsrc={item.imgsrc}
              rating={item.rating}
              category={item.category}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

        <button className="button-theme  my-3 flex items-center gap-0.5">
          SEE More
          <ArrowRightIcon
            width={5}
            hanging={4}
            stroke="white"
            className="w-5 h-4"
          />
        </button>
      </div>
      <Service />
      <Reviews />
    </div>
  );
}
