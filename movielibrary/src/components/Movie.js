import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import {getMovie} from '../utils/services/movieService'

export default function Movie({title, actor}) {
    const {slug} = useParams();
    const [movie, setMovie] = useState([]);

    const getTheMovie = async (slug) => {
        const theMovie = await getMovie(slug);
        setMovie(theMovie);
    }

    useEffect(() => {
        getTheMovie(slug);
    }, [slug])


    console.log(movie.cast);
    console.log(movie)

    
    return(
    <>
        <h1>{movie.title}</h1>
        <ul>
            {/*movie.actors?.map((actor) => <li>{actor.full_name}</li>)*/}
        </ul>
    </>)
}