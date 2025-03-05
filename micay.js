document.getElementById("numberofmicay").oninput = tongtien;
function tongtien() {
  const number = parseFloat(document.getElementById("numberofmicay").value || 0);
  const tongtien = number * 30000;
  document.getElementById("result").innerHTML = tongtien;  
}