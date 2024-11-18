let resBub = document.getElementById('resBub')
let gerarBub = document.getElementById('gerarBub')
let ordenarCreBub = document.getElementById('ordenarCreBub')
let ordenarDecreBub = document.getElementById('ordenarDecreBub')

let numArrayBub = []
let contBub = 0

gerarBub.addEventListener('click', ()=>{
    let numBub = Number(document.getElementById('numBub').value)

    for(let i=0; i<numBub;i++){
        numArrayBub[i] = gerarAleatorioBub(numBub,1)
    }
    console.table(numArrayBub)

    resBub.innerHTML = `Array gerado ${numArrayBub} <br>`
})

function gerarAleatorioBub(max,min){
    let valorBub = Math.floor(Math.random() * (max - min + 1) + min)
    return valorBub
}

let auxBub = 0
ordenarCreBub.addEventListener('click', ()=>{
    for(let j = numArrayBub.length - 1; j> 0; j--){
        for(let i=0; i < numArrayBub.length -1; i++){
            if(numArrayBub[i] > numArrayBub[i+1]){
                auxBub = numArrayBub[i]
                numArrayBub[i] = numArrayBub[i+1]
                numArrayBub[i+1] = auxBub
                console.log(numArrayBub)
                contBub++
            }
        }
    }
    resBub.innerHTML += `Array crescente [${numArrayBub}] <br>` + `Contador crescente ${contBub} <br>`
})
let auxDeBub = 0
ordenarDecreBub.addEventListener('click', ()=>{
    for(let j = numArrayBub.length - 1; j> 0; j--){
        for(let i=0; i < numArrayBub.length -1; i++){
            if(numArrayBub[i] < numArrayBub[i+1]){
                auxDeBub = numArrayBub[i]
                numArrayBub[i] = numArrayBub[i+1]
                numArrayBub[i+1] = auxDeBub
                console.log(numArrayBub)
                contBub++
            }
        }
    }
    resBub.innerHTML += `Array descrecente [${numArrayBub}] <br>` + `Contador decrescente ${contBub}`
})

let resIns = document.getElementById('resIns')
let gerarIns = document.getElementById('gerarIns')
let ordenarCreIns = document.getElementById('ordenarCreIns')
let ordenarDecreIns = document.getElementById('ordenarDecreIns')

let numArrayIns = []
let contIns = 0

gerarIns.addEventListener('click', ()=>{
    let numIns = Number(document.getElementById('numIns').value)

    for(let i = 0; i < numIns; i++) {
        numArrayIns[i] = gerarAleatorioIns(numIns, 1)
    }
    console.table(numArrayIns)

    resIns.innerHTML = `Array gerado: ${numArrayIns} <br>`
})
function gerarAleatorioIns(max, min) {
    let valorIns = Math.floor(Math.random() * (max - min + 1) + min)
    return valorIns
}

ordenarCreIns.addEventListener('click', ()=>{
    let valor_atualIns = 0
    for(i=1;i<numArrayIns.length;i++){
        let j = i - 1
        valor_atualIns = numArrayIns[i]
        while(j>=0 && valor_atualIns < numArrayIns[j]){
            numArrayIns[j+1]=numArrayIns[j]
            j--
            contIns++
    }
    numArrayIns[j+1]=valor_atualIns
        }
    resIns.innerHTML += `Array crescente: [${numArrayIns}] <br>` + `Contador crescente ${contIns} <br>`
})

ordenarDecreIns.addEventListener('click', ()=> {
    let valor_atualIns = 0
    for(i=1;i<numArrayIns.length;i++){
        let j = i - 1
        valor_atualIns = numArrayIns[i]
        while(j>=0 && valor_atualIns > numArrayIns[j]){
            numArrayIns[j+1]=numArrayIns[j]
            j--
            contIns++
    }
    numArrayIns[j+1]=valor_atualIns
        }
    resIns.innerHTML += `Array decrescente: [${numArrayIns}] <br>` + `Contador decrescente ${contIns}`
})

let resSel = document.getElementById('resSel')
let gerarSel = document.getElementById('gerarSel')
let ordenarCreSel = document.getElementById('ordenarCreSel')
let ordenarDecreSel = document.getElementById('ordenarDecreSel')

let numArraySel = []
let contSel = 0

gerarSel.addEventListener('click', ()=>{
    let numSel = Number(document.getElementById('numSel').value)

    for(let i = 0; i < numSel; i++) {
        numArraySel[i] = gerarAleatorioSel(numSel, 1)
    }
    console.table(numArraySel)

    resSel.innerHTML = `Array gerado: ${numArraySel} <br>`
})
function gerarAleatorioSel(max, min) {
    let valorSel = Math.floor(Math.random() * (max - min + 1) + min)
    return valorSel
}

