export default function countFined(fined, finedDuration, finedPattern) {
  const finedCount = Number(finedDuration / finedPattern);
  console.log(fined * finedCount);
  return fined * finedCount;
}
