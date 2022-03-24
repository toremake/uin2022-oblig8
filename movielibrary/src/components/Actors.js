import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getActors} from '../utils/services/actorService'

export default function Actors() {
    const [actorList, setActorList] = useState([])


    const getActorData = async () =>{
        const actors = await getActors()
        setActorList(actors)
    }

    console.log(actorList)

    useEffect(()=>{
        getActorData()
    }, [])

    return(
        <>
            <h1>Actors list</h1>
            <section id="actors">
                {actorList?.map((actor) => <article key={actor?._id} className="actor"><figure><img src={actor.profile_image ? actor.profile_image : "https://via.placeholder.com/300x500.png?text=No+poster"} alt={actor?.full_name} /><h2>{actor?.full_name}</h2></figure><Link className="profile-button" to={"/actors/" + actor?.slug}>Se profil</Link></article>)}
            </section>
        </>
    )
}