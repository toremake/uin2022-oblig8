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
            title: "Poster",
            type: "image",
            name: "poster",
            fields: [{
                title: "Image source",
                type: "string",
                name: "image_source",
                initialValue: "Vi har ikke lov til å bruke dette bildet: "
            }]
        },
        {
            title: "Actors",
            type: "array",
            name: "actors",
            of: [
                {
                    type: "reference",
                    to: [{type: "actor",
                    
                    fieleds:[
                    {
                        type:'string',
                        name:'actor',
                        title:'Test'}
                    ]}]
                }
            ]
        }
    ]
}

export default movie;