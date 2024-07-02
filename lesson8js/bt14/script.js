let m = prompt("Nhập vào số m (m >= 2): ");
let n = prompt("Nhập vào số n (n >= 2): ");

for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < m; j++) {
        row += '* ';
    }
    console.log(row);
}