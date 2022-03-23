import client from "../sanityclient";

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]`);
}