ordenarCreSel.addEventListener('click', ()=>{
    let valor_atualSel, menorSel= 0
    for(i = 0; i < numArraySel.length; i++){
        menorSel = i
        for(j = i + 1; j < numArraySel.length; j++){
            if(numArraySel[j] < numArraySel[menorSel]){
                menorSel = j
            }
        }
        if(i != menorSel){
            valor_atualSel = numArraySel[i]
            numArraySel[i] = numArraySel[menorSel]
            numArraySel[menorSel] = valor_atualSel
            contSel++
        }
    }
    resSel.innerHTML += `Array crescente: [${numArraySel}] <br>` + `Contador crescente ${contSel} <br>`
})
ordenarDecreSel.addEventListener('click', ()=> {
    let valor_atualSel, menorSel = 0
    for(i = 0; i < numArraySel.length; i++){
        menorSel = i
        for(j = i + 1; j < numArraySel.length; j++){
            if(numArraySel[j] > numArraySel[menorSel]){
                menorSel = j
            }
        }
        if(i != menorSel) {
            valor_atualSel = numArraySel[i]
            numArraySel[i] = numArraySel[menorSel]
            numArraySel[menorSel] = valor_atualSel
            contSel++
        }
    }
    resSel.innerHTML += `Array decrescente: [${numArraySel}] <br>` + `Contador decrescente ${contIns}`
})
let resposta = document.createElement('div')
resposta.setAttribute('id','res')
console.log(resposta)

let body = document.querySelector('body')
body.appendChild(resposta)

let res = document.getElementById('res')
let ordenar = document.getElementById('ordenar')

let numArray = [5, 3, 1, 4, 2]
let contador = 0
let aux = 0

function ordenarCre(){
    for(let j = numArray.length - 1; j > 0; j--){
        for(let i = 0; i < numArray.length -1; i++){
            if(numArray[i] > numArray[i+1]){
                aux = numArray[i]
                numArray[i] = numArray[i+1]
                numArray[i+1] = aux
                contador++
            }
        }
    }
    res.innerHTML = `Crescente: [${numArray}] <br>` + `Contador: ${contador} <br>`
}
function ordenarDecre(){
    for(let j = numArray.length - 1; j > 0; j--){
        for(let i = 0; i < numArray.length -1; i++){
            if(numArray[i] < numArray[i+1]){
                contador++
                aux = numArray[i]
                numArray[i] = numArray[i+1]
                numArray[i+1] = aux
            }
        }
    }
    res.innerHTML += `Decrescente: [${numArray}] <br>` + `Contador: ${contador}`
}
ordenar.addEventListener(`click`, ()=>{
    ordenarCre()
    ordenarDecre()
})
let respostaProva = document.getElementById('respostaProva')
let arrayq3 = [0, 0, 0, 0, 0, 0, 0]
let auxProva  = 0

function gerarAleatorioProva(max,min){
    let valorAleatorioProva = Math.floor(Math.random() * (max - min + 1) + min)
    return valorAleatorioProva
}
function gerarArrayProva(){
    for(i=0; i < arrayq3.length; i++){
        arrayq3[i]=gerarAleatorioProva(15,1)
    }
    respostaProva.innerHTML = `Array gerado ${arrayq3} <br>`
}
function ordenarProva(){
    for(j=arrayq3.length-1;j>0;j--){
        for(i=0;i<arrayq3.length-1;i++){
            if(arrayq3[i]>arrayq3[i+1]){
                auxProva = arrayq3[i]
                arrayq3[i]=arrayq3[i+1]
                arrayq3[i+1]=auxProva
            }
        }    
    }
    respostaProva.innerHTML += `Array crescente ${arrayq3}`
}
let respostaProva4 = document.getElementById('respostaProva4')
let arrayq4 = [0, 0, 0, 0, 0, 0, 0]
let auxProva4  = 0

function gerarAleatorioProva4(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function gerarArrayProva4(){
    for(i=0; i < arrayq4.length; i++){
        arrayq4[i]=gerarAleatorioProva4(15,1)
    }
    respostaProva4.innerHTML = `Array gerado ${arrayq4} <br>`
}
function ordenarProva4(){
    for(j=arrayq4.length-1;j>0;j--){
        for(i=0;i<arrayq4.length-1;i++){
            if(arrayq4[i]<arrayq4[i+1]){
                auxProva4 = arrayq4[i]
                arrayq4[i]=arrayq4[i+1]
                arrayq4[i+1]=auxProva4
            }
        }    
    }
    respostaProva4.innerHTML += `Array decrescente ${arrayq4}`
}