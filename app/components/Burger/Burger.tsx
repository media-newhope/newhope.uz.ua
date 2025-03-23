'use client';

import { twMerge } from 'tailwind-merge';

interface BurgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  onToggle: () => void;
  isOpen: boolean;
}

const Burger: React.FC<BurgerProps> = ({ onToggle, isOpen, ...props }) => {
  return (
    <button
      onClick={onToggle}
      className="flex flex-col justify-center items-center w-8 h-8"
      aria-label="Toggle menu"
      {...props}
    >
      <div className="flex flex-col justify-between w-6 h-5">
        <span
          className={twMerge(
            'w-full h-0.5 bg-white transition-all duration-300 ease-in-out',
            isOpen && 'transform rotate-45 translate-y-2'
          )}
        />
        <span
          className={twMerge(
            'w-full h-0.5 bg-white transition-all duration-300 ease-in-out',
            isOpen && 'opacity-0'
          )}
        />
        <span
          className={twMerge(
            'w-full h-0.5 bg-white transition-all duration-300 ease-in-out',
            isOpen && 'transform -rotate-45 -translate-y-2'
          )}
        />
      </div>
    </button>
  );
};

export default Burger;
