# Banking Application Project

![Title and logo for the banking app](https://github.com/devalexbd/bankingapp/blob/main/src/documentation/title.JPG?raw=true)

An assignment during my time at Iungo Solutions.

The aim of this project was to create a banking app that could accept number inputs from the user and add/take away from the account balance.
The application must not allow the user to break it by: using non-numerical characters, taking away more than the balance, using negative numbers to also reduce the balance to below zero.

I was given the extra task of completing this using TypeScript instead of JavaScript, making this my first time using the language.

----

### Languages used:
 - HTML
 - CSS & SCSS
 - TypeScript

### Framework used:
 - React.js

### Packages used:
 - gh-pages
 - sass

----

## Number Input

![Screenshot of input and buttons](https://github.com/devalexbd/bankingapp/blob/main/src/documentation/screenshot1.JPG?raw=true)

The h4 (balance display) and input field are kept in a seperate component called Balance.tsx. The detectInput function is passed as a prop to Balance.tsx and is used in the input field's event handler "onChange".
In App.tsx, detectInput uses e.target.value to set the userInput useState to its value. It is also converted to the type of Number so that it can be used to subtract or add to the balance using the Withdraw() and Deposit() functions.

----

## Preventing Issues

![Screenshot of an alert when the user tries to withdraw too much](https://github.com/devalexbd/bankingapp/blob/main/src/documentation/screenshot2.JPG?raw=true)

### Withdraw() - Too much money

When the user inputs a number larger than the balance and clicks "withdraw", a trycatch contains the condition if(userInput > numDisplay) to detect this. When the condition is met, it doesn't perform a calculation and instead returns an error to the user saying "${userInput} is more than your balance."

### Withdraw() & Deposit() - Negative number

When the user inputs a negative number, the trycatch contains the condition if(userInput < 0). Once again, the calculation is not carried out and instead throws an error to notify the user they cannot do this. Before implementing this condition, using negative numbers and depositing them would cause the balance to go below 0, circumventing the condition if(userInput > NumDisplay) due to the input number being less than the display.

### Withdraw() & Deposit() - Not numbers

Both function start their trycatches with if(NaN(userInput)), meaning that if the userInput makes this condition true then it will not calculate anything and throw the error "This is not a number". This stops the page from trying to calculate using an incorrect type and causing the display to return "£NaN".
