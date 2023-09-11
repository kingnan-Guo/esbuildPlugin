(() => {
  // main/add.ts
  function add(a, b) {
    return a + b;
  }

  // main/main.ts
  var user = {
    name: " king",
    age: 88
  };
  console.log("add ==", add(88, 1));
  console.log("main ts", user);
})();
