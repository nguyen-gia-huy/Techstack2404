//CODE CUA MINH

// const table = document.getElementById('container');

// table.addEventListener('click', handleClick);

// function handleClick(event) {
//   if (event.target.tagName === 'BUTTON') {
//     const row = event.target.parentNode.parentNode;
//     table.removeChild(row);
//   }
// }


//link gemini giải thích code(chưa hiểu cần xem lại)
//https://gemini.google.com/app/92b90372ab3113f9?hl=vi

//CODE CUA ANH DUNG

const $listButton = document.querySelectorAll('button');

for(let $button of $listButton){
    $button.onclick = function(){
        $button.parentNode.parentNode.remove();
    }
}