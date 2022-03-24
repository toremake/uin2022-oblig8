import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import {getMovie} from '../utils/services/movieService'
import Loaderellipsis from './Loaderellipsis';

export default function Movie({title, actor}) {
    const {slug} = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false)

    const getTheMovie = async (slug) => {
        setLoading(true);
        const theMovie = await getMovie(slug);
        setLoading(false);
        setMovie(theMovie);
    }

    useEffect(() => {
        getTheMovie(slug);
    }, [slug])
    
    return(
        loading ? <Loaderellipsis /> : 
        <article id="movie">
            <div className="moviemeta">
            <p><small><Link to="/movies">Movie Library</Link> > {movie.title}</small></p>
            <h1>{movie.title}</h1>
            <h3>Cast</h3>
            <ul className="cast">
                {movie.cast?.map((actor) => (<li key={actor.slug}><Link to={'/actors/' + actor?.slug}><img src={actor.image ? actor.image : "https://via.placeholder.com/100x100.png?text=No+image"} alt={actor.full_name} /><span>{actor.full_name}</span></Link></li>))}
            </ul>
            </div>
            <img className="poster" src={movie.poster ? movie.poster : "https://via.placeholder.com/300x500.png?text=No+poster"} alt={movie.title} />
            
            
        </article>
    )
}