let listStudent = JSON.parse(localStorage.getItem('listStudent')) || [];
//nullish operator

//khoi tao dom
const $btnCreate = document.querySelector('#create')
const $inputName = document.getElementById('name')
const $inputMathScore = document.getElementById('math_score')
const $inputEnglishScore = document.getElementById('english_score')
const $inputLiteratureScore = document.getElementById('literature_score')


//READ: hien thi danh sach thong tin hoc sinh
function renderListStudent(){
    let string = "";
for(let i = 0; i< listStudent.length;i++){
    //template string
     string += `
    <tr>
        <th scope="row">${listStudent[i].id}</th>
        <td>${listStudent[i].name}</td>
        <td>${listStudent[i].gender === 'boy' ? 'Nam' : 'Nữ'}</td>
        <td>${listStudent[i].math_score}</td>
        <td>${listStudent[i].ennglish_score}</td>
        <td>${listStudent[i].literature_score}</td>
        <td>8</td>
        <td><button class ="btn btn-danger" onclick ="deleteStudent(${i})" >Delete</button></td>

    </tr>        
    `;
}
document.getElementById('info-student').innerHTML = string;

}
renderListStudent()
//create
//b1:gan su kien onclick cho button create student
$btnCreate.onclick = function(){
    //Bước 2: Xử lý trong hàm
		//-Lấy được các thông tin người dùng nhập ở các input
        const name = $inputName.value;
        const gender = document.querySelector('input[name="gender"]:checked').value ;
        const math_score = $inputMathScore.value;
        const english_score = $inputEnglishScore.value;
        const literature_score = $inputLiteratureScore.value;
		//-Tạo một object newStudent
        const newStudent = { 
            id: listStudent.length + 1,
            name: name,
            gender: gender,
            math_score: math_score,
            ennglish_score: english_score,
            literature_score: literature_score,
        }
        console.log(newStudent)
		//-Đẩy object newStudent vào mảng listStuden
        listStudent.push(newStudent);
        //cap nhat du lieu vao local storage
            localStorage.setItem("listStudent",JSON.stringify(listStudent));
        //goi laij ham renderliststudent de hien thi  daanh sach hs
        renderListStudent();
    }

    //b1: gan su kien onclick cho button delete
    function deleteStudent(index){
               
    //b2:xy ly trong ham
        //tim index cua hoc sinh trong danh sach
        //xoa hocj sinh khoi danh sach
        listStudent.splice(index,1);
        //cap nhat du lieu vao local storage
        localStorage.setItem("listStudent",JSON.stringify(listStudent));
        //goi lai ham renderListStudent de in ra danh sach moi nhat
    renderListStudent()
    }