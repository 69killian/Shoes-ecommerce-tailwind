import React from "react"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-[#266131]">Our Winter collections</p>
            <h1 className="mt-10 font-montserrat text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
               <span className="xl:bg-white xl:whitespace-nowrap relative z-10">The New Arrival</span>
               <br />
               <span className="text-[#266131] inline-block mt-3">Shoesea</span> Shoes
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Shoesea arrivals, quality comfort, and innovation for your active life.</p>
            <Button label="Shop now >"/>
            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                {statistics.map((stat) => (
                    <div key={stat.label}>
                        <p className="text-4xl font-bold font-montserrat">{stat.value}</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>

        
    </section>
  )
}

export default Hero