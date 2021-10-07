import { useContext } from "react"
import Context from "../context"

const Balance = () => {
   const {data} = useContext(Context)
   let total = 0
   if (data.length > 0) {
      const amounts = data.map(item => +item.amount);
      total = amounts.reduce((acc, item) => (acc += item));
   }
   
   return (
      <div>
         <h3>Your balance:</h3>
         <h2>$ {total.toFixed(2)}</h2>
      </div>
   )
}

export default Balance