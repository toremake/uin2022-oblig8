import client from "../sanityclient";

const actorFields = `
_id,
full_name,
"movies": *[_type == "movie" && references(^._id)]{title, "poster": poster.asset->url, "slug": slug.current},
"slug": slug.current,
"imageUrl": profile_image.asset -> url,
`

const actorsFields = `
_id,
full_name,
"slug": slug.current,
"profile_image": profile_image.asset -> url
`

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"] |order(full_name) {${actorsFields}}`);
  return data;
}

export const getActor = async (slug) => {
    const data = await client.fetch(`*[_type == "actor" && slug.current == $slug]{${actorFields}}`,{slug});
      return data?.[0];
}
