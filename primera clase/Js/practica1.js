let personas=[]
function muestraalerta (){
    
   let nuevaPersona = {
      id:personas.length+1,
      nombre:'alberto',
      edad:32,
      salud:'Buen estado',
    }
    personas.push(nuevaPersona)
    console.log(personas)

    let totalEdades = personas.reduce((accum,persona,i)=>{
      accum += persona.edad
      return accum
    },0)
    console.log(totalEdades)
  }
  document.getElementById("button").addEventListener("click",muestraalerta);
