
$(document).ready(function() {
    $("body").css("opacity", "1");

    $('.burger').click(function (event) {
        $('.burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
    $('.header-list').click(function(event) {
        $('.burger,.header-menu').removeClass('active');
        $('body').removeClass('lock');
        $('.header-menu, .burger').css('display', 'none')
    });
});


function changeItem1() {
    document.getElementById('product-img-1').style.width = '40%';
    document.getElementById('product-description-1').style.width = '40%';
    document.getElementById('desc-1').style.fontSize = '1.3vw';
    document.getElementById('desc-1').style.lineHeight = '1.8vw';
}
function rechangeItem1() {
    document.getElementById('product-img-1').style.width = '30%';
    document.getElementById('product-description-1').style.width = '30%';
    document.getElementById('desc-1').style.fontSize = '1vw';
    document.getElementById('desc-1').style.lineHeight = '1.5vw';
}


function changeItem2() {
    document.getElementById('product-img-2').style.width = '45%';
    document.getElementById('product-description-2').style.width = '40%';
    document.getElementById('desc-2').style.fontSize = '1.3vw';
    document.getElementById('desc-2').style.lineHeight = '1.8vw';
}
function rechangeItem2() {
    document.getElementById('product-img-2').style.width = '37%';
    document.getElementById('product-description-2').style.width = '30%';
    document.getElementById('desc-2').style.fontSize = '1vw';
    document.getElementById('desc-2').style.lineHeight = '1.5vw';
}


function changeItem3() {
    document.getElementById('product-img-3').style.width = '40%';
    document.getElementById('product-description-3').style.width = '40%';
    document.getElementById('desc-3').style.fontSize = '1.3vw';
    document.getElementById('desc-3').style.lineHeight = '1.8vw';
}
function rechangeItem3() {
    document.getElementById('product-img-3').style.width = '28%';
    document.getElementById('product-description-3').style.width = '30%';
    document.getElementById('desc-3').style.fontSize = '1vw';
    document.getElementById('desc-3').style.lineHeight = '1.5vw';
}


function changeItem4() {
    document.getElementById('product-img-4').style.width = '40%';
    document.getElementById('product-description-4').style.width = '40%';
    document.getElementById('desc-4').style.fontSize = '1.3vw';
    document.getElementById('desc-4').style.lineHeight = '1.8vw';
}
function rechangeItem4() {
    document.getElementById('product-img-4').style.width = '25%';
    document.getElementById('product-description-4').style.width = '30%';
    document.getElementById('desc-4').style.fontSize = '1vw';
    document.getElementById('desc-4').style.lineHeight = '1.5vw';
}


function changeItem5() {
    document.getElementById('product-img-5').style.width = '45%';
    document.getElementById('product-description-5').style.width = '40%';
    document.getElementById('desc-5').style.fontSize = '1.3vw';
    document.getElementById('desc-5').style.lineHeight = '1.8vw';
}
function rechangeItem5() {
    document.getElementById('product-img-5').style.width = '35%';
    document.getElementById('product-description-5').style.width = '30%';
    document.getElementById('desc-5').style.fontSize = '1vw';
    document.getElementById('desc-5').style.lineHeight = '1.5vw';
}

let displayInside = 'none';
let displayOutside = 'none';

function showInfo1() {
    document.getElementById('info-2').style.display = 'none';
    document.getElementById('info-3').style.display = 'none';
    if (displayOutside === 'none') {
        if (displayInside === 'none') {
            document.getElementById('info-1').style.display = 'block';
            displayOutside = 'display1';
        }
        else {
            document.getElementById('info-1').style.display = 'none';
            displayOutside = 'display1';
        }
        displayInside = document.getElementById('info-1').style.display;
    }

    else if (displayOutside === 'display1') {
        if (displayInside === 'none') {
            document.getElementById('info-1').style.display = 'block';
            displayOutside = 'display1';
        }
        else {
            document.getElementById('info-1').style.display = 'none';
            displayOutside = 'display1';
        }
        displayInside = document.getElementById('info-1').style.display;
    }

    else {
        document.getElementById('info-1').style.display = 'block';
        displayOutside = 'display1';
        displayInside = document.getElementById('info-1').style.display;
    }
}

function showInfo2() {
    document.getElementById('info-1').style.display = 'none';
    document.getElementById('info-3').style.display = 'none';
    if (displayOutside === 'none') {
        if (displayInside === 'none') {
            document.getElementById('info-2').style.display = 'block';
            displayOutside = 'display2';
        }
        else {
            document.getElementById('info-2').style.display = 'none';
            displayOutside = 'display2';
        }
        displayInside = document.getElementById('info-2').style.display;
    }

    else if (displayOutside === 'display2') {
        if (displayInside === 'none') {
            document.getElementById('info-2').style.display = 'block';
            displayOutside = 'display2';
        }
        else {
            document.getElementById('info-2').style.display = 'none';
            displayOutside = 'display2';
        }
        displayInside = document.getElementById('info-2').style.display;
    }

    else {
        document.getElementById('info-2').style.display = 'block';
        displayOutside = 'display2';
        displayInside = document.getElementById('info-2').style.display;
    }
}

function showInfo3() {
    document.getElementById('info-1').style.display = 'none';
    document.getElementById('info-2').style.display = 'none';
    if (displayOutside === 'none') {
        if (displayInside === 'none') {
            document.getElementById('info-3').style.display = 'block';
            displayOutside = 'display3';
        }
        else {
            document.getElementById('info-3').style.display = 'none';
            displayOutside = 'display3';
        }
        displayInside = document.getElementById('info-3').style.display;
    }

    else if (displayOutside === 'display3') {
        if (displayInside === 'none') {
            document.getElementById('info-3').style.display = 'block';
            displayOutside = 'display3';
        }
        else {
            document.getElementById('info-3').style.display = 'none';
            displayOutside = 'display3';
        }
        displayInside = document.getElementById('info-3').style.display;
    }

    else {
        document.getElementById('info-3').style.display = 'block';
        displayOutside = 'display3';
        displayInside = document.getElementById('info-3').style.display;
    }
}