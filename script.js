var typen = document.getElementById("type");
var btn = document.getElementById("knop");

btn.onclick = function(){
    var inp = parseFloat(document.getElementById('type').value);
    var s = 2*Math.PI*inp;
    alert('omtrek:  ' + s)
}



