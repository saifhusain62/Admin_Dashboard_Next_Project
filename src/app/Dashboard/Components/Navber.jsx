"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";
import user from '../Image/user.jpg'



export default function Navber({ setIsOpen }) {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
    setNotificationOpen(false);
  };

  const toggleNotification = () => {
    setNotificationOpen(!isNotificationOpen);
    setUserMenuOpen(false);
  };

  return (
    <>
      <div className="bg-white h-[90px] shadow-lg flex justify-between items-center gap-3 px-[2%]">

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-xl text-gray-600"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <FaBarsStaggered />

        </button>

        {/* Search Box */}
        <div className="search-box relative h-[45px] hidden lg:flex items-center rounded-md w-70 border-1 border-blue-500 overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full ps-4 pr-12 outline-none rounded-full bg-transparent"
          />
          <button className="absolute right-1 bg-blue-600 hover:bg-blue-700 transition-colors h-[38px] w-[38px] flex items-center justify-center rounded-full cursor-pointer">
            <FaSearch className="text-white text-[16px]" />
          </button>
        </div>
        <div className='toggle lg:hidden flex cursor-pointer text-2xl' onClick={()=>setIsOpen(true)}>
               <FaBarsStaggered />
        </div>
        <div className='flex gap-3 items-center'>
           <span className='border border-blue-500 hover:bg-blue-500
           hover:text-white px-4 rounded-md py-2 cursor-pointer transition-colors duration-300 hidded lg:flex'>
            Create a New Course
           </span>
           <div className="notification cursor-pointer border border-white rounded-md min-w-[45px] min-h-[45px] lg:flex justify-center items-center text-xl p-2 relative hover:bg-blue-500 hover:text-white transition-colors duration-300" onClick={toggleNotification}>
            <IoMdNotifications />
            <span className="badge text-xs text-white bg-blue-500 px-1 rounded-2xl absolute top-0 right-0">
              2
            </span>
            {isNotificationOpen &&(
              <ul className='absolute top-14 right-0 bg-white w-[350px]
              p-3 flex flex-col gap-2 rounded-2xl shadow-cl animate-fade-in'>
                <li className='text-sm text-gray-700'>
                       <Link href='/' className='w-full flex justify-between items-center'>
                       <div className='flex items-start gap-2 '>
                        <Image  src={user} alt='user-image'
                        className='w-14 h-14'/>
                        <div>
                          <span className='text-black sora-font text-lg'>
                            Saif Husain
                          </span>
                          <p className='text-gray-500 text-xs'>
                            You Can stich between artboards
                          </p>
                        </div>
                       </div>
                       <span className='text-gray-500 text-xs font-medium'>
                        23 mins ago
                       </span>
                       </Link>
                </li>
                 <li className='text-sm text-gray-700'>
                       <Link href='/' className='w-full flex justify-between items-center'>
                       <div className='flex items-start gap-2 '>
                        <Image  src={user} alt='user-image'
                        className='w-14 h-14'/>
                        <div>
                          <span className='text-black sora-font text-lg'>
                             Hassnain Mahmud
                          </span>
                          <p className='text-gray-500 text-xs'>
                            Urgent meet with me
                          </p>
                        </div>
                       </div>
                       <span className='text-gray-500 text-xs font-medium'>
                        28 mins ago
                       </span>
                       </Link>
                </li>
              </ul>
            )}
           </div>
           <div className='comment cursor-pointer border border-white rounded-md min-w-[45px] min-h-[45px] hidden lg:flex justify-center text-xl p-2 relative hover:bg-blue-500 hover:text-white transition-colors duration-300'>
            <FaCommentDots />
           </div>
        </div>
      </div>
    </>
  );
}