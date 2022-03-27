import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getActor } from "../utils/services/actorService";
import Loaderellipsis from './Loaderellipsis';


export default function Actor(full_name) {
const {slug} = useParams();
const [actor, setActor] = useState([])
const [loading, setLoading] = useState(false)


const getTheActor = async (slug) => {
    setLoading(true);
    const theActor = await getActor(slug);
    setLoading(false);
    setActor(theActor);
}

useEffect(() => {
    getTheActor(slug);
},[slug])

const name = actor?.full_name;



return(
    loading ? <Loaderellipsis /> : 
    <article id="actor">
        <div className="moviemeta">
        <p><small><Link to="/actors">Actor Library</Link> > {name}</small></p>
        <h1>{name}</h1>
        <h3>Cast</h3>
        <ul className="cast">
            {actor.movies?.map((movie) => (<li key={movie.slug}><Link to={'/movies/' + movie?.slug}><img src={movie.poster ? movie.poster : "https://via.placeholder.com/100x100.png?text=No+image"} alt={movie.title} /><span>{movie.title}</span></Link></li>))}
        </ul>
        </div>
        <img className="poster" src={actor.imageUrl ? actor.imageUrl : "https://via.placeholder.com/300x500.png?text=No+poster"} alt={actor.full_name} />
        
        
    </article>
)
}