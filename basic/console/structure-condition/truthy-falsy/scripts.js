/*
  Falso é quando um valor é considerado falso e verdadeiro quando é considerado
  verdadedeiro em contextos onde um booleano é obrigatório (condicionais e loops).
*/

console.log("===EXEMPLES OF FALSY===");
console.log(false ? "TRUE" : "FALSE");
console.log(0 ? "TRUE" : "FALSE");
console.log(-0 ? "TRUE" : "FALSE");
console.log("" ? "TRUE" : "FALSE");
console.log(null ? "TRUE" : "FALSE");
console.log(undefined ? "TRUE" : "FALSE");
console.log(NaN ? "TRUE" : "FALSE");

console.log("===EXEMPLES OF TRUTHY===");
console.log(true ? "TRUE" : "FALSE");
console.log({} ? "TRUE" : "FALSE");
console.log([] ? "TRUE" : "FALSE");
console.log(1 ? "TRUE" : "FALSE");
console.log(3.23 ? "TRUE" : "FALSE");
console.log("0" ? "TRUE" : "FALSE");
console.log(" " ? "TRUE" : "FALSE");
console.log("Lucas" ? "TRUE" : "FALSE");
console.log("false" ? "TRUE" : "FALSE");
console.log(-1 ? "TRUE" : "FALSE");
console.log(Infinity ? "TRUE" : "FALSE");
console.log(-Infinity ? "TRUE" : "FALSE");
