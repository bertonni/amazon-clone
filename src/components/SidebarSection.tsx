import React from 'react'
import { ISidebarSectionProps } from '../@types/types';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const SidebarSection = ({ title, data, noSeparator }: ISidebarSectionProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="py-2 pl-8 text-black text-lg font-bold mt-4">{title}</h1>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-between cursor-pointer hover:bg-gray-200
          py-2 mt-1 pl-8 pr-4 text-black text-sm"
        >
          <span className='flex-1'>{item.value}</span>
          {item.hasSubsection && <ChevronRightIcon className='h-6 w-6 text-black' />}
        </div>
      ))}

      {!noSeparator && <hr className="border-b border-[#d5dbdb] my-1" />}
    </div>
  );
}

export default SidebarSection;