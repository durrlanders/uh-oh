
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
"picture" : "https://cdn.vox-cdn.com/thumbor/Uo7sjucJdQpRR6RgDwfa86Trp7k=/0x0:2659x3988/1200x800/filters:focal(1403x1076:1827x1500)/cdn.vox-cdn.com/uploads/chorus_image/image/66673095/143026358.jpg.0.jpg",
"college" : " Marquette",
"height" : " 6'10\"",
"notable" : " Leading the league in 3 point percentage."},
{"name" : " Ron Baker",
"picture" : "https://img.bleacherreport.net/img/images/photos/003/652/079/hi-res-4f38e27d4eed751badc4e5eb7819ae75_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
"college" : " Wichita State University",
"height" : " 6'4\"",
"notable" : " Scoring 13 points vs. the Warriors."},
{"name" : " Toney Douglas",
"picture" : "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/knicks_main/photo/toney-douglasjpg-ee36c4318924714a.jpg",
"college" : " Florida State",
"height" : " 6'2\"",
"notable" : " Tying a Knicks record with nine three-pointers in a home win."}
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
document.getElementById("outputStats").style.fontSize = "x-large";
//console.log(Progress);
// document.style.textDecoration = "none";

picc(Number);

function picc(incomingJSON) {
  var newImage = document.createElement("IMG");
  //newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture'];
  outputImage.appendChild(newImage);
}
