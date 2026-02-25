"use client"
import React from 'react'
import Link from 'next/link'
import dashboardicon1 from '../image/dashbord-item1.png'
import dashboardicon2 from '../Image/dashbord-item2.png'
import dashboardicon3 from '../Image/dashbord-item3.png'
import dashboardicon4 from '../Image/dashbord-item4.png'
import dashboardicon5 from '../Image/dashbord-item5.png'
import dashboardicon6 from '../Image/dashbord-item6.png'
import instructorImage1 from '../Image/Instructor-01.png'
import instructorImage2 from '../Image/Instructor-02.png'
import instructorImage3 from '../Image/Instructor-03.png'
import instructorImage4 from '../Image/Instructor-04.png'
import instructorImage5 from '../Image/Instructor-05.png'
import instructorImage6 from '../Image/Instructor-06.png'
import recentcourse1 from '../Image/RecentCourse-1.png'
import recentcourse2 from '../Image/RecentCourse-2.png'
import recentcourse3 from '../Image/RecentCourse-3.png'
import recentcourse4 from '../Image/RecentCourse-4.png'
import recentcourse5 from '../Image/RecentCourse-5.png'
import recentcourse6 from '../Image/RecentCourse-6.png'
import { IoMdStar } from "react-icons/io";
import dynamic from 'next/dynamic'
import Image from 'next/image'

const CourseData = [
    
   {id:1 , name:"Vaccine Development" , Enroll:40},
   {id:2 , name:"Clinical Trials" , Enroll:35},
   {id:3 , name:"Trial Development" , Enroll:21},
   {id:4 , name:"IT Development" , Enroll:46},
   {id:5 , name:"Cold Chain" , Enroll:25},
   {id:6 , name:"Hospital Development" , Enroll:56},


];

const RecentCourseData = [
  {id:1 , name:"Vuejs Course" , time: "5hr 45 min", lesson:10, student: 65 , Image:recentcourse1},
  {id:2 , name:"Swift Course" , time: "6hr 45 min", lesson:10, student: 65 , Image:recentcourse2},
  {id:3 , name:"C Course" , time: "9hr 45 min", lesson:10, student: 65 , Image:recentcourse3},
  {id:4 , name:"Nodejs Course" , time: "1hr 45 min", lesson:10, student: 65 , Image:recentcourse4},
  {id:5 , name:"Django Course" , time: "2hr 45 min", lesson:10, student: 65 , Image:recentcourse5},
  {id:6 , name:"CSS3 Course" , time: "8hr 45 min", lesson:10, student: 65 , Image:recentcourse6},
];

const instructorData = [
  {id:1, name:"Leis Borman" , courses:17 , student:2134, reviews:"4.8(55K+ Students)", Image:instructorImage1},
  {id:2, name:"Saint Oshiea" , courses:10 , student:4567, reviews:"4.8(55K+ Students)", Image:instructorImage2},
  {id:3, name:"Jhon Borman" , courses:4 , student:1242, reviews:"4.8(55K+ Students)", Image:instructorImage3},
  {id:4, name:"Ilisshe Johman" , courses:8 , student:6732, reviews:"4.8(55K+ Students)", Image:instructorImage4},
  {id:5, name:"Katish Borman" , courses:26 , student:2341, reviews:"4.8(55K+ Students)", Image:instructorImage5},
  {id:6, name:"Luta Borman" , courses:20 , student:9826, reviews:"4.8(55K+ Students)", Image:instructorImage6},
];

