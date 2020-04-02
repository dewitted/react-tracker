import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Flex } from '../shared/Flex/Flex'
import classes from './Balance.module.css'
import { CreateBalanceModal } from '../CreateBalanceModal/CreateBalanceModal'

export const Balance = () => {
  const currentBalance = useSelector(state => state.balance)
  const isBalance = !!currentBalance.length
  const [isModalOpen, setisModalOpen] = useState(false)
  const toggleModalHandler = () => setisModalOpen(!isModalOpen)
  return (
    <Flex justify='space-between' align='center' className={classes.container}>
      <div className={classes.picture}></div>
      <div className={classes.balance}>
        {isBalance ? <div>{currentBalance.currentBalance}</div> : '0.00'}
        <h1>Your balance</h1>
      </div>
      <div className={classes.spreadButton} onClick={toggleModalHandler}></div>
      <CreateBalanceModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModalHandler}
      />
    </Flex>
  )
}
