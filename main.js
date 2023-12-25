
$(function() {
 $("#inp").focus();
 $("#add").on("click", function() {
 var val = $("#inp").val();
 if(val !== '') {
 var elem = $("<li class='list'></li>").text(val);
 var btn = $("<button class='rem'>X</button>");
 
 btn.click(remclick);
 btn.hide()
 $(elem).append(btn);
 $("#mylist").append(elem);
 $("#inp").val("");
 btn.fadeIn(500)
 $("#inp").focus();
 }
 });
});

function remclick(e) {
var y = $(this).parent().text();
var s = y.slice(0,(y.length - 1));
var x = confirm ("Do you want to remove "+'"'+s+'"'+"?");
if(x==true){
 $(this).parent().fadeOut(500, function() {$(this).remove()});
 }
}