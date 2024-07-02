// Lắng nghe sự kiện click trên nút có id 'addTaskBtn'
document.getElementById('addTaskBtn').addEventListener('click', function() {
   // Lấy phần tử input có id 'input' và giá trị của nó
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    // Kiểm tra xem input có trống hay không
    if (taskText !== "") {
        // Nếu input không trống, tìm phần tử ul có id 'taskList'
        const taskList = document.getElementById('taskList');
        // Tạo một phần tử li mới
        const newTask = document.createElement('li');
        // Thiết lập nội dung văn bản của li mới bằng giá trị của input
        newTask.textContent = taskText;
         // Thêm li mới vào cuối danh sách ul
        taskList.appendChild(newTask);
        // Xóa nội dung trong input để chuẩn bị cho công việc mới
        taskInput.value = ""; // Clear the input field
    } else {
        // Nếu input trống, hiện thông báo yêu cầu người dùng nhập nội dung công việc
        alert("Vui lòng nhập nội dung công việc.");
    }
});
