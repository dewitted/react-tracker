import React from 'react'
import classes from './Flex.module.css'
import { justifyHelper, alignHelper } from './utils'

export const Flex = ({
  children,
  justify,
  className,
  align,
  wrap,
  direction,
  color
}) => {
  const styles = [classes.flex, className]
  justifyHelper(styles, justify, classes)
  alignHelper(styles, align, classes)
  switch (direction) {
    case 'column':
      styles.push(classes.column)
      break
    default:
      break
  }
  switch (color) {
    case 'incorrect':
      styles.push(classes.incorrect)
      break
    case 'correct':
      styles.push(classes.correct)
      break
    default:
      break
  }
  switch (wrap) {
    case 'nowrap':
      styles.push(classes.noWrap)
      break
    case 'wrap':
      styles.push(classes.wrap)
      break
    default:
      break
  }
  return <div className={styles.join(' ')}>{children}</div>
}
