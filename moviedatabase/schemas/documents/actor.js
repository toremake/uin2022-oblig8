const actor = {
    title: "Actor",
    type: "document",
    name: "actor",
    fields: [
        {
            title: "Full name",
            type: "string",
            name: "full_name",
        },
        {
            title: "Slug",
            type: "slug",
            name: "slug",
            options: {
                source: "full_name",
                maxLength: 100
            }
        },
        {
            title: "Profile image",
            type: "image",
            name: "profile_image",
            fields: [{
                title: "Image source",
                type: "string",
                name: "image_source",
                initialValue: "Vi har ikke lov til å bruke dette bildet: "
            }]
        }
    ]
}

export default actor;