import client from '../sanityclient'

const actorFields = `
_id,
full_name,
"slug": slug.current,
"profile_image": profile_image.asset -> url
`

export const getActors = async () =>{
    const data = await client.fetch(`*[_type == "actor"] | order(full_name){${actorFields}}`)
    return data
}