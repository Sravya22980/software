import Footer from "./common/footer";
import Header from "./common/header";

function Courses()
{
  return(
    <div id="cou">
    <Header/>
    <h1 className="text-light mt-5 mb-4">    
      <span className="word" style={{animationDelay: "0s"}}>In-demand  </span>
      <span className="word" style={{animationDelay: "0.5s"}}>courses  </span>
      <span className="word" style={{animationDelay: "1s"}}>for  </span>
      <span className="word" style={{animationDelay: "1.5s"}}>quick  </span>
      <span className="word" style={{animationDelay: "2s"}}>job</span>
    </h1>
     <div id="card">
        <div className="card" id="c">
            <img src="https://d2b98ifobtd07j.cloudfront.net/n_reactjs_1.png" className="card-img-top" height="170px"/>
            <div className="card-body">
            <h4 className="card-title text-dark">React - UI Developer</h4>
            <p className="card-text">HTML, CSS, Bootstrap, TypeScript, React, Git, Website Hosting</p>
            <p><i class="bi bi-chevron-double-right"></i>3 months duration</p>
            <p><i class="bi bi-chevron-double-right"></i>Real-time concepts</p>
            <p><i class="bi bi-chevron-double-right"></i>Beginner to job-ready</p>
            <p><i class="bi bi-chevron-double-right"></i>Industry experts as tutors</p>
            <button type="button" class="btn btn-primary btn-lg btn-block">Course details</button>
            </div>
        </div>
        <div className="card" id="c">
            <img src="https://d2b98ifobtd07j.cloudfront.net/n_java.png" className="card-img-top" alt="..."height="170px"/>
            <div className="card-body">
            <h4 className="card-title text-dark">Java - Backend Developer</h4>
            <p className="card-text">Java, Springboot, Micro services, Junit, Redis, Git, REST API, Website Hosting</p>
            <p><i class="bi bi-chevron-double-right"></i>3 months duration</p>
            <p><i class="bi bi-chevron-double-right"></i>Real-time concepts</p>
            <p><i class="bi bi-chevron-double-right"></i>Beginner to job-ready</p>
            <p><i class="bi bi-chevron-double-right"></i>Industry experts as tutors</p>
            <button type="button" class="btn btn-primary btn-lg btn-block">Course details</button>
            </div>
        </div>
     </div>
    <Footer/>
  </div>
  )
}
export default Courses;