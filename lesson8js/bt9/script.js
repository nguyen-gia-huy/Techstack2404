let s = prompt("nhap s");
let l = prompt("nhap l");

for(let i = s.length; i < l; i++){
    s='0' + s;
}

console.log(s);
console.log(s.length);