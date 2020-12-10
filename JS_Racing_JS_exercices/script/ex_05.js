$(document).ready(function () {
    var footer = document.getElementsByTagName("footer")[0];
    var div = footer.getElementsByTagName("div")[0];

    var plus = footer.getElementsByTagName("button")[0];
    var moins = footer.getElementsByTagName("button")[1];
    var select = footer.getElementsByTagName("select")[0];
    var body = document.getElementsByTagName("body")[0];

    var style = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
    var size = parseInt(style);

    plus.onclick = function () {
        size++;
        document.body.style.fontSize = size + 'px';
    };

    moins.onclick = function down() {
        size--;
        console.log(size);
        document.body.style.fontSize = size + 'px';
    }
    $("option:nth-child(2)").click(function () {
        parseInt($('body').css('background-color', '#bdc3c7'));

    });


    $("option:nth-child(3)").click(function () {
        parseInt($('body').css('background-color', '#1abc9c'));

    });

    $("option:nth-child(4)").click(function () {
        parseInt($('body').css('background-color', '#f1c40f'));

    });

    $("option:nth-child(5)").click(function () {
        parseInt($('body').css('background-color', '#d35400'));

    });

    $("option:nth-child(6)").click(function () {
        parseInt($('body').css('background-color', '#e74c3c'));

    });

    $("option:nth-child(7)").click(function () {
        parseInt($('body').css('background-color', '#40d47e'));

    });

    $("option:nth-child(8)").click(function () {
        parseInt($('body').css('background-color', '#3498db'));

    });


});
