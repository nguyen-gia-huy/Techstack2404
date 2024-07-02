//Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.


let d1, d2;
d1 = prompt("nhap day d1: ");
d2 = prompt("nhap day d2: ");
d1 = d1.split(',');
d2 = d2.split(',');
// console.log('d1: ' , d1);
// console.log('d2: ' , d2);


//---------------------------------------------------------------------------
// -Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
// let result = true;
// for(let number of d1){
   
//     if(d2.includes(number) == false){
//         result = false;
//         break;
//     }
// }
// if(result = true){
//     console.log('tat ca cac gia tri d1 deu nam trong d2');
// }else{
//     console.log('trong d1 co phan tu khong nam trong d2');
// }

//----------------------------------------------------------------------------
//-Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sumD1= 0;
// for(let number of d1){
//     sumD1 = sumD1 + Number(number);
// }

// let result = true;
// for(let number of d2){
//     if(number %sumD2 != 0 ){
//         result = false;
//         break;
//     }
// }
// if(result === true){
//     console.log('tat ca phan tu trong d2 deu chia het cho tong cua d1')
// }else{
//     console.log('trong d2 co phan tu khong chia het cho tong d1')
// }

//------------------------------------------------------------------------------
//Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
// const number  = [];
// let(number of d1){
//     if(number %2 ===0){

//     }
// }


//-----------------------------------------------------------------------------------
//4. Cho mảng đa chiều biểu thị mức độ tăng trưởng của 1 công ty qua các quý và năm tương ứng.
// Dữ liệu của năm: theo hàng.
// Dữ liệu của quý: theo cột.
// let growth = [
//     [5,8,9,16],
//     [2,7,1,9],
//     [5,6,8,12],
//     [10,2,1,8],
//     [20,4,9,1]
// ]
     
// -Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
// -Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
// -Tìm giá trị tăng trưởng theo quý lớn nhất.
// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).