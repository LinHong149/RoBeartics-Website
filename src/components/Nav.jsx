import { useState } from 'react'
import {Link} from 'react-router-dom';
import { close, robearticslogo, menu } from "../assets"
import { navLinks } from "../constants"
import styles from '../style';

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`w-full flex py-6 justify-between items-center navbar absolute ${styles.paddingX}`}>
      <img onClick={() => scroll`#${"home"}`} src={robearticslogo} alt="Robeartics" className='object-cover w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        <li className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white`}>
          <Link to="Robeartics-Website/sponsor">
            Sponsor
          </Link>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain '
            onClick={() => setToggle((prev) => !prev)}
          />
          <div 
            className={`${toggle ? 'flex' : 'hidden '} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
          >
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className={`font-poppins font-normal cursor-pointer text-[16px] mb-0 text-white`}>
                <Link to="Robeartics-Website/sponsor">
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Nav