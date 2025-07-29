import { Link } from "react-router-dom";
import '../components/styles/navBar.css';  


export default function Navigation(){


    return(


        <header className="navbar">

            <div id="logo">Global Devs  &lt;/&gt;</div> 

            <nav>


                <ul className="navLinks">

                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "Teams">Teams</Link></li>
                    <li><Link to = "About">About</Link></li>

                </ul>


            </nav>


        </header>


    );



}