document.getElementById("numberofbone").oninput = tinhtong;
function tinhtong() {
  const a = parseFloat(document.getElementById("numberofbone").value || 0);
  const sum = a * 25000;
  document.getElementById("sum").innerHTML = sum;
}