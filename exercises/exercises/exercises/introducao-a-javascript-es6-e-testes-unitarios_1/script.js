// exercicio 01
const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

// exercicio 02
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort(function(a, b) {
  return a - b;
  });
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);

  // parte 02 - exercicio 01 


const fatorial = n => {
    if (n == 0) {
        return 1;
    }
    let resp = n;
    while (n > 2) {
        resp *= --n;
        // resp = resp * n -1;
        // n -= 1;
    }

    return resp;
}
console.log(fatorial (4));