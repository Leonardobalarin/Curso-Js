let valores = [1, 2, 3, 4, 5]
console.log(valores);
/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}*/
// valores.indexOF(5) retorna a chave onde se encontra o vetor
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}