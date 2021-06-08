var iamgroot = prompt("Hey there");

console.log(iamgroot)
    
document.getElementById("h").innerText = iamgroot;

//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })