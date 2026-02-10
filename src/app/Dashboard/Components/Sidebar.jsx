import React from 'react'
// import {faBookmark,faClipboard,faHome,faMessage,faStar,faUserCircle} from "@fortawesome/free-regular-svg-icons"
// import {FontAwsome} from "@fortawesome/react-fontawesome"
import Link from 'next/link'

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
      <li></li>
     </ul>
    </div>
    </>
  )
}


export default Sidebar