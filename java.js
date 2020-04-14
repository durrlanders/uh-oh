
let outputPlayer = document.getElementById('outputPlayer');
let outputStats = document.getElementById('outputStats');
let outputImage = document.getElementById('outputImage');
let jsonDatabase =
[
  {"name" : " Chris Copeland",
"picture" : "https://assets.sbnation.com/assets/2452799/uspw_7174982.jpg",
"college" : " University of Colorado Boulder",
"height" : " 6'8\"",
"notable" : " Scoring over 8 pts per game in the 2012-13 season."},
{"name" : " James \"Flight\" White",
"picture" : "https://www4.pictures.zimbio.com/gi/James+White+Oklahoma+City+Thunder+v+New+York+q4oQzRm8lxpl.jpg",
"college" : " Cincinnati",
"height" : " 6'7\"",
"notable" : " Losing the slam dunk contest."},
{"name" : " Landry Fields",
"picture" : "https://i1.wp.com/s3.amazonaws.com/phillyfrontoffice/wp-content/uploads/sites/2/2018/12/16083002/Landry-Fields.jpg?fit=1448%2C2172&ssl=1",
"college" : " Stanford",
"height" : " 6'7\"",
"notable" : " Selected to the All-Rookie First Team."},
{"name" : " Eddie Curry",
"picture" : "https://statandstuffdotcom.files.wordpress.com/2012/01/eddy_curry1.jpeg",
"college" : " N/A",
"height" : " 7'0\"",
"notable" : " Playing 10 Games in two seasons."},
{"name" : " Steve Novak",
"picture" : "https://www.nydailynews.com/resizer/vlcqcU1oO3-CGQYAifYhsIQnPkk=/1200x1683/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HNDV76ZUOEOBDARARK5T3T2SVM.jpg",
"college" : " Marquette",
"height" : " 6'10\"",
"notable" : " Leading the league in 3 point percentage."}
]


    var Number = jsonDatabase[Math.floor( Math.random() * jsonDatabase.length)];
var Ledge = document.getElementById('College');
var Width = document.getElementById('Height');
var Bulls = document.getElementById('Notables');
var Mother = document.getElementById('title');
var Picture = document.getElementById('pic');
Ledge.textContent += Number["college"];
Width.textContent += Number["height"];
Bulls.textContent += Number["notable"];
Mother.textContent += Number["name"];
console.log(Number);
document.getElementById("outputStats").style.fontSize = "x-large"
//console.log(Progress);
document.style.textDecoration = "none";
function picc(Number) {
  var newImage = document.getElementById("outputImage")
  newImage.createElement("IMG");
  //newImage.classList.add("footerImage");
  newImage.src = "https://www.nydailynews.com/resizer/vlcqcU1oO3-CGQYAifYhsIQnPkk=/1200x1683/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HNDV76ZUOEOBDARARK5T3T2SVM.jpg";

}
