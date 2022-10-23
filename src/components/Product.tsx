import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IProducts } from "../@types/types";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";

const Product = ({
  title,
  price,
  description,
  id,
  image,
  category,
}: IProducts) => {
  const [rating, setRating] = useState<number>(0);
  const [hasPrime] = useState<boolean>(Math.random() < 0.5);

  useEffect(() => {
    if (!rating) setRating(Math.floor(Math.random() * 5) + 1);
  }, [rating]);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit={"contain"}
        alt={title}
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex items-center">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={parseInt(price)} currency="BRL" decimal="," />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <picture>
            <img src="https://links.papareact.com/fdw" alt="prime" className="w-12" />
          </picture>
          <p className="text-xs text-gray-500">Entrega grátis</p>
        </div>
      )}
      <button className="mt-auto button">Adicionar ao carrinho</button>
    </div>
  );
};

export default Product;
