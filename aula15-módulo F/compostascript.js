let num = [5, 8, 4, 9, 2]
//num[3] = 6 : cria um elemento automático
//num.push(7) : coloca o elemento na última posição, independente (forma interna)
//num.length : saber o comprimento, quantos elementos
//num.sort() : capturar todos os elementos e colocar em ordem crescente

    num.push(3)
    num.sort()

    /*ou 
    num.sort()
    num.push(3)
    Dessa maneira primeiro se coloca em ordem e depois adiciona o elemento*/

    console.log(num)
    console.log(`Nosso vetor é ${num}`)
    console.log(`O vetor tem ${num.length} posições`)
    console.log(`O elemento na primeira posição é ${num[0]}`)

    let pos = num.indexOf(7)
    if (pos == -1) {
        console.log(`O valor não foi encontrado`)
    } else {
        console.log(`O valor está na posição ${pos}`)
    }