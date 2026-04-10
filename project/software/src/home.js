import Header from "./common/header";
import Footer from "./common/footer";
import Image from "./initial.png";
import CoursesShow from "./CoursesShow";
function Home()
{
    return(
       <div id="ab">
         <Header/>
         <div id="descp">
          <div>
            <h2>Learn. Build. Succeed.</h2>
            <p>Software Schools is a modern web-based training platform designed to help learners build strong software and IT skills. It provides structured courses that are easy to understand and practical to apply.</p>
            <p>Our application offers guided learning, hands-on practice, and expert-designed content to support students at every level. Software Schools helps users grow their knowledge, improve career readiness, and stay updated with current technologies.</p>
          </div>
          <img id="im" src={Image}/>
         </div>
         <CoursesShow/>
         <Footer/>
       </div>
    )
}
export default Home;