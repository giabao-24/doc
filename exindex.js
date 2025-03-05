let count = 0;
document.getElementById("price").textContent = count*10000;
function tru() {
  if(count > 0) {
  count--;
  update();
}
 }
function cong() {
  count++;
  update();
}
function update() {
  document.getElementById("result").textContent = count;
  let price1 = count * 10000;
  document.getElementById("tongtien").textContent = price1;
}

 