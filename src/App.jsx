import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Courses from './components/Courses'
import StaffSwiper from './components/StaffSwiper'

function App() {
  return (
   <>
   <Header/>
   <div id="banner">
   <Banner/>
   </div>
   <div id="courses">
   <Courses/>
    <StaffSwiper/>
   </div>
   </>
  )
}

export default App