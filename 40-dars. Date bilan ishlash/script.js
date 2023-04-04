
let start = new Date()

for (let i =0; i < 100000; i++) {
  let some = i**3
}
let end = new Date()

console.log(start.getTime());
console.log(end.getTime());

alert(`Loop competed in ${end - start} milliseconds`);
