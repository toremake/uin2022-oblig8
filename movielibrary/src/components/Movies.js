import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {getMovies} from '../utils/services/movieService'
import Loaderellipsis from './Loaderellipsis'


export default function Movies() {
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)

    const getAllMovies = async () => {
        setLoading(true);
        const allMovies = await getMovies();
        setLoading(false);
        setMovieList(allMovies);
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    return(
        loading ? <Loaderellipsis /> : 
        <>
        <h1>Movie Library</h1>
        <section id="movies">
            {/* List movies from Sanity */}
            {movieList?.map((movie) => (
                <article key={movie?._id}>
                    <figure>
                    <img className="poster" src={movie.poster ? movie.poster : "https://via.placeholder.com/300x500.png?text=No+poster"} alt={movie?.title} />
                    <h2>{movie?.title}</h2>
                    </figure>
                    <Link className="profile-button" to={'/movies/' + movie?.slug}>Se mer info</Link>

                </article>
            ))}
        </section>
        </>
    )
}