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
                    {title:"Easy", value:"easy"},
                    {title:"Medium", value:"medium"},
                    {title:"Hard", value:"hard"},
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
            title: 'Stages',
            name: 'stages',
            type: 'reference',
            to: [{type: 'stages'}]
        }
    ]
}