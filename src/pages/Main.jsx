import { Route, Routes } from "react-router-dom"
import Admissin from "./Admissin"
import Programma from "./Programma"
import AcademicLife from "./AcademicLife"
import About from "./About"
import Home from "./Home"
import Faq from "./Faq"
import Contact from "./Contact"
import Social from "./Social"

function Main() {
  return (
    <>
         <main className='main'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/admission' element={<Admissin />} />
                <Route path='/program' element={<Programma />} />
                <Route path='/academiclife' element={<AcademicLife />} />
                <Route path='/about' element={<About />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/social' element={<Social />} />
               
            </Routes>
        </main>
    </>
  )
}

export default Main