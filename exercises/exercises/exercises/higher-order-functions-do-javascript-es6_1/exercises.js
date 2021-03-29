// exercicio 01
const createObject = (nome) => ({nome: `${nome}`, email: `${nome.replace(/ /g, '_')}@trybe.com`});

const newEmployees = () => {
    const employees = {
      id1: createObject('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: createObject('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: createObject('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };

console.table(newEmployees());

// exercicio 02
const check = (num1, num2) => (num1 === num2);

const result = (number, action) => {
    const pulled = Math.ceil(Math.random()* 5);
    console.log(pulled);
    if (action(number, pulled)){
        console.log('parabens você ganhou');
    } else {
        console.log('tente novamente');
    }
}
result(3, check);

// exercicio 03 
const compareTest = (gabarito) => (resposta) =>  (gabarito.toLowerCase() === resposta.toLowerCase());

console.log(compareTest('AAA')('aaa'));