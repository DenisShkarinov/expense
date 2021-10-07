import React from 'react'
import { createUseStyles } from 'react-jss'
import { useContext } from 'react'
import Context from '../context'

const useStyle = createUseStyles({
   transactionBody: {
      width: '100%',
      '& h3': {
         textAlign: 'center',
         marginBottom: '.5em',
         borderBottom: '1px solid #555'
      }
   },
   formControl: {
      '& label': {
         textTransform: 'capitalize',
         color: '#444'
      },
      
   }, 
   btn: {
      width: '100%',
      padding: '.5em',
      marginTop: '.5em',
      background: '#555',
      color: '#fff',
      fontSize: '1.2em',
      letterSpacing: '1px',
      transition: '.3s ease-out',
      textTransform: 'capitalize',

      '&:hover': {
         color: '#444',
         background: '#fff',
         transition: '.3s ease-in'
      }
   },
   h3: {
      borderBottom: '1px solid #444'
   }
})

const NewTransaction = () => {
   const classes = useStyle()
   const {setTransaction, setAmount, setData, data, transaction, amount} = useContext(Context)

   const handleTransaction = (e) => {
      setTransaction(e.target.value)
   }

   const handleAmount = (e) => {
      setAmount(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      if (transaction !== '' && isFinite(amount)) {
         setData([
            ...data, {id: Math.floor(Math.random() * 100000), transactionName: transaction, amount: amount}
         ])
         setTransaction('')
         setAmount(undefined)
      } else return
      
   }

   return (
      <div className={classes.transactionBody}>
         <h3>Add new transaction</h3>
         <form onSubmit={(e) => handleSubmit(e)}>
            <div className={classes.formControl}>
               <label htmlFor="text">Text: </label>
               <input type="text" id="text" onChange={(e) => handleTransaction(e)} placeholder="Enter text..."/>
            </div>
            <div className={classes.formControl}>
               <label htmlFor="amount">Amount (negative - expense, positive - income)</label>
               <input type="number" id="amount" onChange={(e) => handleAmount(e)} placeholder="Enter amount..." />
            </div>
            <button className={classes.btn} type="submit">Add transaction</button>
         </form>
      </div>
   )
}

export default NewTransaction