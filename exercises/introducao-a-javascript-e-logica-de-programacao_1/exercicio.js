// let a = 2;
// let b = 5;

// console.log (a + b);
// console.log (a - b);
// console.log (a * b);
// console.log (a / b);
// console.log (a % b);

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// let c = 7;

// if (a > b && a > c) {
//     console.log (a);
// } else if (b > a && b > c) { 
//     console.log (b);
// } else {
//     console.log (c);
// }

// * Problema resolvido graças ao codigo de exemplo da Fernanda Porto - Turma 10 - Tribo B-

// let number = 0;

// switch (true) {
//     case (number>0):
//     console.log ("positive");
//     break;

//     case (number<0):
//     console.log ("negative");
//     break;

//     case (number==0):
//     console.log ("zero");
//     break;

//     default:
//     console.log ("Erro");
// }

// let anguloA = 90;
// let anguloB = 45;
// let anguloC = 45;

// if (anguloA + anguloB + anguloC == 180) {
//     console.log( "true")
// } else {
//     console.log ("false")
// }

let pieceXadrez = "rei";

switch (pieceXadrez.toLowerCase()){
    case "peão" :
        console.log ("Ande uma casa para frente e capture apenas nas diagonais.");
        break;
    case "torre" :
        console.log ("Ande e/ou capture para frente ou para o lado, quantas casas quiser.");
        break;
    case "bispo" :
        console.log ("Ande e/ou capture em diagonal, quantas casas quiser.");
        break;
    case "cavalo" :
        console.log ("Ande e capture em formato de L, apenas quatro casas.");
        break;
    case "rainha" :
        console.log ("Ande e capture em todas as direções, quantas casas quiser.");
        break;
    case "rei" :
        console.log ("Ande e capture em todas as direções, apenas uma casa.");
        break;
    default : 
        console.log ("Digite uma peça existente.");
}