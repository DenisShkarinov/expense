import { createUseStyles } from 'react-jss'
import Balance from './Balance'
import IncomeExpress from './IncomeExpress'
import History from './History'
import NewTransaction from './NewTransaction'

const useStyles = createUseStyles({
   trackerBody: {
      maxWidth: 370,
      width: 100 + '%',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1em',
      boxShadow: '0 0 4px 2px rgba(0,0,0,.1)'
   },
   trackerTitle: {
      padding: '1em',
      marginBottom: '1em',
      boxShadow: '0 0px 3px 0px rgba(0,0,0,.5)'
   }
})

const Title = (props) => {
   const classes = useStyles()
   return (
      <div className={classes.trackerTitle}>
         <h1>{props.title}</h1>
      </div>
      
   )
}

const Tracker = () => {
   const classes = useStyles()
   return (
      <div className={classes.trackerBody}>
         <Title title="Expense Tracker" />
         <Balance />
         <IncomeExpress />
         <History />
         <NewTransaction />
      </div>
   )
}
export default Tracker