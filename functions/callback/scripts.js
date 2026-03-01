// Callback function is a function that is passed to another function like argument

function execute(taskName, callBack) {
  console.log("executing task: ", taskName);
  callBack();
}

function callBack() {
  console.log("task finished...");
}

// passing to the function
execute("Download the archive...", callBack());

// create the function in the parameter itself (anonymous)
execute("Download the archive...", function () {
  console.log("Callback function with anonymous function.");
});

// create the function in the parameter itself (arrow)
execute("Download the archive...", () => {
  console.log("Callback function with arrow function.");
});

execute("saving the archive...", () => console.log("archive saved."));
