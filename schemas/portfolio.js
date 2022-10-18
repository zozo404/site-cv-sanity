export default {
    name:"portfolio",
    type:"document",
    title:"Portfolio",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Name"
        },
        {
            name:"image",
            type:"image",
            title:"Image",
            fields:[
                {
                    name:"alt",
                    type:"string",
                    title:"Alternative Text"
                }
            ]
        },
        {
            name:"slug",
            type:"slug",
            title:"slug",
            options:{
                source:"name"
            }
        },
        {
            name:"difficulty",
            title:"Difficulty",
            type:'string',
            options:{
                list:[
                    {title:"Simple", value:"Simple"},
                    {title:"Moyen", value:"Moyen"},
                    {title:"Dur", value:"Dur"},
                ],
            layout:'dropdown'
            }
        },
        {
            title: 'Description', 
            name: 'text',
            type: 'text', 
        },
        {
            name:"link",
            type:"string",
            title:"Lien Projet"
        }
    ]
}