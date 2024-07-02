const arr = ["abcd", "ascd", "abcde", "xyz", "xyzv", 1, 2 ,6,3,6,10];

//-Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
// function timChuoiNganNhat(arr){
//     let chuoiNganNhat = arr[0];
//         for(let i = 1; i <arr.length; i++){
//             if(arr[i].length < chuoiNganNhat.length){
//                 chuoiNganNhat = arr[i];
//         }
//     }
//     return chuoiNganNhat;
// }
// const chuoiNganNhat = timChuoiNganNhat(arr)
// console.log(chuoiNganNhat);

//-----------------------------------------------------
//-Tìm những chuỗi trong mảng có chứa giá trị text.

//cach_1_chatGPT
// function timChuoiTrongMang(arr, text) {
//     return arr.filter(item => typeof item === 'string' && item.includes(text));
// }

// // Yêu cầu người dùng nhập một chuỗi cần tìm
// const textCanTim = prompt("Nhập chuỗi cần tìm trong mảng:");

// const chuoiChuaText = timChuoiTrongMang(arr, textCanTim);

// console.log("Những chuỗi trong mảng chứa giá trị '" + textCanTim + "':", chuoiChuaText);

//cach_2_github
// const text = prompt("nhap chuoi can tim trong mang");

// const result = [];
// for(let string of s){
//     if(string.includes(text)){
//         result.push(string);
//     }
// }
// console.log(result);

//------------------------------------------------------
//-Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

// const newS = [];
// for(let string of newS){
//     const newElement = string.slice(0, 3);
//     newS.push(newElement);
// }
// console.log(newS);

//Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.
// const result = s.join('-');
// console.log(result);
