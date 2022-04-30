# Handheld Calculator Web Application

## Goals

Build a simple, functioning calculator that is accessible
from any browser and behaves like a handheld, standard calculator.

### Features

#### Keypad for 0-9

We'll introduce the keypad to type in digits ranging from
0 to 9.

##### Behaviours

Pressing the '0' key while the calculator displays 0 will do nothing.

Pressing the '1' to '9' keys while the calculator displays 0 will change it to the number pressed.

Pressing any number will append that number to the end of the display, until a total of 12 digits are hit, at which point, pressing any number will do nothing.

#### Clear Button

Just like the traditional calculators, this comes with an AC button to clear the display and go back to 0.

#### Add, Subtract, Multiply, Divide

4 basic operations. To apply one of these operators, enter a number, press any one of these, then enter another number. Afterwards, press the equal button to evaluate and get the result.

##### Repeat Operation

Some calculators allow you to repeat specific operations on them.

For example, after adding 2 numbers and pressing the equal button, you can press the equal button again and then 2nd number you entered earlier will be added to the result.

#### Decimal Button

Pressing the decimal button will place a period where the digit is.

For example, if the display shows 1234, then pressing the decimal button places the decimal after 4. So numbers after 4 belong to the decimal place.

If there are already 12 digits on the display, the decimal button does nothing.

Also, if the decimal button is pressed but no additional digits are entered, then the decimal is ignored in calculations because there is no decimal portion for the number.

If a decimal has already been placed on the display, additional presses of the decimal button are ignored.
