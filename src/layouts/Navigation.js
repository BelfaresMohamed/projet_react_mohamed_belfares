import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons"




export const Navigation = () => {
    return (
        <>
            
  <header id="header-home" className="d-flex flex-column">
    <nav className="d-flex flex-row align-content-center bg-light justify-content-center h-100  w-100">
    
      <div className=" mt-2 profile h-100">
        <h1 className="text-light bg-transparent">
          <NavLink to={"/"} className="moses">Fashes<span className=" point text-danger">.</span></NavLink>
        </h1>
      </div>

      <div className=" w-100 mt-3">
        <ul className=" page d-flex justify-content-center h-100 gap-2 ">
        <li>
              <NavLink to={"/"} className="nav-link active">
               <span>Home</span></NavLink>
               
        </li>

        <li>
               <NavLink to={"/product"} className="nav-link ">
                <span>Product</span></NavLink>
        </li>

        <li>
               <NavLink to={"/about"} className="nav-link">
               <span>About</span></NavLink>
        </li>

        <li>
               <NavLink to={"/contact"} className="nav-link ">
                <span>Contact</span></NavLink>
        </li>

        </ul>
      </div>

      <div className="social-links d-flex mt-3 ">
        
        <Link to={"#"} className="ico twitter sosio">
        <FontAwesomeIcon icon={faHeart} /></Link>
           <span className="bord"></span>
        <Link to={"#"} className=" ico facebook sosio">
        <FontAwesomeIcon icon={faBagShopping} /></Link>

      
    </div>
      
    </nav>
    

  </header>

        </>
    )
}