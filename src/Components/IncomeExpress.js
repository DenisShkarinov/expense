import React from 'react'
import { createUseStyles } from 'react-jss'
import { useContext } from 'react'
import Context from '../context'

const useStyles = createUseStyles({
   incExpBody: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: '.2em',
      boxShadow: '0 0px 2px 1px rgba(0,0,0,.5)',
      width: '100%',
      padding: '1em',
      margin: '1.5em 0',
      textAlign: 'center'
   },
   income: {
      flexGrow: 1,
      '& h4': {
         paddingBottom: '.8em'
      }
   }, 
   express: {
      flexGrow: 1,
      '& h4': {
         paddingBottom: '.8em'
      }
   },
   money: {

   },
   plus: {
      color: 'green'
   },
   minus: {
      color: 'red'
   }
})

const IncomeExpress = () => {
   const classes = useStyles()
   const {data} = useContext(Context)
   
   const amounts = data.map(transaction => +transaction.amount)

   const income = amounts
   .filter(item => item > 0)
   .reduce((acc, item) => (acc += item), 0)
   .toFixed(2)

   const express = amounts
   .filter(item => item < 0)
   .reduce((acc, item) => (acc += item), 0)
   .toFixed(2)

   return (
      <div className={classes.incExpBody}>
         <div className={classes.income}>
            <h4>Income</h4>
            <p className={classes.money + ' ' + classes.plus}>+${income}</p>
         </div>
         <div className={classes.express}>
            <h4>Expense</h4>
            <p className={classes.money + ' ' + classes.minus}>-${express}</p>
         </div>
      </div>
   )
}

export default IncomeExpress