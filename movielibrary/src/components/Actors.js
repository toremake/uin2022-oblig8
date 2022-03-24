import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getActors } from "../utils/services/actorService";

export default function Actors() {
    const [actorList, setActorList] = useState([
        // {actorid: 1, name: "Tom Hanks"},
        // {actorid: 2, name: "Daniel Radcliffe"},
        // {actorid: 3, name: "Leonardo Di Caprio"}
    ])

    // KUN FOR TEST
    const getAllActors = async () => {
        const allActors = await getActors();
        setActorList(allActors);
    }

    useEffect(() => {
        getAllActors();
    }, [])

    // KUN FOR TEST

    return(
        <>
            <h1>Actors list</h1>
            <section id="actors">
                {/* {actorList?.map((actor) => <article className="actor"><figure><img src="https://via.placeholder.com/400x300.png?text=Image+not+found" alt={actor.name} /><h2>{actor.name}</h2></figure><Link className="profile-button" to={"/actors/" + actor.name}>Se profil</Link></article>)} */}
                {actorList?.map((actor) => <article key={actor._id} className="actor"><figure><img src={actor.profile_image ? actor.profile_image : "https://via.placeholder.com/400x300.png?text=Image+not+found"} alt={actor.full_name} /><h2>{actor.full_name}</h2></figure><Link className="profile-button" to={"/actors/" + actor.slug}>Se profil</Link></article>)} {/* Laget kun for test */}
            </section>
        </>
    )
}