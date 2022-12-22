
import { NavLink } from "react-router-dom";

export default function Header() {

        return (
            <nav className="navbar main-nav navbar-default navbar-fixed-top">
                <div className="navbar-header" >
                    {/*  <!--Creating toggle bar-->*/}
                    <button type="button" className="navbar-toggle bg-header" data-toggle="collapse" data-target="#myNavbar"  >
                        {/* style="background-color:rgb(255, 255, 255);" */}
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span>
                        <a className="navbar-brand titlecolor" href="index.html" > John<span className="brand-color-text">Decena</span></a>
                    </span>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar" >
                    <ul className="nav navbar-nav navbar-right ">

                        {/* <li><a href="#about"> ABOUT </a></li> */}
                        <li>
                            <NavLink exact className="active" to="/#about">
                               About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact className="active" to="/#skills">
                            SKILLS
                            </NavLink>
                        </li>  
                        <li>
                            <NavLink exact className="active" to="/#contact">
                            CONTACT
                            </NavLink>
                        </li> 
                        <li>
                            <NavLink exact className="active" to="/store">
                            STORE
                            </NavLink>
                        </li> 
                    </ul>
                </div>
            </nav >
        );
}
