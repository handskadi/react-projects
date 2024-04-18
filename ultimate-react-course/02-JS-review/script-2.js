// Asynchonous Promises:

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("MKweb");

async function getToDos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  return data;
}
const todos = await getToDos();
console.log(todos);

console.log("MKW");
