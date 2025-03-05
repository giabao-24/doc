document.getElementById("numberofchickenleg").oninput = payforchickenleg;
function payforchickenleg() {
  const numberofchickenleg = parseFloat(document.getElementById("numberofchickenleg").value) || 0;
  const sum = numberofchickenleg * 25000;
  document.getElementById("sum").innerHTML = sum;
}