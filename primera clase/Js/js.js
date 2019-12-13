function muestraalerta (){
    let sillas = [{
      id:1,
      color: 'azul',
      patas: 4,
      estado: 'Buen estado',
      disponible: true
    },
    {
      id:2,
      color: 'azul',
      patas: 4,
      estado: 'Buen estado',
      disponible: true
    },
    {
      id:3,
      color: 'azul',
      patas: 3,
      estado: 'Buen estado',
      disponible: true
    }
  ]
    //for (element in silla){
      //console.log(element, '=====>', silla[element])
    //}
    //alert('hola')


   let nuevaSilla = {
      id:sillas.length+1,
      color:'azul',
      patas:7,
      estado:'Buen estado',
      disponible:true
    }
    sillas.push(nuevaSilla)
    console.log(sillas)

    let totalPatas = sillas.reduce((accum,silla,i)=>{
      accum += silla.patas
      return accum
    },0)
    console.log(totalPatas)
  }
  document.getElementById("button").addEventListener("click",muestraalerta);
