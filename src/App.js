import { useState, useEffect } from 'react'
import Tracker from './Components/Tracker'
import Context from './context'

const AppContext = Context

function App() {
  const [transaction, setTransaction] = useState('')
  const [amount, setAmount] = useState(undefined)
  const [data, setData] = useState([])
  
  useEffect(() => {
    getFromLocal()
  }, [])

  useEffect(() => {
    saveInLocal()
  }, [data])

  const deleteItem = (arr) => {
    setData(data.filter(el => el.id !== arr.id))
  }

  const saveInLocal = () => {
    localStorage.setItem("transaction", JSON.stringify(data))
  }

  const getFromLocal = () => {
    if (localStorage.getItem('transaction') === null) {
      localStorage.setItem('transaction', JSON.stringify([]))
    } else {
      console.log(localStorage.getItem('transaction'))
      let transaction = JSON.parse(localStorage.getItem('transaction'))
      setData(transaction)
    }
  }

  return (
    <AppContext.Provider value={{
      setTransaction, setAmount, setData, data, transaction, amount, deleteItem
    }}>
      <div className="App">
        <Tracker />
      </div>
    </AppContext.Provider>
      
    
  );
}

export default App;
