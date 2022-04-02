const pokemon =async(i)=> {
    const respuestasFotos=await fetch(`https://pokeapi.co/api/v2/pokemon/`+1);
     const pokemonJson =await respuestasFotos.json();
     const abilities=pokemonJson.abilities;
     console.log(abilities);
}


console.log("server is starting");
var fs =require("fs");

var data=fs.readFileSync("usuario.json");
var words =JSON.parse(data);

console.log(words);


var express =require("express");
const { response } = require("express");
const { finished } = require("stream");

var app =express();

var server =app.listen(3000,listening);

function listening(){
    console.log("listening...");

}
app.use(express.static("website"));
app.get("/add/:word/:otherword/:score/:region/:pokemon1/:pokemon2",addWord)
app.get('/all',sendAll);



function addWord(request,response){
    var data=request.params;
    var word= data.word;
    words[word]={
        id: data.otherword,
        nombre: data.score,
        region:data.region,
        pokemons: [data.pokemon1, data.pokemon2]
    };
    var datosProcesados=JSON.stringify(words,null,2);

    fs.writeFile("usuario.json",datosProcesados,finished);
    
    function finished(err)
    {
        console.log("all set.");
    }

    var reply={
        msg: "Thank you for your word"
    }

    response.send(reply);
}

function sendAll(request, response)
{
    response.send(words);
}
