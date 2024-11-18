let respostaPilha =  document.getElementById('respostaPilha')
let pilha = []

function criarPilha(){
    respostaPilha.innerHTML = `A pilha completa é [${pilha}] <br>`
    let contador = 0
    for(i=0; i<5; i++){
        contador++
        pilha.push(contador)
        console.log(pilha)
        respostaPilha.innerHTML += `A pilha completa é [${pilha}] <br>`
    }
}
function removerPilha(){
    for(let i=0; i<5; i++){
        pilha.pop()
        console.log(pilha)
        respostaPilha.innerHTML += `A pilha final é [${pilha}] <br>`
    }
}

let respostaFila =  document.getElementById('respostaFila')
let fila = []
let mat = [ [0,0,0],
            [0,0,0],
            [0,0,0]]

function criarFila(){
    respostaFila.innerHTML = `A fila é completa [${fila}] <br>`
    let contador = 0
    for(let i = 0; i < 9; i++){
        contador++
        fila.push(contador)
        console.log(fila)
        respostaFila.innerHTML += `A fila é completa [${fila}] <br>`
    }
}
function removerFila(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            mat[i][j] = fila.shift()
            console.log(fila)
            console.log(mat)
            respostaFila.innerHTML += `A fila é final [${fila}] <br>`
        }
    }
}


let respostaMats = document.getElementById('respostaMats')
let criarMat1 = document.getElementById('criarMat1')
let criarMat2 = document.getElementById('criarMat2')
let somarMats = document.getElementById('somarMats')

let matriz1 = [[0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0]]

let matriz2 = [[0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0]]

let matsSomada = [[0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0]]

function gerarAle(max, min){
let alea = Math.floor(Math.random() * (max - min + 1) ) + min
return alea
            }

criarMat1.addEventListener('click', ()=>{
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(i == j){
                matriz1[i][j] = 20
            }else if(j === 4 - i){
                matriz1[i][j] = 15
            }else{
                matriz1[i][j] = gerarAle(10, 1)
            }
        }
    }
    respostaMats.innerHTML = "1ª Matriz gerada: <br>["
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            respostaMats.innerHTML += matriz1[i][j]
            if(j != 4){
                respostaMats.innerHTML += ", "
            }
            if(j==4 && i==4){
                respostaMats.innerHTML += " ]"
            }else if(j==4){
                respostaMats.innerHTML += "<br>"
            }
        }
    }
    respostaMats.innerHTML += "<br>" + "<br>"
})
criarMat2.addEventListener('click', ()=>{
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(i %2 == 0){
                matriz2[i][j] = 1
            }else{
                matriz2[i][j] = 2
            }
        }
    }
    respostaMats.innerHTML += "2ª Matriz gerada: <br>["
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            respostaMats.innerHTML += matriz1[i][j]
            if(j != 4){
                respostaMats.innerHTML += ", "
            }
            if(j==4 && i==4){
                respostaMats.innerHTML += " ]"
            }else if(j==4){
                respostaMats.innerHTML += "<br>"
            }
        }
    }
    respostaMats.innerHTML += "<br>" + "<br>"
})

somarMats.addEventListener('click', ()=>{
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            matsSomada[i][j] = matriz1[i][j] + matriz2[i][j] 
        }
    }
    respostaMats.innerHTML += "A soma das matrizes é: <br> ["
    for(i=0; i<5; i++){
        for(j=0; j<5; j++){
            respostaMats.innerHTML += matriz1[i][j]
            if(j != 4){
                respostaMats.innerHTML += ", "
            }
            if(j==4 && i==4){
                respostaMats.innerHTML += " ]"
            }else if(j==4){
                respostaMats.innerHTML += "<br>"
            }
        }
    }
})