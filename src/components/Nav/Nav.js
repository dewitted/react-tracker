import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from '../shared/Flex/Flex'
import classes from './Nav.module.css'
export const Nav = () => {
  return (
    <Flex
      justify='space-around'
      className={classes.navContainer}
      align='center'
    >
      <Link className={classes.timeStats} to='/'></Link>
      <Link className={classes.addNew} to='/Entry'></Link>
      <Link className={classes.periods} to='/'></Link>
    </Flex>
  )
}
