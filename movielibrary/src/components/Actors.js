import { useState } from "react";
import { Link } from "react-router-dom";

export default function Actors() {
    const [actorList, setActorList] = useState([
        {actorid: 1, name: "Tom Hanks"},
        {actorid: 2, name: "Daniel Radcliffe"},
        {actorid: 3, name: "Leonardo Di Caprio"}
    ])

    return(
        <>
            <h1>Actors list</h1>
            <section id="actors">
                {actorList?.map((actor) => <article className="actor"><figure><img src="https://via.placeholder.com/400x300.png?text=Image+not+found" alt={actor.name} /><h2>{actor.name}</h2></figure><Link className="profile-button" to={"/actors/" + actor.name}>Se profil</Link></article>)}
            </section>
        </>
    )
}