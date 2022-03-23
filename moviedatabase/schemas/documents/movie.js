const movie = {
    title: "Movie",
    type: "document",
    name: "movie", 
    fields: [
        {
            title: "Title", 
            type: "string",
            name: "title"
        },
        {
            title: "Slug",
            type: "slug",
            name: "slug",
            options: {
                source: "title",
                maxLength: 100
            }
        },
        {
            title: "Actors",
            type: "array",
            name: "actors",
            of: [
                {
                    type: "reference",
                    to: [{type: "actor"}]
                }
            ]
        }
    ]
}

export default movie;