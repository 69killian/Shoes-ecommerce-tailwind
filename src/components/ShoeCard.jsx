import React from 'react';

const ShoeCard = ({ imgURL, changeBigShoeImage, image }) => {

  const handleClick = () => {
    if (image !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div 
      className={`border-1 
        ${image === imgURL.bigShoe ? 'border-[#266131]' : 'border-transparent'}
        cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:py-4">
        <img 
          src={imgURL.bigShoe} 
          alt="Shoe collection" 
          width={127} 
          height={103}
          className="object-contain" 
        />
      </div>
    </div>
  );
};

export default ShoeCard;
