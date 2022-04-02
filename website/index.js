function setup (){

    loadJSON("all",gotData);
    console.log("runing");

    var button=select("#submit");
    button.mousePressed(submitWord);
}

function submitWord(){
    var word =select("#word").value();
    var otherword=select("#otherword").value();
    var score= select("#score").value();
    console.log(word,otherword,score);

  loadJSON("add/"+word+"/"+otherword+"/"+score,finished);
    function finished (data) {
        console.log(data);
    } 
}

function gotData(data){
    console.log(data);
    var keys=Object.keys(data);
    console.log(keys);
}


function accesoUsuario(identificador){
    var x=loadJSON("all");
    return x;
}

 const pokemon =async(i)=> {
     const respuestasFotos=await fetch(`https://pokeapi.co/api/v2/pokemon/`+i)
     const fotosMarte =await respuestasFotos.json();
     const abilities=fotosMarte.abilities;
     return abilities;
 }
pokemon("ditto");



class entrenador {
    constructor(id,nombres,region,pokemons){
        this.id=id;
        this.nombres=nombres;
        this.region=region;
        this.pokemons=pokemons;
    }

    get getId(){
        return this.id;
    }

    set setId(id)
    {
        this.id=id;
    }

    get getNombres(){
        return this.nombres;
    }

    set setNombres(nombres)
    {
        this.nombres=nombres;
    }

    get getRegion(){
        return this.region;
    }

    set setRegion(region)
    {
        this.region=region;
    }

    get getPokemons(){
        return this.pokemons;
    }

    set setPokemons(pokemons)
    {
        this.pokemons=pokemons;
    }
}

let usuarioActivo;
const formLog  = document.getElementById("formulario_dni");
let tipo = document.getElementById("tipo_usuario");
let nombre = document.getElementById("Usuario");
let formula=document.getElementById("formulas")
let lienzo=document.getElementById("Lienzos");
let bandera=0;
var Contras;
var formContr;
formLog.addEventListener("submit", e => {
    e.preventDefault();
    if(tipo.value==="1")
    {
        for(let i=0;i<cuentas.length;i++)
        {
            if(nombre.value==cuentas[i].getDni)
            {
                usuarioActivo=cuentas[i];
                bandera=1;
                formula.innerHTML=
                        `<div class="mensaje">
                        <p>¡Hola `+ usuarioActivo.getNombre +`!</p\>
                   </div>` + 
                   ` <div class="consultas">
                
                <form id= "formulario_contraseña" class="row g-3">
                <div class="col-12 formuario1" >
                <label   class="form-label">Ingresa tu contraseña</label>
                <input type="password" class="form-control" id="Contraseña" placeholder="">
                <div id="validacion" class="invalid-feedback">
                  Ingrese un usuario válido .
                </div>
              </div>
              
            <div class="col-12" style="padding-top: 50px;">
              <button type="submit" id="boton1" class="btn btn-primary">Continuar</button>
            </div>
          </form>`
              Contras=document.getElementById("Contraseña")
              formContr  = document.getElementById("formulario_contraseña");
                alert("Bienvenido "+cuentas[i].getNombre);
                bandera=1;
                accesoFinal(bandera,formContr);
                break;
            }
            else
            {
                bandera=0;
            }

        }
        if(bandera===0)
        {
            alert("Usuario invalido");
        }
    }
    else{
        for(let i=0;i<cuentas.length;i++)
        {
            if(nombre.value==cuentas[i].getNombre)
            {
                usuarioActivo=cuentas[i];
                bandera=1;
                formula.innerHTML=
        
                `<div class="mensaje">
                <p>¡Hola `+ usuarioActivo.getNombre +`!</p\>
                    </div>` + 
                    ` <div class="consultas">
                    
                    <form id= "formulario_contraseña" class="row g-3">
                    <div class="col-12 formuario1" >
                    <label   class="form-label">Ingresa tu contraseña</label>
                    <input type="password" class="form-control" id="Contraseña" placeholder="">
                    <div id="validacion" class="invalid-feedback">
                    Ingrese un usuario válido .
                    </div>
                </div>
                
                <div class="col-12" style="padding-top: 50px;">
                <button type="submit" id="boton1" class="btn btn-primary">Continuar</button>
                </div>
            </form>`

                alert("Bienvenido "+cuentas[i].getNombre);
                Contras=document.getElementById("Contraseña")
                formContr  = document.getElementById("formulario_contraseña");
                alert("Bienvenido "+cuentas[i].getNombre);
                bandera =1;

                break;
            }
            else
            {
                bandera=0;
            }
        }
        if(bandera===0)
        {
            alert("Usuario invalido");
        }
    }
  })

 accesoFinal(bandera,formContr);
function accesoFinal(bander,formC){
    var button3;
    var button4;
 if(bander==1)
  {
  formContr.addEventListener("submit", a => {
    a.preventDefault();
            if(Contras.value==usuarioActivo.getContraseña)
            {
              
              bander=2;
              lienzo.style.flexDirection="row";
              lienzo.style.paddingTop="116px";
              lienzo.innerHTML=
              
              `<div class="barraLateral">

              <div class="producto"><p class="texto1">Mis saldos</p></div>
              <div class="monto">
              <p class="mostrarMonto"> $ ` +usuarioActivo.getSaldo.toFixed(2) + `</p></div>
              </div>
              
              <div class="pantallaOperaciones">

              <div class="lista_izquierda">
              <div class="Quiero"><p class="Quiero_Escrito">Quiero</p> </div>
              <div class="recuadro">
               <div class="retirar"><button  id="boton3" class="btn btn-primary">Retirar</button></div>
            <div class="ingresar"><button id="boton4" class="btn btn-primary">Ingresar</button></div>    

              </div>
              </div>

            <div class="lista_derecha">
              <div class="Quiero2"><p class="Quiero_Escrito2">Mi Lista</p> </div>
              <div class="recuadro2"></div>
            </div>

              </div>`

              alert("Bienvenido al Sistema");
              if (bander==2)
              {
                button3=document.getElementById("boton3");
                button3.addEventListener("submit",usuarioActivo.ingresarMonto);
                button4=document.getElementById("boton4");
                button4.addEventListener("submit",usuarioActivo.retirarMonto);
              }

            }
            else
            {
                alert("Contraseña Incorrecta");
            }

  })

  }

}





