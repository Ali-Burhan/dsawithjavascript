const person = {
    name:"Ali",
    age:21,
    "hobby-of":"Football"
}

console.log(person['hobby-of'])
console.log(Object.keys(person));
console.log(Object.entries(person));
console.log(Object.values(person));

for(let [key,val] of Object.entries(person)){
    console.log(`Key is ${key} and value is ${val}`)
}

for( let key of Object.keys(person)){
    console.log(`Key is ${key}`);
}

for( let val of Object.values(person)){
    console.log(`Values are ${val}`);
}