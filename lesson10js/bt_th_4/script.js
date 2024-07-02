//4. Cho bộ dữ liệu về users như sau: data.js
//Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
//c1
// function findUser(users, n){
//     return users.find(user => user.id == n);
// }
// let n = prompt("nhap user: ");
// console.log(findUser(users, n));

//c2
// const n = prompt('nhap n: ');
// for(let user of users){
// 	if(user.id === Number(n)){
// 		console.log(user);
// 	}
// }

//-Nhập vào 1 chuỗi keyword. Hãy lấy ra email của 
//các user có tên (first_name + last_name) chứa keyword.
// const keyword = prompt('nhap keyword');
// for(let user of users){
// 	const fullname = user.first_name + ' ' + user.last_name;
// 	if(fullname.toLowerCase().includes(keyword.toLowerCase())=== true){
// 		console.log(user.name)
// 	}
// }

//Đếm số lượng user có age > 50.
let count =0;
for(let user of users){
	if(user.age > 50){
		count  += 1;
		 
	}
}console.log(count);


//Đếm số lượng user đã kết hôn và chưa kết hôn.
let countMarried = 0;
for(let user of users){
	isFinite(user.is_married === true)
}