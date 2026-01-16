const userColour = prompt("Enter a colour (red, green, blue):").toLowerCase();

switch (userColour) {
    case "red":
        alert("стоп");
        break;
    case "green": 
        alert("йти");
        break;
    case "yellow":
        alert("чекати");    
        break;
    default:
        alert("Невідомий колір. Будь ласка, введіть red, green або yellow.");
}