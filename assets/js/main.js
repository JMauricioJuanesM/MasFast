$(function () {
    "use strict"
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky")
        }
    });

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // wow js
    new WOW().init();

    // tiny slider
    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        nav: false,
        controlsText: ['<i class="fas fa-angle-left prev"></i>', '<i class="fas fa-angle-right next"></i>'],
    });

    //   scrollit js
    $.scrollIt();
});

let urlParams = new URLSearchParams(window.location.search);
let storeName = urlParams.get('store');
let storeHeader = document.getElementById('page-subtitle');
if (storeName && storeName.trim() !== '') {
    storeHeader.innerHTML = "Encuentra "+storeName +" en MasFast 😎🛵📦";
} else {
    storeHeader.innerHTML = "Más fácil, más rápido en MasFast 😎🛵🌮";
}

// Obtener el valor del argumento "store" de la URL
const urlParams2 = new URLSearchParams(window.location.search);
const store = urlParams2.get('store');



const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B5214921347658&text=¡Hola!%20Quiero%20ordenar%20en%20 ${store}.%20¿Cómo%20puedo%20hacerlo?`;
const whatsappUrlDefault = `https://api.whatsapp.com/send/?phone=%2B5214921347658&text=¡Hola!%20Quiero%20ordenar%20en%20MasFast.%20¿Cómo%20puedo%20hacerlo?`;

// Asignar la URL de WhatsApp al enlace
const link = document.getElementById('whatsapp-link');

if (store && store.trim() !== "null") {
    link.href = whatsappUrl;
} else {
    link.href = whatsappUrlDefault;   
}





