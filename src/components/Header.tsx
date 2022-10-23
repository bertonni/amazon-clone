import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Sidebar open={isOpen} close={() => setIsOpen(false)} />
      <header>
        <div className="flex items-center flex-grow bg-amazon-blue-dark p-1 py-2">
          <div className="flex items-center flex-grow sm:flex-grow-0">
            <Image
              src={"https://links.papareact.com/f90"}
              width={150}
              height={40}
              objectFit={"contain"}
              className={"cursor-pointer"}
              alt={"Amazon logo"}
            />
          </div>
          <div
            className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer
          bg-amber-400 hover:bg-amber-500 focus:outline-2 outline-amber-400"
          >
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md px-4 focus:outline-none"
              type="text"
            />
            <MagnifyingGlassIcon className="h-12 p-3 text-gray-600" />
          </div>
          <div className="flex items-center text-white text-xs mx-6 whitespace-nowrap">
            <div className="h-12 link py-2">
              <p>Olá, Ibrakadabra</p>
              <p className="font-extrabold md:text-sm">Contas e Listas</p>
            </div>
            <div className="h-12 link py-2">
              <p>Devoluções</p>
              <p className="font-extrabold md:text-sm">e Pedidos</p>
            </div>
            <div className="flex h-12 link items-center relative py-2">
              <span
                className="rounded-full absolute h-4 w-4 text-center font-bold bg-amber-500
            text-black right-1 top-0 md:right-14"
              >
                0
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Carrinho
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-amazon-blue-light text-white text-sm p-2 pl-6">
          <p className="h-7 px-2 py-1 flex items-center link font-semibold" onClick={() => setIsOpen(true)}>
            <Bars3Icon className="h-6 mr-1" />
            Todos
          </p>
          <p className="h-7 px-2 font-semibold py-1 link">Venda na Amazon</p>
          <p className="h-7 px-2 font-semibold py-1 link hidden lg:inline-flex">
            Prime
          </p>
          <p className="h-7 px-2 font-semibold py-1 link">Jogos</p>
          <p className="h-7 px-2 font-semibold py-1 link">Brinquedos e Jogos</p>
          <p className="h-7 px-2 font-semibold py-1 link hidden lg:inline-flex">
            Ideias para Presente
          </p>
          <p className="h-7 px-2 font-semibold py-1 link hidden lg:inline-flex">
            Eletrônicos
          </p>
          <p className="h-7 px-2 font-semibold py-1 link hidden lg:inline-flex">
            eBooks Kindle
          </p>
          <p className="h-7 px-2 font-semibold py-1 link hidden lg:inline-flex">
            Livros
          </p>
          <p className="h-7 px-2 font-semibold py-1 link hidden lg:inline-flex">
            Computadores
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
