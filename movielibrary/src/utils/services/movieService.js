import client from "../sanityclient";

const moviesFields = `
    _id,
    title,
    "slug": slug.current
`

const movieFields = `
    _id,
    title,
    "slug": slug.current,
    "cast": actors[].actors->full_name
`

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"] |order(title){${moviesFields}}`);
    return data;
}

export const getMovie = async (slug) => {
    const data = await client.fetch(`*[_type == "movie" && slug.current == $slug]{${movieFields}}`,{slug});
    return data?.[0];
}

// export const getMovie = async (slug) => {
//     const data = await client.fetch(`*[_type == "movie" && slug.current == $slug]{title, "slug":slug.current, "cast": actors[]._ref}`,{slug});
//     return data;
// }
