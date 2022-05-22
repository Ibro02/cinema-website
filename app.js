let allTotal = 0;

function watch(element) {
  let main = element.closest("div");
  let price = main.querySelector(".price").innerText;
  let priceColor = main.querySelector(".price");
  let itemName = element.closest(".film-image").querySelector("h3").innerHTML;
  let nameColor = element.closest(".film-image").querySelector("h3");
  let dollarPosition = price.indexOf("$");
  price = price.substring(0, dollarPosition);
  price = parseFloat(price);
  allTotal += price;
  let total = document.querySelector(".total");
  total.innerHTML = `<h1>Total Spent: $${allTotal.toFixed(2)}</h1>`;
  total.style.color = "white";
  total.style.letterSpacing = "2px";

  //Unable the box
  let unable = document.querySelectorAll(".film-box");
  unable.forEach(function (unab) {
    let name = unab.querySelector(".film-name").innerText;

    if (itemName === name) {
      element.setAttribute("disabled", true);
      element.innerText = "Pregledan!";
      unab.style.backgroundColor = "black";
      nameColor.style.color = "white";
      priceColor.style.color = "white";
    }
    console.log(unab);
    console.log(name);
  });
  //console.log("Odabrani film: " + itemName);
  console.log(nameColor);
}
