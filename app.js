const btnEksi1 = document.getElementById("btn1");
const btnArtı1 = document.getElementById("btn2");
const btnEksi2 = document.getElementById("btn3");
const btnArtı2 = document.getElementById("btn4");

let deger1 = document.getElementById("d1");
let deger2 = document.getElementById("d2");

let product1 = document.getElementById("product1");
let product2 = document.getElementById("product2");



btnEksi1.addEventListener("click", düsür);
function düsür() {
  if (Number(deger1.innerHTML) > 0) {
    deger1.innerHTML--;
    product1.innerHTML = 54.99 * `${deger1.innerHTML}`;
  }
  console.log(deger1.innerHTML);
}

btnArtı1.addEventListener("click", () => {
  deger1.innerHTML++;
  product1.innerHTML = 54.99 * `${deger1.innerHTML}`;
});

btnEksi2.addEventListener("click", () => {
  if (deger2.innerHTML > 0) {
    deger2.innerHTML -= 1;
    product2.innerHTML = 74.99 * deger2.innerHTML;
  }
});

btnArtı2.addEventListener("click", () => {
  deger2.innerHTML++;
  product2.innerHTML = (74.99 * deger2.innerHTML).toFixed(1);
});


total1.getElementById.innerHTML=(product1.innerHTML + product2.innerHTML);
