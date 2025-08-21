import countTotalInterest from "../utils/countInterest.mjs";

const createElement = (loan, interest, interestCounter, fined) => {
  const wrapper = document.createElement("div");
  const heading = document.createElement("h3");
  const result = document.createElement("p");

  heading.innerText = "Hasil:";
  heading.classList.add("text-3xl", "font-bold", "text-center");

  result.innerText = parseFloat(
    countTotalInterest(
      parseFloat(loan),
      parseFloat(interest),
      Number(interestCounter)
    ) + fined
  ).toLocaleString("id-ID");
  result.classList.add("text-xl", "text-center", "p-5");

  wrapper.append(heading, result);
  return wrapper;
};

export default createElement;
