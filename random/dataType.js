console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof []); // object
console.log(typeof NAN); // undefined
console.log(typeof "[object object]"); // undefined
console.log([] + [], 5); // ""
console.log({} + {}, 6); // [object Object]
console.log({} + [], 7); // [object Object]

function a() {
  console.log(this, 8); // global object
  const b = 7;
  console.log(this.b, 9); // undefined
}
a();
const b = () => {
  console.log(this, 10); // {}
};
b();

c = { a: 1, b: 2 };
