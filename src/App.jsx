import { useState } from 'react'
import './App.css'
import Button from './button/button'
import DoButton from './doButton/doButton'

function App() {
  let [symbol, newSymbol] = useState( )
  let [number, newNumber] = useState(0);
  let [anNumber, newAnNumber] = useState( )
  let [counting, newCounting] = useState( )
  let numberObject = {}

  function count(e) {

    if (number == 0) {
      number = " "
    }

    let num = e.target.innerHTML
    let stringNumber = num.toString() 

    newNumber(number + stringNumber)

  }

  function plus(whatSymbol) {
    numberObject.firstNumber = Number(number)
    newCounting(numberObject.firstNumber)
    newSymbol(whatSymbol.target.innerHTML)
    newNumber(" ")
  }
  
  function equals() {
    numberObject.secondNumber = Number(number)
    newAnNumber(numberObject.secondNumber)
    let answer = eval(Number(counting).toString() + symbol + numberObject.secondNumber.toString() )
    newNumber(answer)
  }

  function clear() {
    newCounting()
    newSymbol()
    newAnNumber()
    newNumber(0)
    numberObject.secondNumber = 0
    numberObject.firstNumber = 0
    
  }

  function Delete() {
    newNumber(number.slice(0, -1))
  }

  return (

    
    <>
      <div className='calculator'>

        <div className='resultWindow'>
          <p>{counting} {symbol} {anNumber} {anNumber != null ? "=" : " "}</p>
          <p>{number}</p>
        </div>

        <div className='calculatorBody'>
          
          <div className='calculatorNumbers'>
            <div className='calcNumbers_line'>
              <Button onClick={e => count(e)}>1</Button>
              <Button onClick={e => count(e)}>2</Button>
              <Button onClick={e => count(e)}>3</Button>
            </div>

            <div className='calcNumbers_line'>
              <Button onClick={e => count(e)}>4</Button>
              <Button onClick={e => count(e)}>5</Button>
              <Button onClick={e => count(e)}>6</Button>
            </div>

            <div className='calcNumbers_line'>
              <Button onClick={e => count(e)}>7</Button>
              <Button onClick={e => count(e)}>8</Button>
              <Button onClick={e => count(e)}>9</Button>
            </div>

            <div className='calcNumbers_line'>
              <Button onClick={e => count(e)}>0</Button>
            </div>

          </div>

          <div className='calculatorDoings'>
            <Button className={"text-button"} onClick={() => Delete()}>Delete</Button>
            <Button className={"text-button"} onClick={() => clear()}>Clear</Button>
            <DoButton onClick={(whatSymbol) => plus(whatSymbol)}>/</DoButton>
            <DoButton onClick={(whatSymbol) => plus(whatSymbol)}>*</DoButton>
            <DoButton onClick={(whatSymbol) => plus(whatSymbol)}>-</DoButton>
            <DoButton onClick={(whatSymbol) => plus(whatSymbol)}>+</DoButton>
            <DoButton className={"blue"} onClick={() => equals()}>=</DoButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
