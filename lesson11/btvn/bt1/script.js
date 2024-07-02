const $image = document.getElementById('img');
const $url = document.getElementById('url');
const $width = document.getElementById('width');
const $height = document.getElementById('height');
const $borderRadius = document.getElementById('borderRadius');
const $alt = document.getElementById('alt')

        $url.onchange = function(){
            const value = $url.value;
            $image.src = value;
        };

        $width.oninput = function(){
            const value = $width.value;         
            $image.width = value  ;
        };

        $height.oninput = function(){
            const value = $height.value;
            $image.height = value ;
        };

        $borderRadius.oninput = function(){
            const value = $borderRadius.value;
            $image.style.borderRadius = value + 'px';
        };

        $alt.oninput = function(){
            const value = $alt.value;
            $image.alt = value;
        };