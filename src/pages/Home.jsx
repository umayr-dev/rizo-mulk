import Banner from '../components/Banner'
import Courses from '../components/Courses'
import DiscountSection from '../components/DiscountTimer'
import StaffSwiper from '../components/StaffSwiper'

function Home() {
  return (
   <>
   <div id="banner">
   <Banner/>
   </div>
   <div id="courses">
   <Courses/>
    <StaffSwiper/>
    <DiscountSection/>
   </div>
   </>
  )
}

export default Home