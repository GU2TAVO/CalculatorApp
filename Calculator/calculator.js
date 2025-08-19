function addToDisplay(value) { //Updates display when clicking buttons
    document.getElementById("calculatorDisplay").value += value;
}

function clearDisplay() { //Function to clear the entire display
    document.getElementById("calculatorDisplay").value = "";
}

function deleteLast() { //Function to delete the last character
    let display = document.getElementById("calculatorDisplay");
    display.value = display.value.slice(0, -1);
}

function calculateResult() { //Function to calculate
    try {
        let display = document.getElementById("calculatorDisplay");
        display.value = eval(display.value); //Evaluates the math expression
    } catch (error) {
        display.value = "Error";
    }
}