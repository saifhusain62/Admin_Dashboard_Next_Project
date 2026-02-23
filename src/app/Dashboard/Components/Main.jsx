"use client"
import React from 'react'
import Link from 'next/link'
import dashboardicon1 from '../Image/dashbord-item1.png'
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

const CourseData = [
    
   {id:1 , name:"Vaccine Development" , Enroll:40},
   {id:2 , name:"Clinical Trials" , Enroll:35},
   {id:3 , name:"Trial Development" , Enroll:21},
   {id:4 , name:"IT Development" , Enroll:46},
   {id:5 , name:"Cold Chain" , Enroll:25},
   {id:6 , name:"Hospital Development" , Enroll:56},


];

const RecentCourseData = [
  {id:1 , name:"Vuejs Course" , time: "5hr 45 min", lesson:10, student: 65 , img:recentcourse1},
  {id:2 , name:"Swift Course" , time: "6hr 45 min", lesson:10, student: 65 , img:recentcourse2},
  {id:3 , name:"C Course" , time: "9hr 45 min", lesson:10, student: 65 , img:recentcourse3},
  {id:4 , name:"Nodejs Course" , time: "1hr 45 min", lesson:10, student: 65 , img:recentcourse4},
  {id:5 , name:"Django Course" , time: "2hr 45 min", lesson:10, student: 65 , img:recentcourse5},
  {id:6 , name:"CSS3 Course" , time: "8hr 45 min", lesson:10, student: 65 , img:recentcourse6},
];



const Main = () => {
  return (
    <div>Main</div>
  )
}

export default Main