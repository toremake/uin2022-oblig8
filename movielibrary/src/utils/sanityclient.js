import sanityClient from '@sanity/client'

const options = {
    projectId: "3zb9llz9",
    dataset: "production"
}

const client = sanityClient({
    ...options,
    apiVersion: '2021-08-31',
    useCdn: true
});

export default client;