const Main = () => {
    
    const Mychart = dynamic(()=>("../Components/MyChart.jsx"),{ssr:false});

  return (
    <>
      <h2 className='sont-semibold text-2xl pb-5'>Dashboard !</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5'>
        <div className='p-5 rounded-xl bg-white w-full flex justify-between items-start gap-3 shadow-xl'>
          <div>
            <p className='text-gray-600 text-md font-normal'>Total Courses</p>
            <h6 className='text-gray-600 text-2xl font-medium pb-3'>2000+</h6>
            <Link href='/' className='text-blue-500 underline text-xs font-medium cursor-pointer'>View All</Link>
          </div>
          <div className='dashboard-icon bg-orange-400 min-w-10 min-h-10 flex justify-center items-center rounded-full cursor-pointer'>
            <Image src={dashboardicon1} alt="dashbord-icon" className='object-cover' />

          </div>

        </div>
         <div className='p-5 rounded-xl bg-white w-full flex justify-between items-start gap-3 shadow-xl'>
          <div>
            <p className='text-gray-600 text-md font-normal'>Enrolled Courses</p>
            <h6 className='text-gray-600 text-2xl font-medium pb-3'>9000+</h6>
            <Link href='/' className='text-blue-500 underline text-xs font-medium cursor-pointer'>View All</Link>
          </div>
          <div className='dashboard-icon bg-green-500 min-w-10 min-h-10 flex justify-center items-center rounded-full cursor-pointer'>
            <Image src={dashboardicon2} alt="dashbord-icon" className='object-cover' />

          </div>

        </div>

         <div className='p-5 rounded-xl bg-white w-full flex justify-between items-start gap-3 shadow-xl'>
          <div>
            <p className='text-gray-600 text-md font-normal'>Active Courses</p>
            <h6 className='text-gray-600 text-2xl font-medium pb-3'>600+</h6>
            <Link href='/' className='text-blue-500 underline text-xs font-medium cursor-pointer'>View All</Link>
          </div>
          <div className='dashboard-icon bg-blue-500 min-w-10 min-h-10 flex justify-center items-center rounded-full cursor-pointer'>
            <Image src={dashboardicon3} alt="dashbord-icon" className='object-cover' />

          </div>

        </div>

         <div className='p-5 rounded-xl bg-white w-full flex justify-between items-start gap-3 shadow-xl'>
          <div>
            <p className='text-gray-600 text-md font-normal'>Complete Courses</p>
            <h6 className='text-gray-600 text-2xl font-medium pb-3'>100+</h6>
            <Link href='/' className='text-blue-500 underline text-xs font-medium cursor-pointer'>View All</Link>
          </div>
          <div className='dashboard-icon bg-red-500 min-w-10 min-h-10 flex justify-center items-center rounded-full cursor-pointer'>
            <Image src={dashboardicon4} alt="dashbord-icon" className='object-cover' />

          </div>

        </div>

         <div className='p-5 rounded-xl bg-white w-full flex justify-between items-start gap-3 shadow-xl'>
          <div>
            <p className='text-gray-600 text-md font-normal'>Total Student</p>
            <h6 className='text-gray-600 text-2xl font-medium pb-3'>89,000+</h6>
            <Link href='/' className='text-blue-500 underline text-xs font-medium cursor-pointer'>View All</Link>
          </div>
          <div className='dashboard-icon bg-purple-500 min-w-10 min-h-10 flex justify-center items-center rounded-full cursor-pointer'>
            <Image src={dashboardicon5} alt="dashbord-icon" className='object-cover' />

          </div>

        </div>

         <div className='p-5 rounded-xl bg-white w-full flex justify-between items-start gap-3 shadow-xl'>
          <div>
            <p className='text-gray-600 text-md font-normal'>Total Earnings</p>
            <h6 className='text-gray-600 text-2xl font-medium pb-3'>110,000$</h6>
            <Link href='/' className='text-blue-500 underline text-xs font-medium cursor-pointer'>View All</Link>
          </div>
          <div className='dashboard-icon bg-indigo-500 min-w-10 min-h-10 flex justify-center items-center rounded-full cursor-pointer'>
            <Image src={dashboardicon6} alt="dashbord-icon" className='object-cover' />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className='bg-white rounded-xl shadow-md p-4 border border-gray-300'>
            <div className='flex justify-between items-center mb-4'>
                 <h2 className='text-sm font-semibold text-gray-800'>Popular Instructor</h2>
                 <a href="#" className='text-blue-500 text-xs' >View All</a>
            </div>

            <div className='overflow-y-auto md:overflow-x-hidden rounded-xl'>
                <table className='w-full min-w-[600px]'>
                 <thead>
                   <tr className='bg-gray-300 text-xs text-pink-950'></tr>
                   <th className='py-3 px-4 text-left cursor-pointer font-medium'>
                    Instructor
                   </th>
                   <th className='py-3 px-4 text-left cursor-pointer font-medium items-center'>
                    Courses
                   </th>
                   <th className='py-3 px-4 text-right cursor-pointer font-medium'>
                    Students
                   </th>
                    <th className='py-3 px-4 text-right cursor-pointer font-medium'>
                    Reviews
                   </th>
                 </thead>
                 <tbody>
                  {instructorData.map((instructor)=>(
                    <tr key={instructor.id} className='border-t border-gray-300 hover:bg-gray-200 transition-colors'>
                      <td className='flex items-center gap-3 py-3 px-4'>
                       <Image src={instructor.Image}
                       alt={instructor.name}
                       width={40}
                       height={40}
                       className='rounded-full'/>
                      
                      <span className='text-gray-700 text-xs font-normal'>
                        {instructor.name}
                      </span>
                      </td>
                      <td className='py-3 px-4 text-gray-700 text-xs font-normal text-center'>
                      {instructor.courses}
                      </td>
                      <td className='py-3 px-4 text-gray-700 text-xs font-normal text-center'>
                      {instructor.students}
                      </td>
                      <td className='py-3 px-4 text-gray-700 text-xs font-normal text-center'>
                        <IoMdStar className='text-yellow-500 pe-2'/>
                      {instructor.reviews}
                      </td>
                    </tr>
                  ))}
                 </tbody>
                </table>
               </div>
          </div>
      </div>
    </>
  )
}

export default Main