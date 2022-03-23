import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {getMovies} from '../utils/services/movieService'


export default function Movies() {
    const [movieList, setMovieList] = useState([])

    const getAllMovies = async () => {
        const allMovies = await getMovies();
        setMovieList(allMovies);
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    return(
        <>
        <h1>Movie Library</h1>
        <ul>
            {/* List movies from Sanity */}
            {movieList?.map((movie) => (<li key={movie._id}><Link to={'/movies/' + movie.slug}>{movie.title}</Link></li>))}
            {/*movieList?.map((movie) => (<li key={movie.id}>{movie.title}</li>))*/}
        </ul>
        </>
    )
}