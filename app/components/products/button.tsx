'use client';

import { IconType } from "react-icons"

interface ButtonProps {
   label: string,
   disabled?: boolean,
   outlined?: boolean,
   small?: boolean
   custom?: string,
   icon?: IconType,
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
   label,
   disabled,
   outlined,
   small,
   custom,
   icon: Icon,
   onClick

}) => {

   return (
      <button
      disabled={disabled} 
      className={`relative w-full bg-slate-800 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed
      ${outlined ? 'border border-slate-300' : 'bg-slate-800'}
      ${outlined ? 'text-slate-300' : 'text-white'}
      ${small ? 'text-sm font-light' : 'text-md font-semibold'}
      ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-[2px]'}
      ${custom ? custom : ''}
      `}>
         {Icon && <Icon size={24} className="absolute left-4 top-3" />}
         {label}
      </button>
   )
}

export default Button;