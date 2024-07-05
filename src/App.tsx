import { ChangeEvent, useState } from 'react'
import './App.css'
import Bank from './components/Bank.tsx'
import Button from './components/Button.tsx'

function App() {

  // Establish State variable to hold and manipulate the user's input
  const [userInput, setUserinput] = useState(0)
  // Establish State variable to hold and manipulate the displayed balance
  const [numDisplay, setNumdisplay] = useState(100)

  /**
   * When combined with OnChange, this function detects every time a
   * change occurs on the input field and sets it to userInput
   * @param e Event parameter: listens to all events in an element.
   */
  function detectInput(e: ChangeEvent<HTMLInputElement>){
    setUserinput(Number(e.target.value))
    // For testing purposes
    console.log('Key press.')
  }

  /**
   * Performs tests: if the input is incorrect.
   * Then: Takes away user's input from displayed balance.
   */
  function Withdraw(){
    try{
      // Attempt an operation
      if(isNaN(userInput)){
        // Create a custom Error: if input is not a number
        throw new Error(`${userInput} is Not a Number`)
      }
      // If the user input is below 0 (a negative number)
      // This prevents a workaround where the user could use negative
      // numbers to achieve a negative bank balance.
      if(userInput < 0){
        throw new Error(`Please do not enter negative numbers.`)
      }
        // Error: if number is larger than balance
      if(userInput > numDisplay){
        throw new Error(`${userInput} is more than your balance.`)
      }
        // After all previous ifs, execute the intended function
        // Number() ensures that values are converted to type Number
        // in order to correctly perform math functions.
      setNumdisplay(Number(numDisplay) - Number(userInput))
    } catch(error){
      //if something still goes wrong, catch the error
      alert((error as Error).message)
    }
  }

  /**
   * Performs tests: if the input is incorrect.
   * Then: Adds the user's input to the displayed balance.
   */
  function Deposit(){
    try{
      if(isNaN(userInput)){
        throw new Error(`${userInput} is Not a Number`)
      }
      if(userInput < 0){
        throw new Error(`Please do not input negative numbers.`)
      }
      setNumdisplay(Number(numDisplay) + Number(userInput))
    } catch(error) {
      alert((error as Error).message)
    }
  }

  // The mark-up to be rendered on-screen
  return (
    <>
      <div id="main">
        <img src="src\assets\logo.png" alt="Logo" />
        <h1>Welcome to the Bank</h1>
        <p id="subtitle">The Totally Legitimate Bank.</p>

        {/* Calling the components to be displayed */}
        <Bank
        // Assigning the variables and functions to be used as props in
        // child components.
        balance={numDisplay}
        action={detectInput}
        />
        <Button
        label={'Withdraw'}
        action={Withdraw}
        />
        <Button
        label={'Deposit'}
        action={Deposit}
        />

      </div>
    </>
  )
}

export default App