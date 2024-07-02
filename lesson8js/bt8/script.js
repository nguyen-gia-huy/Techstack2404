let count = 0;
let n = prompt("nhap so kiem tra vao");
for(let i = 1; i <= n; i++ ){
    if(n % i == 0 && n % 1 ==0){
        count++;
    }
}
if(count == 2){
    console.log("day la so nguyen to");
}else{
    console.log("day kh phai la so nguyen to")
}