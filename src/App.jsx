import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Courses from './components/Courses'

function App() {
  return (
   <>
   <Header/>
   <div id="banner">
   <Banner/>
   </div>
   <div id="courses">
   <Courses/>

   </div>
   </>
  )
}

export default App