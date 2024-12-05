import React from 'react';

const Button = ( {label}) => {
  return (
    <button className="relative rounded-[4px] inline-flex items-center justify-center h-10 px-9 text-base font-medium text-[#266131] bg-white border border-solid border-[#266131] transition-shadow duration-300 ease-in-out shadow-[4px_4px_0px_#266131] hover:shadow-none">
      {label} 
    </button>
  );
};

export default Button;
