var numero = [1, 340, 34, 0, 4, 7, false];

for (let i = 0; i < numero.length; i++) {

    if (numero[i] > 0) {
        if (numero[i] % 2 == 1) {
            numero[i] = 0;
        }
    } 
    else if (numero[i] == false && numero[i] !== 0) {
        numero[i] = -1;
    }
    console.log(numero[i]);
}