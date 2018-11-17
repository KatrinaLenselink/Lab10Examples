var myPrompt = prompt ("What is your age?");
console.log(myPrompt);

var d = new Date ();
var cY = d.getFullYear();
var birthYear = cY - myPrompt;
document.getElementById("output").innerHTML= birthYear;
