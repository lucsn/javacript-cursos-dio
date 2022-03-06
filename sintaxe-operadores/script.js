var num1 = Number(prompt('Informe o primeiro número: '));
var num2 = Number(prompt('Informe o segundo número: '));

var comparandoNumeros = num1 == num2 ? 'são iguais. ' : 'não são iguais. ';

var soma = num1 + num2;

var compara10 = soma > 10 ? 'maior que 10' : 'menor que 10';

var compara20 = soma > 20 ? 'maior que 20' : 'menor que 20';

alert(`Os números ${num1} e ${num2} ${comparandoNumeros}A soma é de ${soma}, que é ${compara10} e ${compara20}.`);