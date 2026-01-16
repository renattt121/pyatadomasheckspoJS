const userMonth = prompt("Enter your birth month (1-12):");
let season;
switch (userMonth) {
  case 12:
  case 1:
  case 2:
    alert("Вы ввели зимний месяц");
    break;
  case 3:
  case 4:
  case 5:
    alert("Вы ввели весенний месяц");
    break;
  case 6:
  case 7:
  case 8:
    alert("Вы ввели летний месяц");
  case 9:
  case 10:
  case 11:
    alert("Вы ввели осенний месяц");
    break;
  default:
    alert("Кажется, вы ошиблись при вводе месяца. Попробуйте еще раз.");
}
