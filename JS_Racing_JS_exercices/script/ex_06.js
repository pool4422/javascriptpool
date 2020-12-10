$(document).ready(function () {

var footer = document.getElementsByTagName("footer")[0];
var div = footer.getElementsByTagName("div")[0];

var str = "";

 function Hero(name, type, intell, strength) {

	this.heroName = name;
	this.heroType = type;
	this.heroIntell = intell;
	this.heroStrength = strength;

    var Nameis = ucFirst(this.heroName);

	if (this.heroIntell > 1) {
		ptIntell = "points";
	}

	if (this.heroStrength > 1) {
		ptStrength = "points";
	}

	str = str + "\"I am "+Nameis+" the "+this.heroType+", I have "+this.heroIntell+" points in Magic and "+this.heroStrength+" in Strength !\"<br />";

	div.innerHTML = str;

}



var mage = new Hero("amadeus", "wizard", 10, 3);
var warrior = new Hero("pontius", "warrior", 3, 10);

window.onload = function() {
	
	mage.toString();
	warrior.toString();
	
}

function ucFirst(string) {
    return string.charAt().toUpperCase() + string.slice(1);
}
});