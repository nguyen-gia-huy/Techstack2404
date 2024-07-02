let w = prompt('Nhập cân nặng (kg)');
let h = prompt('Nhập chiều cao (m)');

const BMI = w / h ** 2;

if (BMI < 18.5) {
	console.log('Nhẹ cân');
} else if (BMI >= 18.5 && BMI < 23) {
	console.log('Bình thường');
} else if (BMI >= 23 && BMI < 25) {
	console.log('Thừa cân');
} else {
	console.log('Béo phì');
}
