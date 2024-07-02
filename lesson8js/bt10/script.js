let m,n;

do{
    m = prompt("nhap m: " );
    n = prompt("nhap m: ");
}while(m <= 0 || n <= 0);


let UCLN = 1;
for(let i = 0; i <= m && i <=n; i++) {
    if(m % i ==0 && n % i == 0){
        UCLN = i;
    }
}

console.log('uoc chung lon nhat: ', UCLN);

//tim boi chung nho nhat
BCNN= (m * n)/ BCNN;
console.log('boi chung nho nhat: ', BCNN);