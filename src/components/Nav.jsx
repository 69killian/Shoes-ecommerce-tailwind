import React from 'react'
import logoshoesea from "../assets/images/logoshoesea.png"; // Assure-toi d'inclure l'extension du fichier
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='px-8 py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={logoshoesea} alt="Logo" width={130} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
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
