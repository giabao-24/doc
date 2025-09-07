document.getElementById("numberofmicay").oninput = tongtien;

function tongtien() {
  const number = parseFloat(document.getElementById("numberofmicay").value || 0);
  const total = number * 30000;
  document.getElementById("result").innerHTML = total.toLocaleString("vi-VN") + "₫";
}

function order() {
  const name = document.getElementById("name").value.trim();
  const phone_number = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if(name && phone_number && address) {
    let a = document.getElementById("myCode");
    a.style.display = "flex";  
    document.getElementById("myCode2").style.display = "none";
  } else {
    let a = document.getElementById("myCode2");
    a.style.display = "flex";
    document.getElementById("myCode").style.display = "none";
  }
}