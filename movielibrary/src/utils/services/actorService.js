import client from "../sanityclient";

const actorFields = `
_id,
full_name,
movies,
"slug": slug.current,
imageUrl,
`

const actorsFields = `
_id,
full_name,
"slug": slug.current,
"profile_image": profile_image.asset -> url
`

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"] |order(full_name) {${actorsFields}}`);
  return data
}

export const getActor = async (slug) => {
    const data = await client.fetch(`*[_type == "actor" && slug.current == $slug]{
        _id, full_name, profile_image,
        "movies": *[_type == "movie" && references(^._id)].title, 
        "imageUrl": profile_image.asset->url,
        
      }{${actorFields}}`, {slug});
      return data;
}