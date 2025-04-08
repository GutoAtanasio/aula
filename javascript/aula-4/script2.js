// ....................................Laços de repetição..............................................................

//FOR


for (let i = 0; i <= 10; i = i + 1) {
    console.log (i);
}
// WHILE

let contador = 1;
while (contador <= 5) {
    console.log (contador);
    contador = contador + 1
}

// DO... WHILE

let counter = 1;
do {
    console.log (counter);
    counter++;
} while (counter <= 5);

// EXERCICIO 1...............................
// Printar do ano atual até 30 anos atrás (FOR)
const anoAtual = new Date().getFullYear();

for (let i = anoAtual; i >= anoAtual - 30; i = i - 1) {
    console.log (i);
}
