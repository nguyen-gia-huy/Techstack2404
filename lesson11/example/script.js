// //tim element theo id
// const $paragraph = document.getElementById('paragraph');
// // console.log("$paragraph", $paragraph);

// //tim element theo ten the
// const $tagP = document.getElementsByTagName('p');
// // console.log('$tagP: ', $tagP)

// //tim element theo ten class
// const $text = document.getElementsByClassName('tagP');
// // console.log('$text: ', $text);

// //document.querySelector
// const $element = document.querySelector('p#paragraph.tagP');
// console.log('$element', $element);
// //document.querySelectorAll
// const $elements = document.querySelectorAll('p#paragraph.tagP');
// console.log('$elements', $elements);




// const $h1 = document.getElementById('h1');
// console.log('$h1: ', $h1);

// //innerHtml: thay doi noi dung ben trong element
// // $h1.innerHTML = 'noi dung da dc thay doi';

// //innerText: thay doi noi dung van ban ben trong element
// $h1.innerText ='Noi dung da dc thay doii'


const $tagA = document.getElementById('tagA');
// //thay doi gua tri cua mot thuoc tinh trong the html
// //cach 1
// // $tagA.href ='https://www.google.com/';
// // console.log($tagA.href)
// //cach 2
// $tagA.setAttribute('href', 'https://www.youtube.com');
// console.log($tagA.getAttribute('href'))
// console.log($tagA.getAttribute('data-src'))


//thay doi style cua 1 element
// $tagA.style.color = 'red';
// $tagA.style.fontSize='30px';

// //xoa thuoc tinh cua 1 element
// $tagA.removeAttribute('data-src');


//tao moi element
let $tagH2 = document.createElement('h2')
$tagH2.innerHtml ='noi dung the h2'
console.log('$tagH2', $tagH2);

document.body.appendChild($tagH2);
// $tagA.remove();
