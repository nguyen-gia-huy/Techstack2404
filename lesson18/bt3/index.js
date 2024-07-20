var _a;
var customer1 = {
    name: "Huy",
    address: {
        street: "Go Vap"
    },
};
// Sử dụng optional chaining để truy cập thuộc tính street của địa chỉ nếu có
var street2 = (_a = customer1.address) === null || _a === void 0 ? void 0 : _a.street;
console.log("Street: ".concat(street2));
//- Nullish Coalescing: Viết hàm getUserName nhận vào một object user có thuộc tính name và trả về tên người dùng nếu tồn tại, ngược lại trả về "Guest".
