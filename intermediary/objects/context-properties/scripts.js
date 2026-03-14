const user = {
  name: "Lucas",
  message: function () {
    console.log(`Hello ${this.name}`);
  },
};

user.message();
 