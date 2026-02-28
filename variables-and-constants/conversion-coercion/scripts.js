/**

  * - Conversão de tipos (type casting ou tripe Conversion):
  * ocorre quando você explicitamente transforma um valor de um tipo para outro.
  * Isso é feito de forma consciente, usando funções ou métodos específicos para
  * ralizar a conversão.
*/

let value = "9";
console.log(typeof value);
console.log(typeof Number(value));

let age = 18;
console.log(typeof age.toString());

let option = 0;
console.log(Boolean(option)); // ...False
console.log(typeof Boolean(option)); // ..boolean

/**
 * - Coerção de tipos: acontece de forma automática (implocitamente). Ó JavaScript
 * tente converter automaticamente um dos valores para o tipo compatível antes de
 * ralizar a operação.
 */

console.log("10" + 5);
console.log(typeof (5 + "10"));
