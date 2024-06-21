import React from 'react'
import { SVGIcon } from '../Icons';

interface StatesItem {
  icon: string;
  rate: string;
  label: string;
}

interface StatesTemplatesProps {
  states: StatesItem[];
}

export const StatesTemplates: React.FC<StatesTemplatesProps> = ({ states }) => {
  return (
    <div className="px-4 xl:px-0 py-10 mx-auto">
      <div className="border border-neutral-800 rounded-xl">
        <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
            {states.map((item, index) => (
              <div key={index} className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                <SVGIcon className="text-6xl flex justify-center text-secondary" name={item.icon} />
                <div className="mt-2">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white">{item.rate}</h3>
                  <p className="mt-1 text-sm sm:text-base text-neutral-400">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
