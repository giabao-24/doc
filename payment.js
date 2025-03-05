document.getElementById("number").oninput = sum;
function sum() {
  const number = parseFloat(document.getElementById("number").value) || 0;
  const tongtien = number * 15000;
  document.getElementById("tong").textContent = tongtien;
}
document.getElementById("numberofchickenleg").oninput = sumofchickenleg;
function sumofchickenleg() {
  const numberofchickenleg = parseFloat(document.getElementById("numberofchickenleg").value) || 0;
  const value = numberofchickenleg * 25000;
  document.getElementById("sum").textContent = value;
}
function gopage() {
  window.location.href = "index.html";
}
