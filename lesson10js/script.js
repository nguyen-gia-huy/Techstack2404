const mySelf={
    name:'huy',
    age: '19',
    habit: ['coding', 'studying', 'driving'],
    height: '1m6',
    weight: '45kg',
    status: 'having a girlfriend',
    phone: '0987654321',
    address:'HCM',
    course:['reactJS', 'pro192', 'OSG202'],
    1: 'Mot',
}
// const girlfriend={
//     name: 'nhi',
//     age: '19',
//     nice: '10',
//     rich: true,
// }
// if(mySelf.age >20 && girlfriend.age >20){
//     console.log("tam nay cuoi dc roi");
// }else{
//     console.log("cho them chut nua")
// }
//---------------------------------------------------------------
// //truyxuat
// console.log(mySelf);

// //cach 1;
// console.log(mySelf.name);
// console.log(mySelf.address);

// //cach2(khuyen khich)
// let variable = 'address';
// console.log(mySelf[address]);
// console.log(mySelf['1']);
// console.log(mySelf.course[1]); //pro192;

//-------------------------------------------------------
//thay doi va update
//c1
// console.log(mySelf);
// mySelf.address = 'vinhlong';
// console.log(mySelf)
//c2
// mySelf['1'] = 'So mot';
//xoa key
// delete mySelf['1'];
// console.log(mySelf);
// delete mySelf.address;
// console.log(mySelf);
// delete mySelf.course[1];
// console.log(mySelf)



//-----------------------------------------------------------------
// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. 
// Đầu ra là kết quả của phép tính (a + b)^2 .
function type(a,b){
    let x = (a + b)**2;
    return x;
}
let val = type(4,5);
console.log(val);

//---------------------------------------------------------------
// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. 
// Đầu ra là giá trị số vừa nhập.
function inputNumber(){
    let a;
    for(;true;){
        a = prompt('nhap a');
        if(a >0){
            return a;
        }
    }
}
const number = inputNumber();
console.log('number: ', number);