// const score = 8.5;

// if(score >=8.0){
//     console.log("hsg");
// }else{
//     console.log("hsk")
// }
// let day = 5;
// switch(day){
//     case 2:
//         console.log("thu hai");
//         break;
//     case 3:
//         console.log("thu 3");
//         break;
//     case 4:
//         console.log("thu 4");
//         break;
//     case 5:
//         console.log("thu 5");
//         break;
//     case 6:
//         console.log("thu 6");
//         break;
//     case 7:
//         console.log("thu 7");
//         break;
//     case 8:
//         console.log("chu nhat");
//         break;
//     default:
//         console.log("khong hop le");
//         break;
// }
// let score = prompt("moi ban nhap diem");
// console.log("gia tri " , score);


// vd1 Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for(let i = -100; i<=100; i++){
//     if(i % 9 ==0){
//         console.log(i);
//     }
// }

// vd2 Hãy tính tổng các số chẵn từ -10 đến 50.//
// let sum =0;
// for(let i = -10; i<=50; i++){
//     if(i%2==0){
//         sum += i;
        
//     }
// }
// console.log(sum);

// bai1 in ra day so tu 1 den 500

// for(let i = 1; i <= 500; i++){
//     console.log(i)
// }


// bai2 in ra cac so chia het cho 2 va 3 tu 1 den 300
// for(let i =1; i <=300; i++){
//     if(i % 2 ==0 && i%3 ==0)
//         console.log(i);
//     }

//bai4 nhap vao so n, tinh giai thua cua n

// const n = prompt("nhap n");
// let factorial = 1;
// for(let i = 1; i<=n;i++){
//     factorial = factorial * i;
// }
// console.log(factorial);


//bai tap 5: Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// let a,b,x;

// do{
//     a = prompt("nhap a");
//     b = prompt("nhap b");
// }while(a>=b);
// do{
//     x = prompt("nhap x");
// }while(x === 0);
// for(let i =  a; i < b; i ++){
//     if(i%x === 0){
//         console.log(i);
//         break;
//     }
// }

//Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không

let n = prompt("nhap n");

if(n<=0){
    console.log(n, "kh phai so nguyen to");
}
let count = 0;
for(let i =1; i<= n; i++){
if(n % 1 ==0){
    count++;
    }
}
console.log(count);