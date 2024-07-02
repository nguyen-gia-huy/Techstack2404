let a, b , x;
do{
    a = prompt("nhap a");
    b = prompt("nhap b");

}while(a>=b);
do{
    x = prompt("Nhap x");
}while(x==0);
for(let i =b; i >a; i--){
    if(i % x==0){
        console.log(i);
        break;
    }
}
