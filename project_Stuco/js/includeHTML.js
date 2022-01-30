"use strict;"

//반복 modal html file calling

window.addEventListener('load', function(){
    let allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el){
        
        let includePath = el.dataset.includePath;

        if(includePath) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {

                if(this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                    const swiper = new Swiper('.swiper',{

                    })
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});