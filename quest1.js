let res2 = document.getElementById('res2')
let array3 = [5, 10, 14, 25, 30, 7, 3, 50, 9, 45]
let i = 0
let contador3 = 0

function media3(){
    res2.innerHTML = `Array = ${array3} <br>`
    let media2 = 0, soma3 = 0

    do{
        if(array3[i] % 5 === 0){
            soma3 += array3[i]
            console.log(`A soma é ${soma3}`)
            contador3++
            console.log(`O contador é ${contador3}`)
        }
        i++
    }while(i < array3.length)
    media2 = soma3 / contador3
    console.log(`A média é ${media2}`)
        res2.innerHTML += `Soma = ${soma3} <br>`
        res2.innerHTML += `Média = ${media2}`
}

let res3 = document.getElementById('res3')
let array6 = [9, 14, 21, 33, 18, 20, 27, 10, 12, 16]
let j = 0
let contador6 = 0

function media6(){
    res3.innerHTML = `Array = ${array6} <br>`
    let soma6 = 0

    while(j < array6.length){
        if(array6[j] % 3 === 0){
            soma6 += array6[j]
            console.log(`A soma é ${soma6}`)
            contador6++
        }
        j++
    }
        res3.innerHTML += `Soma  = ${soma6}`
}