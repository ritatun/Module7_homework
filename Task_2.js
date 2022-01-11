const obj = {};
obj.albus = "dambldor";
obj.severus = "snape";
obj.dobby = "moby";

console.log(obj);
let str = "dobby";


function checkStringInObject (object, string) {
if (string in object) {
console.log(true);
} else {
console.log(false);
}
}

checkStringInObject (obj, str);