"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

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
          <FaBars />
        </button>

        {/* Search Box */}
        <div className="search-box relative h-[45px] hidden lg:flex items-center rounded-md w-70 border-2 border-blue-500 overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full ps-4 pr-12 outline-none rounded-full bg-transparent"
          />
          <button className="absolute right-1 bg-blue-600 hover:bg-blue-700 transition-colors h-[38px] w-[38px] flex items-center justify-center rounded-full">
            <FaSearch className="text-white text-[16px]" />
          </button>
        </div>

      </div>
    </>
  );
}