import { NavLink } from "react-router-dom";

export default function Navigation() {
    return(
        <nav>
            <ul>
                <li><NavLink to="/movies">Movie Library</NavLink></li>
                <li><NavLink to="/actors">Actor Library</NavLink></li>
            </ul>
        </nav>
    )
}