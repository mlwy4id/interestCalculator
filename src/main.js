/*
    rekursif!! ==> kamu memanggil sebuah fungsi di dalam fungsi itu sendiri

    fn();

    4! = 1.2.3.4 == fn(4)
    5! = 1.2.3.4.5 ==> 4!.5 == fn(4) * 5 ==> 3!.4.5 ==> 2!.3.4.5 ==> 1!.2.3.4.5

    Ha = N(1 + rate) ==> bulan pertama
    Ha = Ha bulan pertama(1 + rate)
       = (N(1 + rate))(1 + rate) ==> bulan kedua
    Ha = Ha bulan kedua(1 + rate)
       = ((N(1 + rate))(1 + rate))(1 + rate) ==> bulan ketiga
*/
import createElement from "./components/result.mjs";
import countFined from "./utils/countFined.mjs";

const calculator = document.getElementById("interest-calculator");
const container = document.getElementById("container");

const finedContainer = document.getElementById("gotFined");
let totalFined = 0;
let checkbox = document.querySelector("input[id=isFined]");
let isChecked = false;

const clear = () => {
  document.getElementById("loan").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("loan-duration").value = "";
  document.getElementById("interest-pattern").value = "";
  container.innerHTML = "";

  document.getElementById("fined").value = "";
  document.getElementById("fined-duration").value = "";
  document.getElementById("fined-pattern").value = "";
  totalFined = 0;
};

checkbox.addEventListener("change", () => {
  isChecked = !isChecked;

  if (isChecked) {
    finedContainer.classList.toggle("hidden");
  } else {
    finedContainer.classList.add("hidden");
  }
});

calculator.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isChecked) {
    const fined = document.getElementById("fined").value;
    const finedDuration = document.getElementById("fined-duration").value;
    const finedPattern = document.getElementById("fined-pattern").value;

    totalFined = countFined(fined, finedDuration, finedPattern);
  }

  const loan = document.getElementById("loan").value;
  const interest = document.getElementById("interest").value;
  const loanDuration = document.getElementById("loan-duration").value;
  const interestPattern = document.getElementById("interest-pattern").value;

  const interestCounter = Math.floor(
    parseFloat(loanDuration / interestPattern)
  );

  if (isNaN(interest)) {
    alert(
      "Masukkan angka atau ganti koma pada desimal dengan titik pada input bunga. Contoh 2.33"
    );
    return;
  }

  const wrapper = createElement(loan, interest, interestCounter, totalFined);

  clear();
  container.appendChild(wrapper);
});
