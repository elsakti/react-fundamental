import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";


function RootLayout() {
    return (
        <>
            <NavLink className={({isActive, isPending}) => 
                isActive ? 'active' : isPending ? 'pending' : ''
            } to="/"> Home </NavLink> 
            | <NavLink to="/about" > About </NavLink> 
            | <NavLink to="/blogs"> Blogs </NavLink>
            <p/>
            <Outlet/>
        </>
    )
}

export default RootLayout;