import React from 'react'
// import {faBookmark,faClipboard,faHome,faMessage,faStar,faUserCircle} from "@fortawesome/free-regular-svg-icons"
// import {FontAwsome} from "@fortawesome/react-fontawesome"
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { FaDiscourse } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { IoSettings } from "react-icons/io5";




const Sidebar = ({isOpen,setIsOpen}) => {
  return (
    <>
    <div className={`h-100vh w-[320px] min-h-[100vh] pb-5 p-5 sidebar bg-white shadow-xl fixed lg:relative transition transition-transform duration-300 z-50 ${isOpen ? "translate-x-0":"-translate-x-full"}lg:translate-x-0`}>

      <div className='nav-logo text-center py-2'>
        <Link href='/' className='cursor-pointer'>
        <h1 className='text-3xl font-semibold font-unbounded'>Learn <span className='text-[#066dca] font-unbounded'>Hub</span></h1>
        </Link>

      </div>
     <span className='h-[1.5px] bg-[#dfe0e4] w-full block my-2'></span>
     <p className='text-neutral-500 font-sera tracking-wide py-3'>Welcome Saif</p>
    <ul className='flex flex-col gap-3 sidebar-nav relative z-20 overflow-y-scroll'>
  <li className='py-3 px-4 rounded-xl active text-neutral-500 font-sora transition-colors duration-300'>
    <Link href="/Dashboard" className='flex items-center gap-2 text-md'>
      <FaHome className='text-[#066dca] transition-colors duration-300'/>
      <span>Dashboard</span>
    </Link> 
  </li>
  <li className='py-3 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300'>
    <Link href="/Profile" className='flex items-center gap-2 text-md'>
      <CgProfile  className='text-[#066dca] transition-colors duration-300'/>
      <span>My Profile</span>
    </Link> 
  </li>
  <li className='py-3 px-4 rounded-xl active text-neutral-500 font-sora transition-colors duration-300'>
    <Link href="/Message" className='flex items-center gap-2 text-md'>
      <FaMessage   className='text-[#066dca] transition-colors duration-300'/>
      <span>Message</span>
    </Link> 
  </li>
  <li className='py-3 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300'>
    <Link href="/Courses" className='flex items-center gap-2 text-md'>
      <FaDiscourse    className='text-[#066dca] transition-colors duration-300'/>
      <span>Courses</span>
    </Link> 
  </li>
   <li className='py-3 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300'>
    <Link href="/WishList" className='flex items-center gap-2 text-md'>
      <FaBookmark     className='text-[#066dca] transition-colors duration-300'/>
      <span>WishList</span>
    </Link> 
  </li>
   <li className='py-3 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300'>
    <Link href="/Reviews" className='flex items-center gap-2 text-md'>
      <MdReviews      className='text-[#066dca] transition-colors duration-300'/>
      <span>Reviews</span>
    </Link> 
  </li>
   <li className='py-3 px-4 rounded-xl  text-neutral-500 font-sora transition-colors duration-300'>
    <Link href="/Settings" className='flex items-center gap-2 text-md'>
      <IoSettings       className='text-[#066dca] transition-colors duration-300'/>
      <span>Settings</span>
    </Link> 
  </li>
</ul>

    </div>
    </>
  )
}


export default Sidebar