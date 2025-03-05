document.getElementById("numbersausage").oninput = costsausage;
function costsausage() {
  const numbersausage = parseFloat(document.getElementById("numbersausage").value) || 0;
  const tongtien = numbersausage * 13000;
  document.getElementById("costsausage").textContent = tongtien;
}