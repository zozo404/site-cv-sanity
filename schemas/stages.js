export default {
    name:"stages",
    type:"document",
    title:"Stages", 
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
            name:"link",
            type:"string",
            title:"Lien Stage",
        },
        {
            name:"year",
            type:"string",
            title:"Date du stage"
        },
        {
            name:"location",
            type:"string",
            title:"Lieu du stage"
        },
        {
            name:"theme",
            type:"string",
            title:"Theme du stage"
        }
    ],
    
}