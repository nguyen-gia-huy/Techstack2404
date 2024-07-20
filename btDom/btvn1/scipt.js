const $url = document.getElementById('url')
const $image = document.getElementById('img')
const $width = document.getElementById('width')
const $height = document.getElementById('height')
const $boderRadius = document.getElementById('boderRadius')
const $alt = document.getElementById('alt')
// $url.onchange = function(){
//     const value = $url.value;
//     console.log("change", value)
// }

$url.onchange = function(){
    const value = $url.value;
    $image.src = value;
}
$width.oninput = function(){
    const value = $width.value;
    $image.width = value
}
$height.oninput = function(){
    const value = $height.value;
    $image.height = value;
}
$boderRadius.oninput =function(){
    const value = $boderRadius.value;
    $image.style.borderRadius = value +'px';
}
$alt.oninput =function(){
    const value = $alt.value;
    $image.alt = value;
    console.log('value', value)
}
