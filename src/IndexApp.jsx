import { Outlet } from "react-router-dom";
import "./IndexApp.css"
import "./NavBar/NavBar"
import NavBar from "./NavBar/NavBar";

//funcion flechitas
const IndexApp = () => {

    return(
        <>

        <header>
            <NavBar/>
        </header>
        <main>
            <Outlet/>

        </main>
       </>
    );

    

}
export default IndexApp;