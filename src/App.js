import './App.css';
import { useState } from 'react'
import Dashboard from './Dashboard/Dashboard';
import WelcomePage from './WelcomePage/WalcomePage';

function App() {

  const [loged, setLoged] = useState(false)
  const [listTransactions, setListTransactions] = useState([])

  return (

    loged === false ? (
        <WelcomePage setLoged={setLoged}/>
      ) : (
        <Dashboard listTransactions={listTransactions} setListTransactions={setListTransactions} setLoged={setLoged}/>
    )
  )
}

export default App