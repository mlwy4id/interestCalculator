export default function countTotalInterest(loan, interest, interestCounter) {
  if (interestCounter == 0) return loan;

  return countTotalInterest(
    loan * (1 + interest),
    interest,
    interestCounter - 1
  );
}