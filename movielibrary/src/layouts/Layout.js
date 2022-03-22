import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Layout() {
    return(
        <>
        <header>
            <h1>FAKE IMDB</h1>
            <Navigation />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <p>UIN 2022 &copy; Ann-Charlott Karlsen, Håkon Sætre Strøm, Tore Marius Akerbæk</p>
        </footer>
        </>
    )
}