$(document).ready(function () {
    var person = prompt("Please enter your name");

    if (person == null || person == "") {
        prompt("Please enter your name");
    } else {
        confirm("Are you sure " + person + " is your name ?");
        window.alert(" Hello " + person + " ! How are you today?");
        $("footer div").html("Hello " + person + " ! How are you today?");
    }
});
