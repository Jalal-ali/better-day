import React from 'react'
import logo from '../assets/site-logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center shadow-md">
  <div className="flex-1 flex justify-between items-center">
    <a href="#" className="text-xl">
      <img 
  src={logo} 
  alt="logo" 
  className="w-[200px] h-[96px]" 
/>
    </a>
  </div>
  <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
    <svg
      className="fill-current text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </label>
  <input className="hidden" type="checkbox" id="menu-toggle" />
  <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
    <nav>
      <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
        <li>
          
          <a className="md:p-4 py-3 px-0 block hover:font-semibold hover:text-[#2471a3]" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block hover:font-semibold hover:text-[#2471a3]" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block hover:font-semibold hover:text-[#2471a3]" href="#">
            Gallery
          </a>
        </li>
        <li>
          <a className="md:p-4 py-3 px-0 block hover:font-semibold hover:text-[#2471a3]" href="/contact">
            Contact
          </a>
        </li>
        <li>
          <button className="text-white focus:ring-2 font-medium rounded-sm text-sm md:py-1 py-1 px-4.5 block md:mb-0 mb-2 bg-[#2574a7] hover:bg-blue-700 focus:outline-none focus:ring-black">
            Login
          </button>
        </li>
        {/* <button type="button" class="text-white focus:ring-2 font-medium rounded-sm text-sm md:py-1 py-1 px-4.5 block md:mb-0 mb-2 bg-[#2574a7] hover:bg-blue-700 focus:outline-none focus:ring-black">Login</button> */}

      </ul>
    </nav>
  </div>
</header>

    </>
  )
}

export default Navbar