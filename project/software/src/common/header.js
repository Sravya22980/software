
function Header()
{
  var id=localStorage.getItem("userid")
  function de()
  {
    localStorage.removeItem("userid")
    window.location.reload()
  }
    return(       
         <div>
           {
            (id!=null)&&<div id="a">
            <nav className="navbar navbar-expand-lg navbar-light">
            <img src="https://d2b98ifobtd07j.cloudfront.net/logo2.png" width="120" height="43" alt=""/>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item  pl-3">
        <a className="nav-link text-light font-weight-bold" href="/">Home</a>
      </li>
      <li className="nav-item pl-3">
        <a className="nav-link text-light font-weight-bold" href="/Courses">Courses</a>
      </li>
      <li className="nav-item pl-3">
        <a className="nav-link text-light font-weight-bold" href="">My Courses</a>
      </li>
      <li className="nav-item pl-3">
        <a className="nav-link text-light font-weight-bold" onClick={de}>Logout</a>
      </li>
      <li className="nav-item pl-3">
        <a className="nav-link text-light font-weight-bold">wattsapp calls</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
          }
          {
            (id==null)&&<div id="a">
            <nav className="navbar navbar-expand-lg navbar-light">
            <img src="https://d2b98ifobtd07j.cloudfront.net/logo2.png" width="120" height="43" alt=""/>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item  pl-4">
        <a className="nav-link text-light font-weight-bold" href="/">Home</a>
      </li>
      <li className="nav-item pl-4">
        <a className="nav-link text-light font-weight-bold" href="/Courses">Courses</a>
      </li> 
      <li className="nav-item pl-4">
        <a className="nav-link text-light font-weight-bold" href="/login">Login</a>
      </li>
      <li className="nav-item pl-4">
        <a className="nav-link text-light font-weight-bold" href="/sign">Signup</a>
      </li>
      <li className="nav-item pl-4">
        <a className="nav-link text-light font-weight-bold">wattsapp calls</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
          }
          {

          }
         </div>
    )
}
export default Header;