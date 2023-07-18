//Toda função tem uma chamada, parâmetro, ação e retorno. (obs. Nem toda função tem esses componentes)
//DOIS CONCEITOS:
//Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.
//Uma função pode receber parâmetros e retornar um resultado.

/* function ação(param)<-parâmetro {
    return res<-retorno
    ->ação<-
} 
chamada->ação(5)*/

            //parâmetro formal
function parimpar(n) {
    if (n%2==0) { //ação
        return 'Par'
    } else {
        return 'Ímpar' //retorno
    }
}
                   //parâmetro real
/*let res = parimpar(11)
         //chamada
console.log(res)*/

console.log(parimpar(224))