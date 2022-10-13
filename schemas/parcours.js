export default{
    name:'parcours',
    type:'document',
    title:'Parcours',
    fields:[
        {
            name:"name",
            type:"string",
            title:"Nom du parcours"
        },
        {
            name:"speciality",
            type:"string",
            title:"Spécialité du parcours"
        },
        {
            name:"year",
            type:"string",
            title:"Date du parcours"
        },
        {
            name:"location",
            type:"string",
            title:"Lieu du parcours"
        },
        {
            name:"status",
            type:"boolean",
            title:"Obtention du diplôme"
        }
    ]
}