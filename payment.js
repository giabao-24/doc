document.getElementById("number").oninput = sum;
function sum() {
  const number = parseFloat(document.getElementById("number").value) || 0;
  const tongtien = number * 15000;
  document.getElementById("tong").textContent = tongtien;
}
function gopage() {
  window.location.href = "index.html";
}