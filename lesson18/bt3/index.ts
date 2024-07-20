
//Bài tập 3: Optional Chaining và Nullish Coalescing
//- Optional Chaining: Định nghĩa một đối tượng customer có thuộc tính name và address. Viết một biểu thức sử dụng optional chaining để truy cập thuộc tính street của địa chỉ nếu có.
type Address = {
    street?: string;    
  };
  
  type Customer = {
    name: string;
    address?: Address;
  };
 
  var customer1: Customer = {
    name: "Huy",
    address: {
      street: "Go Vap"      
    },
  };

// Sử dụng optional chaining để truy cập thuộc tính street của địa chỉ nếu có
var street2 = customer1.address?.street;

console.log(`Street: ${street2}`);

//- Nullish Coalescing: Viết hàm getUserName nhận vào một object user có thuộc tính name và trả về tên người dùng nếu tồn tại, ngược lại trả về "Guest".
  