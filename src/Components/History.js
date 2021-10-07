import { createUseStyles } from "react-jss"
import { useContext } from "react"
import Context from '../context'

const useStyle = createUseStyles({
   historyTitle: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '.5em',
      borderBottom: '1px solid #555'
   },
   list: {
      marginBottom: '1.5em',
      width: '100%',
      
      '& h3': {

      },
      '& li': {
         position: "relative",
         display: "flex",
         justifyContent: "space-between",
         backgroundColor: '#fff',
         padding: '.5em',
         marginBottom: '.5em',
         paddingRight: '2.5em'
      },
   },
   negative: {
      color: 'red'
   },
   positive: {
      color: 'green'
   },
   deleteBtn: {
      position: 'absolute',
      right: 0, top: 0,
      padding: 10,
      textTransform: 'uppercase',
      color: '#fff',
      background: 'red'
   }
})

const History = () => {
   const classes = useStyle()
   const {data, deleteItem} = useContext(Context)

   return (
      <>
         <h3 className={classes.historyTitle}>History</h3>
         <ul className={classes.list}>
         {
            data.map(item => (
               <li key={item.id}>
                  {item.transactionName}: <span className={(item.amount[0] === '-') ? classes.negative : classes.positive}>$ {item.amount}</span>
                  <button className={classes.deleteBtn} onClick={() => deleteItem(item)}>x</button>
               </li>
            ))
         }
         </ul>
      </>
      
   )
}
export default History