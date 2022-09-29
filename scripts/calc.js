const initialPrice = document.querySelector(".initial-price");
const finalPrice = document.querySelector(".price");
const discount = document.querySelector(".discount");

const initialPriceNumber = initialPrice.innerText.replace("$", "");
const finalPriceNumber = finalPrice.innerText.replace("$", "");

discount.innerText = `Save ${Math.round(
  100 - (Number(finalPriceNumber) / Number(initialPriceNumber)) * 100
)}%!`;
