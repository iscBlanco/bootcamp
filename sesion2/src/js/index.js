
    let n1Val = document.querySelector('#n1')
    let n2Val = document.querySelector('#n2')
    let ej01Button = document.querySelector('#Sesion2 > button')
    let resultadoNodo = document.querySelector('#resultado')
    //console.log("dentro de division formateada")



    ej01Button.addEventListener('click',function(){
        let res = divisionFormatted(parseInt(n1Val.value),parseInt(n2Val.value))

        let element = document.createElement('p')
        let textoNodo = document.createTextNode(res)

        element.appendChild(textoNodo)
        if (resultadoNodo.childNodes.length > 0) {
            //este if es para borrar el resultado anterior
            resultadoNodo.removeChild(resultadoNodo.childNodes[0])
        }
        resultadoNodo.appendChild(element)

    })








    function divisionFormatted(n1,n2){
    let divisionResult = Math.round(n1/n2).toString()
    let divisionResultArrayString = divisionResult.split("");
    
    if(divisionResult > 999){//solo de 1000 en adelante
        for(let idx = divisionResult.length -3; idx>0;idx -= 3 ){
            divisionResultArrayString.splice(idx,0,",")
        }//for
        divisionResultArrayString

    }//if
    return divisionResultArrayString.join("")

}


