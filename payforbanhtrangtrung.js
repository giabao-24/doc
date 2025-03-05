document.getElementById("numberofbanhtrangtrung").oninput = payforbanhtrangtrung;
function payforbanhtrangtrung() {
 const numberofbanhtrangtrung = parseFloat(document.getElementById(numberofbanhtrangtrung).value) || 0;
 const sum = numberofbanhtrangtrung * 17000;
 document.getElementById("tongtien").innerHTML = sum;
}