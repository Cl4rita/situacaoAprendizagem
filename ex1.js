let resposta = document.getElementById('resposta')
let array = []
let aux = 0

function gerarValorAlea(max, min){
    let valor = Math.floor(Math.random() * (max - min + 1)  + min)
    return valor
}
function fazerArray(){
    for(let i = 0; i < 10; i++){
        array[i] = gerarValorAlea(20, 1)
    }
    console.log(array)
    resposta.innerHTML = `A array bagunçado é ${array} <br>`
}
function ordenar(){
    for(let j = array.length - 1; j> 0; j--){
        for(let i=0; i < array.length -1; i++){
            if(array[i] > array[i+1]){
                aux = array[i]
                array[i] = array[i+1]
                console.log(array)
                console.log('-----------------')
                array[i+1] = aux
                console.log(array)
                console.log('-----------------')
            }
        }
    }
    resposta.innerHTML += `O array crescente é ${array} <br>`
}
function ordenarDecre(){
    for(let j = array.length - 1; j> 0; j--){
        for(let i=0; i < array.length -1; i++){
            if(array[i] < array[i+1]){
                aux = array[i]
                array[i] = array[i+1]
                console.log(array)
                console.log('-----------------')
                array[i+1] = aux
                console.log(array)
                console.log('-----------------')
            }
        }
    }
    resposta.innerHTML += `O array decrescente é ${array}`
}
function chamar(){
    gerarValorAlea()
    fazerArray()
    ordenar()
    ordenarDecre()
}

let resposta2 = document.getElementById('resposta2')
let array2 = [5, 3, 1, 4, 2]
let aux2 = 0

function ordenar2(){
    resposta2.innerHTML = `O array bagunçado é ${array2} <br>`
    for(let j = array2.length - 1; j> 0; j--){
        for(let i=0; i < array2.length -1; i++){
            if(array2[i] < array2[i+1]){
                aux2 = array2[i]
                array2[i] = array2[i+1]
                console.log(array2)
                console.log('-----------------')
                array2[i+1] = aux2
                console.log(array2)
                console.log('-----------------')
            }
        }
    }
    resposta2.innerHTML += `O array decrescente é ${array2} <br>`
}
function ordenar2Cre(){
    for(let j = array2.length - 1; j> 0; j--){
        for(let i=0; i < array2.length -1; i++){
            if(array2[i] > array2[i+1]){
                aux2 = array2[i]
                array2[i] = array2[i+1]
                console.log(array2)
                console.log('-----------------')
                array2[i+1] = aux2
                console.log(array2)
                console.log('-----------------')
            }
        }
    }
    resposta2.innerHTML += `O array crescente é ${array2}`
}
function chamar2(){
    ordenar2()
    ordenar2Cre()
}