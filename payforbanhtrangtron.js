document.getElementById("numberofbtt").oninput = sumbtt;
function sumbtt() {
  const numberofbtt = parseFloat(document.getElementById("numberofbtt").value) || 0;
  const tongtien = numberofbtt * 16000;
  document.getElementById("sumbtt").innerHTML = tongtien;
}
