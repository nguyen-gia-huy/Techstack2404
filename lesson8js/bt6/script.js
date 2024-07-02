

let s = 0;
let n = prompt("nhap vao so n");

do{
    n = prompt("nhap lai so n: ")
}while(n < 2);


for(let i =1; i <= n; i++){
    s += 1/(i * (i + 1));
}
console.log(s);
