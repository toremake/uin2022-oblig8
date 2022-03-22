import { NavLink } from "react-router-dom";

export default function Navigation() {
    return(
        <nav>
            <ul>
                <li><NavLink to="/movies" activeClassName="active">Movie Library</NavLink></li>
                <li><NavLink to="/actors" activeClassName="active">Actor Library</NavLink></li>
            </ul>
        </nav>
    )
}