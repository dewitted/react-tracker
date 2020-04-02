import React, { useState } from 'react'
import classes from './Entry.module.scss'
import { Flex } from '../../components/shared/Flex/Flex'

export const Entry = () => {
  // goes to utils
  const numPadNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const errorsExample = {
    chars: ''
  }
  const [error, setError] = useState([])
  const [currentNumber, setCurrentNumber] = useState(0)
  const [category, setCategory] = useState(['Water', 'Car', 'Leisure', 'Food'])

  const numPadHandler = numPadNumber => {
    let current = 0
    if (currentNumber == 0) {
      current = numPadNumber / 100
      console.log(current)
    } else {
      current = currentNumber * 10 + numPadNumber / 100
    }
    current = current.toFixed(2)
    if (current.toString().length < 10) {
      setCurrentNumber(current)
      setError('correct')
    } else {
      setError('incorrect')
    }

    console.log(current)
  }

  const deleteCurrentNumber = () => {
    setCurrentNumber(0)
    setError('correct')
  }

  return (
    <div className={classes.mainNumberpadContainer}>
      <div className={classes.headerButtons}>
        <div className={classes.headButtonsStyle} id={classes.goBack}></div>
        <div className={classes.headButtonsStyle} id={classes.addSum}></div>
      </div>
      <div className={classes.inputContainer}>
        <div className={classes.delete} onClick={deleteCurrentNumber}></div>
        <Flex className={classes.inputCover} color={error}>
          <h1>{currentNumber}</h1>
        </Flex>
        {/* <input placeholder='$0.00' value={currentNumber} /> */}
      </div>
      <div className={classes.numPad}>
        <div className={classes.categoryButtonsContainer}>
          {category.map(catName => (
            <div key={catName} className={classes.catButtons}>
              {catName}
            </div>
          ))}
        </div>
        <div className={classes.divider}></div>
        <div className={classes.numbers}>
          {numPadNumbers.map(numPadNumber => (
            <div
              className={classes.number}
              key={numPadNumber}
              onClick={() => numPadHandler(numPadNumber)}
            >
              {numPadNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
