let digitsDisplay = document.getElementById("calculator-digits-display");

function tryAddDigit(digit)
{
    if (digitsDisplay.textContent.length >= 12)
    {
        return;
    }

    if (digit === '0' && digitsDisplay.textContent === "0")
    {
        // do nothing
    }
    else
    {
        if (digitsDisplay.textContent === "0")
        {
            // change current digit to the one we pressed
            digitsDisplay.textContent = digit;
        }
        else
        {
            digitsDisplay.textContent += digit;
        }
    }
}

function clearCalculatorDisplay()
{
    digitsDisplay.textContent = "0";
}

let acButtonEl = document.getElementById("ac-button");
acButtonEl.onclick = clearCalculatorDisplay;
