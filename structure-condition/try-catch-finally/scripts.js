try {
  // tryes to execute something
  console.log(result);
} catch (error) {
  // capture the error for tratament
  console.log("An error has occurred in the aplication: ", error);
} finally {
  console.log("Fim");
}

let result = 0;

try {
  if (result === 0) {
    throw new Error("the value is equal to zero");
  }
} catch (error) {
  console.log(error);
} finally {
  console.log("Fim");
}
