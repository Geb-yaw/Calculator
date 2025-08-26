const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      display.value = "";
    } else if (button.textContent === "=") {
      // Validate expression contains only numbers, operators, parentheses, and dot
      if (/^[0-9+\-*/().\s]+$/.test(display.value)) {
        display.value = eval(display.value);
      } else {
        display.value = "Error";
      }
    } else {
      display.value += button.textContent;
    }
    if (display.value.includes("/0")) {
      display.value = "Undefined";
    }
  });
});
