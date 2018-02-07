
var li = document.querySelectorAll("ul li");
alert("There are " +li.length+" items in this list");

document.title = "Manipulating the DOM!";
var item = document.createElement("li");
var text = document.createTextNode("Fifth Item");
item.appendChild(text);
document.getElementById("stuff").appendChild(item);

alert("There are " +li.length+" items in this list");

var graphs = document.getElementById("div");
var p4 = document.getElementById('P4');
graphs.removeChild(p4);