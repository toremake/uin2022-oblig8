import {useState} from 'react'
import {Link} from 'react-router-dom'


export default function Movies() {
    const [movieList, setMovieList] = useState([
        {id: 1, title: "The Green Mile", slug: "the-green-mile"},
        {id: 2, title: "Harry Potter and the Philosophers stone", slug: "harry-potter"},
        {id: 3, title: "Inception", slug: "inception"}
    ])

    return(
        <>
        <h1>Movie Library</h1>
        <ul>
            {/* List movies from Sanity */}
            {movieList?.map((movie) => (<li key={movie.id}><Link to={'/movies/' + movie.slug}>{movie.title}</Link></li>))}
            {/*movieList?.map((movie) => (<li key={movie.id}>{movie.title}</li>))*/}
        </ul>
        </>
    )
}