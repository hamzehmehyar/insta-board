import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./footer";


export default function Layout(){


    return (


        <>

        
        
            <Navigation />

            <main>

                <Outlet />

            </main>

            <Footer />
        
        </>


    );


}

