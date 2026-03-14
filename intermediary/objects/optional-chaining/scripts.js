const user = {
  id: 1,
  name: "Lucas",
  /*
  address: {
    street: "Avenida Brasil",
    city: "São Paulo",
    geo: {
      latitude: 47.8080,
      longetude: 17.5674,
    },
  },
  message: function () {
    console.log(`Hello, ${this.name}`);
  },
  */
};

console.log(user?.address?.street);
user.message?.();
