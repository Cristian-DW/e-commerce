'use client';

import { IconType } from "react-icons";

/**
 * Props for the Button component.
 */
interface ButtonProps {
   /**
    * The text label of the button.
    */
   label: string;

   /**
    * Whether the button is disabled.
    */
   disabled?: boolean;

   /**
    * Whether the button has an outlined style.
    */
   outlined?: boolean;

   /**
    * Whether the button is small.
    */
   small?: boolean;

   /**
    * Custom classes for the button.
    */
   custom?: string;

   /**
    * Icon component to be displayed inside the button.
    */
   icon?: IconType;

   /**
    * Click event handler for the button.
    */
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A customizable button component with various styling options.
 * @param props The properties for the button component.
 */
const Button: React.FC<ButtonProps> = ({
   label,
   disabled,
   outlined,
   small,
   custom,
   icon: Icon,
   onClick,
}) => {
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         className={`relative w-full bg-indigo-500 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed
         ${outlined ? 'border border-indigo-300' : 'indigo-700'}
         ${outlined ? 'text-slate-300' : 'text-white'}
         ${small ? 'text-sm font-light' : 'text-md font-semibold'}
         ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-[2px]'}
         ${custom ? custom : ''}
         `}>
         {Icon && <Icon size={24} className="absolute left-4 top-3" />}
         {label}
      </button>
   );
}

export default Button;
