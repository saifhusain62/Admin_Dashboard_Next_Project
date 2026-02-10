"use client"
import {useState} from 'react'
import Sidebar from './Components/Sidebar';
import Navber from './Components/Navber';
import Main from './Components/Main';

function DashboardPage() {
  const[isOpen,setIsOpen] = useState(false);
  return (
   <>
    <div className='flex min-h-[100vh] h-[100vh] overflow-y-hidden'>
     <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
   </>
  )
}

export default DashboardPage;