import React from 'react'
import classes from './Funds.module.css'

export const Funds = ({ section, isBalancesPage }) => {
  return (
    <div className={classes.container}>
      <h1>0,00</h1>
      <h1>{section}</h1>
    </div>
  )
}
