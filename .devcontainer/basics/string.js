const name = "Priyank"
const repoCount = 50

// console.log(name + repoCount);
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Priyank-Rana-Rajput')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString)

const newvar = "  Priyank  "

console.log(newvar);
console.log(newvar.trim());

const url = "https://google.com/priyank%20rana"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
