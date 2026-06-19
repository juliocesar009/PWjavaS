//Mensagem no console
//console.log("Seja bem vindo")

//Comentarios de 1 linha = //
//Comentarios multi linhas = /* */

/*
variaveis
var - variavel global legada-antiga 
let -variaveis que mudam de valor
const - variaveis que nao mudam de valor
typeof - retorna qual o tipo de variavel
*/

/*
let num1 = 10
let num2 = 10.5
let nome = "Julio"
let verdade = true
let numero
let numero2 = null 
console.log( typeof num1)
console.log(typeof num2)
console.log(typeof nome)
console.log(typeof verdade)
console.log(typeof nome)
console.log(typeof numero)
console.log(typeof numero2)
*/

//Conversão de tipos de dados
/*
let num1 = Number(prompt("Escreva o primeiro numero"))
let num2 = Number(prompt("Escreva o segundo numero"))
let soma = num1 + num2
console.log(soma)

let texto = String(soma)
console.log(typeof texto)
*/

//operadores matemáticos
/*
    + soma
    - subtraçao
    * multiplicaçao
    / divisão
    % MOD ou resto da divisão
    ** potenciaçao
*/ 

/*
    let num1 = 10
    let num2 = 5

    let soma = num1 + num2
    let sub = num1 - num2
    let mult = num1 * num2
    let div = num1 / num2
    let porcentagem = num1*(num2/100)
    let exp = num1 ** num2
    let rest = num1 % num2

    console.log(soma, sub, mult, div, porcentagem, exp, rest)

    operadores relacionais

    == igual
    === extritamente igual
    != diferente
    > maior
    < menor
    >= maior igual
    <= menor igual


    exemplos

*/
    





//operadores lógicos

/*
    && ou  e
    || ou 
    ! não

    exemplos

    let logado = true
    let admin = false

    console.log(logado && admin)
*/

//if/else
/*
    
    let idade = 17
    if(idade >= 18){
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }

*/

    let dia = 2
    switch(dia){
        case 1:
        console.log("Domingo")
        break
            case 2: console.log("Segunda")
            break
        default: console.log("Entrada invalida")


    }
    
//Laços  de repetiçao
/*

podem ser
for(para) = quanto vc sabe quantas vezes

while(enquanto) só sair do loop quando atender uma condicao

do while = entre no loop pelo menos 1 vezes

*/


/*
for(let i = 0; i <=5; i++){
    console.log("O valor de i é " + i)
}

let condicao = 0 

while(condicao <=5){
    console.log("Contagem progressiva: " + condicao)
    condicao++
}

let numero = 5
do{
    console.log(numero)
    numero--
}while(numero >= -1)

*/

/*
//Funções
    funçao ela pode retornar um valor ou não 
    pode ser função direta
    ou função com retorno
    *sempre uma função tem que abrir ou fechar parenteses
    para a função ser executada sempre voçe deve chamar ela
*/

//Função simples 
/*

function saudacao(){
    console.log("Seja bem vindo a minha aula de js")
}

saudacao()

//Função com retorno (ARGUMENTOS / PARAMENTOS)


function somar(num1, num2){
    let soma= num1 + num2 
    return console.log(soma)
}

somar(20,395)

function rest(num1, num2){
    let rest= num1 % num2 
    return console.log(rest)
}

rest(10,4)
*/

//arrays
/*

arrays sao listas ou estrutura que armazena diversos
valores em uma variavel organizadas por posição de indices

//exemplo 
 let frutas = ["maça", "banana", "laranja", "pera"]

 frutas[0] = maça
 frutas[1] = banana
 frutas[2] = laranja
*/

console.log(frutas)
console.log(frutas.length)

//principais metodos

//metodo de função
/*

push() adiciona
pop() remove o  final
shift() remove o inicio
unshift() adiciona no inicio
length - (faz a contagem do tamanho do array) 
*/

//exemplos
/*

frutas.push('morango')
console.log(frutas)

*/

//objetos
/*

objetos armazenam dados organizados
objetos tem propriedade e valor

*/

//exemplos
/*

let aluno = {
    nome: "julio",
    funcao: "aluno",
    turno: "noturno"
}

console.log(typeof aluno)
console.log(aluno)
*/
