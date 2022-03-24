import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getActor } from "../utils/services/actorService";

export default function Actor(full_name) {
const {slug} = useParams();
const [actor, setActor] = useState([])

const getTheActor = async (slug) => {
    const theActor = await getActor(slug);
    setActor(theActor);
}

useEffect(() => {
    getTheActor(slug);
},[slug])
// Av en eller annen grunn så får vi actor som array. 
const name = actor[0]?.full_name;
// Liste med filmer som personen har spilt i. Får vi til å lage nettlenke som peker mot selve filmen?
const movies = actor[0]?.movies.map((movie) => 
<li>{movie}</li>
)
const profileImage = actor[0]?.imageUrl;

return (
    <>
    <h1>{name}</h1>
    <img src={profileImage} height="240" alt="profile" />
    <p>har spilt i: </p>
    <ul>
        {movies}
    </ul>
    </>
)
}