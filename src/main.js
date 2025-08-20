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
const calculator = document.getElementById("rates-calculator");
const container = document.getElementById("container");

function countTotalInterest(loan, rates, ratesCounter) {
  if (ratesCounter == 0) return loan;

  return countTotalInterest(loan, rates, ratesCounter - 1) + loan * rates;
}

const createElement = (loan, rates, ratesCounter) => {
  const wrapper = document.createElement("div");
  const heading = document.createElement("h3");
  const result = document.createElement("p");

  heading.innerText = "Hasil:";
  heading.classList.add("text-3xl", "font-bold", "text-center");

  result.innerText = countTotalInterest(
    Number(loan),
    parseFloat(rates),
    Number(ratesCounter)
  ).toLocaleString("id-ID");
  result.classList.add("text-xl", "text-center", "p-5");

  wrapper.append(heading, result);
  return wrapper;
};

calculator.addEventListener("submit", (e) => {
  e.preventDefault();

  const loan = document.getElementById("loan").value;
  const rates = document.getElementById("rates").value;
  const loanDuration = document.getElementById("loan-duration").value;
  const ratesPattern = document.getElementById("rates-pattern").value;

  const ratesCounter = Math.floor(parseFloat(loanDuration / ratesPattern));

  if (isNaN(rates)) {
    alert("Masukkan angka pada input bunga");
    return;
  }

  document.getElementById("loan").value = "";
  document.getElementById("rates").value = "";
  document.getElementById("loan-duration").value = "";
  document.getElementById("rates-pattern").value = "";

  const wrapper = createElement(loan, rates, ratesCounter);

  container.innerHTML = "";
  container.appendChild(wrapper);
});
