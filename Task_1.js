const objPrototype = {
cast: "magic"
}

console.log(objPrototype);

const obj = Object.create(objPrototype);

obj.albus = "dambldor";
obj.severus = "snape";
obj.dobby = "moby";
console.log(obj);

function getObjectKeyAndProp (object) {
for (let key in object) {
if (object.hasOwnProperty(key)) {
console.log(`${key}: ${object[key]}`)
}
}
}

getObjectKeyAndProp (obj); 