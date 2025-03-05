document.getElementById("numberofbcb").oninput = xuly;
function xuly() {
  const number = parseFloat(document.getElementById("numberofbcb").value || 0);
  const sum = number * 13000;
  document.getElementById("sum").innerHTML = sum;
}