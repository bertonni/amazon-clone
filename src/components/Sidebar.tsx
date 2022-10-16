import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Variants, motion, AnimatePresence } from "framer-motion";
import { ISidebarItem, ISidebarProps } from "../@types/types";
import SidebarSection from "./SidebarSection";

const variants: Variants = {
  hidden: { x: -200, transition: { duration: 0.4 } },
  animate: { x: 365, transition: { duration: 0.4 } },
};

const section1: ISidebarItem[] = [
  { value: 'Mais Vendidos', hasSubsection: false },
  { value: 'Novidades na Amazon', hasSubsection: false },
  { value: 'Produtos em alta', hasSubsection: false },
];

const section2: ISidebarItem[] = [
  { value: 'Amazon Fire TV', hasSubsection: true },
  { value: 'Amazon Music', hasSubsection: true },
  { value: 'Prime Video', hasSubsection: true },
  { value: 'Aplicativos Amazon', hasSubsection: true },
  { value: 'Dispositivos Kindle e eBooks', hasSubsection: true },
  { value: 'Echo e Alexa', hasSubsection: true },
];

const section3: ISidebarItem[] = [
  { value: 'Alimentos e Bebidas', hasSubsection: true },
  { value: 'Automotivo', hasSubsection: true },
  { value: 'Bebês', hasSubsection: true },
  { value: 'Beleza e Cuidados Pessoais', hasSubsection: true },
  { value: 'Ver Tudo', hasSubsection: false },
];

const section4: ISidebarItem[] = [
  { value: 'Amazon Family', hasSubsection: false },
  { value: 'Amazon Prime', hasSubsection: false },
  { value: 'Amazon Super', hasSubsection: false },
  { value: 'Dicas de Presentes', hasSubsection: false },
  { value: 'Ver Tudo', hasSubsection: false },
];

const section5: ISidebarItem[] = [
  { value: 'Sua Conta', hasSubsection: false },
  { value: 'Ajuda', hasSubsection: false },
  { value: 'Sair', hasSubsection: false },
];

const Sidebar = ({ open, close }: ISidebarProps) => {
  return (
    <>
      {open && (
        <div
          className="bg-black fixed inset-0 bg-opacity-70 z-20 h-screen w-full"
          onClick={close}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.div
          variants={variants}
          initial={false}
          animate={open ? "animate" : "hidden"}
          className="absolute top-0 -left-[365px] h-screen max-w-xs w-[365px] z-50 flex flex-col"
        >
          <div className="bg-amazon-blue-light h-[50px] flex items-center pl-8 w-[365px]">
            <UserCircleIcon className="h-8 w-8 text-white" />
            <span className="font-bold text-xl text-white pl-2">
              Olá, Ibrakadabra
            </span>
          </div>
          <div className="flex flex-1 flex-col overflow-auto pb-12 w-[365px] bg-white">
            <SidebarSection title="Destaques" data={section1} />
            <SidebarSection
              title="Conteúdo Digital E Dispositivos"
              data={section2}
            />
            <SidebarSection
              title="Comprar Por Categoria"
              data={section3}
            />
            <SidebarSection
              title="Ajuda E Configurações"
              data={section5}
              noSeparator
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
