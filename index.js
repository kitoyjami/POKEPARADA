const tabla =document.querySelector('#tabla_selector tbody')

fetch("./usuario.json")
.then(function(resp){
    return resp.json();
}).then (function (data)
{
    data.forEach(element => {
        const row =document.createElement("tr");
        row.innerHTML+=` <td>${element.ID} </td>
         <td>${element.NAME} </td> 
         <td>${element.REGION} </td>
         <td>${element.POKEMON_GROUP} </td>`
        tabla.appendChild(row);
    });;
});

const pokemon =async(i)=> {
    const respuestasFotos=await fetch(`https://pokeapi.co/api/v2/pokemon/`+i)
    const fotosMarte =await respuestasFotos.json();
    console.log(fotosMarte);
}
pokemon("ditto");
