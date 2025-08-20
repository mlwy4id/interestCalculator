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
const calculator = document.getElementById("interest-calculator");
const container = document.getElementById("container");

function countTotalInterest(loan, interest, interestCounter) {
  if (interestCounter == 0) return loan;

  return countTotalInterest(loan, interest, interestCounter - 1) + loan * interest;
}

const createElement = (loan, interest, interestCounter) => {
  const wrapper = document.createElement("div");
  const heading = document.createElement("h3");
  const result = document.createElement("p");

  heading.innerText = "Hasil:";
  heading.classList.add("text-3xl", "font-bold", "text-center");

  result.innerText = countTotalInterest(
    Number(loan),
    parseFloat(interest),
    Number(interestCounter)
  ).toLocaleString("id-ID");
  result.classList.add("text-xl", "text-center", "p-5");

  wrapper.append(heading, result);
  return wrapper;
};

calculator.addEventListener("submit", (e) => {
  e.preventDefault();

  const loan = document.getElementById("loan").value;
  const interest = document.getElementById("interest").value;
  const loanDuration = document.getElementById("loan-duration").value;
  const interestPattern = document.getElementById("interest-pattern").value;

  const interestCounter = Math.floor(parseFloat(loanDuration / interestPattern));

  if (isNaN(interest)) {
    alert("Masukkan angka pada input bunga");
    return;
  }

  document.getElementById("loan").value = "";
  document.getElementById("interest").value = "";
  document.getElementById("loan-duration").value = "";
  document.getElementById("interest-pattern").value = "";

  const wrapper = createElement(loan, interest, interestCounter);

  container.innerHTML = "";
  container.appendChild(wrapper);
});
