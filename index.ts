// Execução do domando npx -ts-node 'arquivo' devido a instalação do pacote de typescript

import { log } from "console"

/*const idade = 88

if (idade < 18) {
    console.log('Menor de idade')
} 
else if (idade <= 65) {
    console.log('É Adulto!')
} 
else {
    console.log('Idoso')
}*/

/*import { log } from "console";


///  EXERCICIO 1 ////
const media = 5;

if (media < 4) {
    console.log('Reprovado')
}
else if (media < 7 ) {
    console.log('Recuperação')
}
else {
    console.log('Aprovado')
}*/

//Trusthiness
// Truthy = Tudo que não é falsy
// Falsy = false, 0, '', null, undefined, NaN


/*
   const numero = 5;
   const parOuImpar = numero % 2;
   
   if ( parOuImpar === 0) {
        console.log('É Par!');
        
   } else {
    console.log('É Impar');
    
   }

//ternario: É para algo simples, quando você tem ali um retorno...
parOuImpar === 0 ? console.log('É Par!') : console.log('É Impar');
const resultado = parOuImpar === 0 ? 'Par' : 'Impar'
*/
// ? = if
// : = else

/*const saldo = 1

if (saldo <= 1) {
    console.log('Real')   
} else {
    console.log('Reais') 
} */

//ternario
/*const saldo: number = 200
const unidade = saldo === 1 ? 'Real' : 'Reais'
console.log(`Seu saldo é de R$ ${saldo} ${unidade}`)
*/

//OPERADOR DE NEGAÇÃO

/*const ativo: boolean =  true

if(!ativo) {
    console.log('Verdadeiro');
    
}else {
    console.log('False');
    
}*/

//Operador Logioco And - && 
//Testa se todas as condições são verdadeiras...

const temIngresso: boolean = true
const Idade: number = 18
const censura: number = 16 //Idade minima permitida para entrar
const estaComOSPais: boolean = false

if (temIngresso && (Idade >= censura || estaComOSPais)) {
        console.log('Pode Entrar');
    } else {
        console.log('Barrado');  
    }


//Operador logico OR - ||
//Testa se pelo menos uma condição for verdadeira



