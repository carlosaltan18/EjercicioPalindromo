//Carlos Altán--Ejercicio palíndromo
let frase = "Roma ni se conoce sin oro ni se conoce sin amor"
let charA, charB
let j = 0
frase = frase.toLowerCase()
frase = frase.replaceAll(" ", "")

for(let i = frase.length-1 ; i>=0; i--){
    charA = frase.charAt(i)
    charB = frase.charAt(j)

    if(charA != charB){
        console.log(frase + ' No es un palíndromo')
        break;
    }else if(charA == charB && i == 0){
        console.log(frase + ' Es un palíndromo')
    }
    j++
}



