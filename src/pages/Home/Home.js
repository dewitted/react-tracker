import React, { useState } from 'react'
import { Flex } from '../../components/shared/Flex/Flex'
import classes from './Home.module.css'
import { Balance } from '../../components/Balance/Balance'
import { Funds } from '../../components/Funds/Funds'
import { useSelector } from 'react-redux'

const Home = () => {
  const [balances, setBalances] = useState([
    'Fixed Costs',
    'Flexible',
    'Savings',
    'Expenses'
  ])
  // const balances = useSelector(state => state.balance)
  const isBalance = true
  //Will go to utils !!balances.length
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  today = mm + '/' + dd + '/' + yyyy
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const d = new Date()
  //Will go to utils
  return (
    <Flex
      justify='space-between'
      align='center'
      direction='column'
      className={classes.home}
    >
      {/* This shows my balance */}
      <div className={classes.balance}>
        <Balance></Balance>
      </div>
      {/* This shows my Stat Tracker */}
      <div className={classes.statTrack}></div>

      <h1>
        Budget {today} for {monthNames[d.getMonth()]}
      </h1>
      {/* This shows how i chose to split my current finances */}
      <div className={classes.splitFunds}>
        {isBalance ? (
          balances.map(section => (
            <Funds isBalancesPage key={section} section={section} />
          ))
        ) : (
          <h1>Sorry, no visible balances!</h1>
        )}
      </div>
    </Flex>
  )
}

export default Home
