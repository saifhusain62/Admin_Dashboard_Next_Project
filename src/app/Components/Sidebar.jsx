"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { FaDiscourse } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  // Menu items array for cleaner code
  const menuItems = [
    { href: "/Dashboard", icon: FaHome, label: "Dashboard" },
    { href: "/Profile", icon: CgProfile, label: "My Profile" },
    { href: "/Message", icon: FaMessage, label: "Message" },
    { href: "/Courses", icon: FaDiscourse, label: "Courses" },
    { href: "/WishList", icon: FaBookmark, label: "WishList" },
    { href: "/Reviews", icon: MdReviews, label: "Reviews" },
    { href: "/Settings", icon: IoSettings, label: "Settings" },
  ];

  const adminItems = [
    { href: "/Settings", icon: IoSettings, label: "Settings" },
  ];

  // Function to check if link is active
  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className={`h-screen w-[320px] min-h-screen pb-5 p-5 sidebar bg-white shadow-xl fixed lg:relative transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>

        <div className='nav-logo text-center py-2'>
          <Link href='/' className='cursor-pointer'>
            <h1 className='text-3xl font-semibold font-unbounded'>
              Learn <span className='text-[#066dca] font-unbounded'>Hub</span>
            </h1>
          </Link>
        </div>

        <span className='h-[1.5px] bg-[#dfe0e4] w-full block my-2'></span>
        <p className='text-neutral-500 font-sora tracking-wide py-3'>Welcome Saif</p>

        <ul className='flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-auto max-h-[calc(100vh-300px)]'>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li 
                key={index}
                className={`py-3 px-4 rounded-xl font-sora transition-colors duration-300 hover:bg-blue-50 ${
                  isActive(item.href) 
                    ? 'bg-blue-100 text-[#066dca]' 
                    : 'text-neutral-500'
                }`}
              >
                <Link 
                  href={item.href} 
                  className='flex items-center gap-2 text-md'
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className='text-[#066dca] transition-colors duration-300'/>
                  <span>{item.label}</span>
                </Link> 
              </li>
            );
          })}

          <p className='text-neutral-500 font-sora tracking-wide py-3'>Admin</p>
          
          {adminItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li 
                key={index}
                className={`py-3 px-4 rounded-xl font-sora transition-colors duration-300 hover:bg-blue-50 ${
                  isActive(item.href) 
                    ? 'bg-blue-100 text-[#066dca]' 
                    : 'text-neutral-500'
                }`}
              >
                <Link 
                  href={item.href} 
                  className='flex items-center gap-2 text-md'
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className='text-[#066dca] transition-colors duration-300'/>
                  <span>{item.label}</span>
                </Link> 
              </li>
            );
          })}
        </ul>

        <ul className='flex sidebar-nav flex-col justify-center items-center gap-3 absolute bottom-0 left-0 right-0 w-full p-5 pb-2'>
          <li className='w-full py-3 px-4 rounded-xl text-neutral-500 font-sora transition-colors duration-300 hover:bg-red-50'>
            <Link href="/logout" className='flex items-center gap-2 text-md'>
              <FiLogOut className='text-[#066dca] transition-colors duration-300'/>
              <span>Logout</span>
            </Link> 
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar