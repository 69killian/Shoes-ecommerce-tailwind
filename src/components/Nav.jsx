import React from 'react'
import logo2 from "../assets/images/logo2.png";
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='px-5 py-5 absolute z-10 w-full bg-white border-b-2 border-[#266131]'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={logo2} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='relative rounded-[2px] inline-flex items-center justify-center h-10 px-9 text-base font-medium text-[#266131] bg-white border border-solid border-[#266131] transition-shadow duration-300 ease-in-out shadow-[4px_4px_0px_#266131] hover:shadow-none'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="Hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav

/* colors 
    vert foncé = #266131
    vert clair = 2ECC40
*/
