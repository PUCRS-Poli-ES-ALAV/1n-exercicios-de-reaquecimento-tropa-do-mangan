

function multiplicacaoNaturais(x, y){
    if(x == 0) return 0;
    x--;
    return y + multiplicacaoNaturais(x, y);
}

function somaIncremento(x, y) {
    if(x > 0){
        x--;
        return 1 + somaIncremento(x,y);
    }if(y > 0){
        y--;
        return 1 + somaIncremento(x,y);
    }
    return 0;
}

function somaDivisao(n) {
    if(n > 0){
        let soma = 1/n;
        n--;
        return soma + somaDivisao(n);
    }
    return 1;
}

function inversaoString(texto){
    let tamanho = texto.length -1;
    let palavraInvertida = "" + auxInversaoString(texto, tamanho);
    
    return palavraInvertida
}

function auxInversaoString(texto, n){
    if(n >= 0){
        let letra = texto[n];
        n--;
        return letra + auxInversaoString(texto, n)
    }
    return "";
}

function seqGen(n){
    if(n < 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    let f1 = n-1;
    let f2 = n-2;

    return 2 * seqGen(f1) + 3 * seqGen(f2);
}

function ackermann(m, n) {
    if (m === 0) {
        return n + 1;
    } else if (n === 0) {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}

function soma(array){
    let aux = array
    if(aux.length == 0){
        return 0
    }
    return aux.pop() + soma(aux)
}


function produto(array){
    let aux = array
    if(aux.length == 0){
        return 1
    }
    return aux.pop() * produto(aux)
}

console.log("Multiplicação de Naturais: " + multiplicacaoNaturais(6,4));
console.log("Soma com Incremento: " + somaIncremento(3,2))
console.log("Soma Divisão: " + somaDivisao(2))
console.log("Inversão String: " + inversaoString("Hello"))
console.log("F(n) = " + seqGen(3));
console.log("Ackerman: " + ackermann(1,3))

let array = [1,2,3]
console.log("Soma: " + soma(array))
console.log("Produto: " + produto(array))