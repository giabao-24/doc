document.getElementById("numberofmitron").oninput = thanhtoan;
function thanhtoan() {
 soluong = parseFloat(document.getElementById("numberofmitron").value || 0);
 const gia = soluong * 15000;
 document.getElementById("sum").innerHTML = gia;
}