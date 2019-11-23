let primerNumero = document.querySelector('#primer-numero')
let segundoNumero = document.querySelector('#segundo-numero')
let sumaButton = document.querySelector('#sumButton')
let resultNode = document.querySelector('#result')
let restaButton = document.querySelector('#restButton')
let divisionButton = document.querySelector('#divButton')



//funcion anonima
sumaButton.addEventListener('click', function (a, b) {//escucha el evento click y llama a la funcion anonima
    let parsedNum1 = parseInt(primerNumero.value)
    //primerNumero con value se obtiene el valoren string y se convierte en entero
    let parsedNum2 = parseInt(segundoNumero.value)

    let result = parsedNum1 + parsedNum2
    
    let spanElement = document.createElement('span')
    let textConten = document.createTextNode(result)

    spanElement.appendChild(textConten)
    if (resultNode.childNodes.length > 3){
        //este if es para borrar el resultado anterior
        resultNode.removeChild(resultNode.childNodes[3])
    }    

    resultNode.appendChild(spanElement)
    //agrega el resultado 

    console.log(result)

   
    
    return result
})

restaButton.addEventListener('click', function (a,b){
    let parsedNum1 = parseInt(primerNumero.value)
    //primerNumero con value se obtiene el valoren string y se convierte en entero
    let parsedNum2 = parseInt(segundoNumero.value)

    let result = parsedNum1 - parsedNum2
    
    let spanElement = document.createElement('span')
    let textConten = document.createTextNode(result)

    spanElement.appendChild(textConten)
    if (resultNode.childNodes.length > 3){
        //este if es para borrar el resultado anterior
        resultNode.removeChild(resultNode.childNodes[3])
    }    

    resultNode.appendChild(spanElement)
    //agrega el resultado 

    console.log(result)

   
    
    return result
    
})

divisionButton.addEventListener('click', function (a,b){
    let parsedNum1 = parseInt(primerNumero.value)
    let parsedNum2 = parseInt(segundoNumero.value)
    let result = parsedNum1-parsedNum2
    
})


//declaracion de funcion
function sumar(a, b) {
    console.log("dentro de la funcion")
    return a + b
}





console.log(sumButton)


/*
let titulo = document.querySelector('h1')

titulo.addEventListener('click',function(){
    console.log('click sobre el titulo')
})

titulo.addEventListener('mouseover',function(){
    console.log('mouseover sobrel el titulo')
})

 */