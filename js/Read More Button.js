// JavaScript Document
function Button_click ()
{
var dots = document.getElementById("dots");
//var first_text = document.getElementById("About_Text");
var second_text = document.getElementById("Rest_Text");
var button_text = document.getElementById("Read_More");
var main_text = document.getElementById("About_Text")
	
	if (dots.style.display === "none") {
		dots.style.display = "inline";
		button_text.innerHTML = "Read more";
		second_text.style.display = "none";
		main_text.style.maxHeight = "500"} 
	else {
		dots.style.display = "none";
		button_text.innerHTML = "Read less";
		second_text.style.display = "inline";
		main_text.style.maxHeight = "350"}	
}
