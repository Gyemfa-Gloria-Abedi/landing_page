import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-30 drop-shadow-xl border px-4 md:px-16 py-4">
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src="#" alt="logo" className="h-[35px]" />
        </div>

        <div className="w-[40%]">
          <ul className="hidden md:flex text-[#1F485B] justify-between">
            <li>
              <Link className="cursor-pointer" activeClass="active" to="home">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                activeClass="active"
                to="services">
                Services
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                activeClass="active"
                to="about_us">
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer"
                activeClass="active"
                to="contact_us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="justify-between gap-5 flex">
          <NavLink to="#">
            <button className="md:border-none px-2 py-2 bg-transparent text-[#1F485B]">
              Login
            </button>
          </NavLink>
          <NavLink to="#">
            <button className="md:px-3 px-1 py-2 bg-[#1F485B] text-white">
              Signup
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
