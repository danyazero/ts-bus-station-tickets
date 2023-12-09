import {NavLink, Outlet, useLocation} from "react-router-dom";
import st from "./Menu.module.css"

export const Menu = () => {
    const location = useLocation()
    return <div className={st.container}>
        <div className={st.menu}>
            <NavLink className={st.link + (location.pathname == '/' ? " " + st.choosed : "")} to={'/'}>Home</NavLink>
            <NavLink className={st.link  + (location.pathname == '/profile' ? " " + st.choosed : "")} to={'/profile'}>Profile</NavLink>
        </div>
        <div className={st.outlet}>
            <Outlet/>
        </div>
    </div>
}