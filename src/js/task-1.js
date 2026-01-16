const subChoice = document.querySelector("#drink");
const output = document.querySelector(".output");
subChoice.addEventListener("change", (event) => {
  let userTypeDrink = "";

  const userDrink = event.target.value;

  switch (userDrink) {
    case "drinkKofee":
      userTypeDrink = "Кава";
      break;
    case "drinkTea":
      userTypeDrink = "Чай";
      break;
    case "drinkJuice":
      userTypeDrink = "Сік";
      break;
    default:
      console.error("Треба обрати ваш улюблений напій!");
  }

  const textMessage = `Ви обрали: ${userTypeDrink}`;
  output.textContent = textMessage;
});
