import React from 'react'
import { thumbnailBackground, } from '../assets/images'

const PopularProductCard = ({imgURL, name, price, noPromoPrice}) => {
  return (
    <div class="relative m-10 w-full max-w-xs max-sm:w-full flex flex-1 flex-col overflow-hidden rounded-[3px] bg-white relative rounded-[4px] inline-flex items-center justify-center text-base font-medium text-[#266131] bg-white border border-solid border-[#266131] transition-shadow duration-300 ease-in-out shadow-[4px_4px_0px_#266131] hover:shadow-none">
  <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img className=' absolute z-0 object-cover w-[280px]' src={thumbnailBackground} alt="" />
    <img className="object-cover z-10 w-[280px]" src={imgURL} alt={name}/>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a href="#">
      <h5 class="text-xl tracking-tight text-slate-900 font-montserrat">{name}</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900 font-montserrat">{price}</span>
        <span class="text-sm text-slate-900 line-through font-montserrat">{noPromoPrice}</span>
      </p>
      <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-montserrat">5.0</span>
          </div>
    </div>
  </div>
</div>

  )
}

export default PopularProductCard