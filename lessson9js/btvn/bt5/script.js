let n = prompt("nhap phan tu cua mang");
n = Number(n);
let sum = 0;
let arr =[];

for(let i = 0; i<n; i++){
	let element = prompt("Nhập phần tử: ");
    element = Number(element);
	arr.push(element);
}
for(let i = 0;  i< arr.length;i++){
    if(i % 2 === 1){
        sum += arr[i];
    }
}
console.log(sum);
