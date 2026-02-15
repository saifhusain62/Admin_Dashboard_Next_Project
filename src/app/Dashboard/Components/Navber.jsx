"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navber({setIsOpen}) {
  const [isUserMenuOpen,setUserMenu]=useState(false);
  const [isNotificationOpen,setNotificationOpen]=useState(false);

  const toggleUserMenu = ()=>{
    setUserMenuOpen(!isUserMenuOpen);
    setNotificationOpen(false);
  };

  const toggleNotification = ()=>{
    setNotificationOpen(!isNotificationOpen);
    setUserMenuOpen(false);
  };
  return (
    <>
      <div className="bg-shite shadow-lg flex justify-between items-center gap-3"></div>
    </>
  )
}


