import Form from '../Components/Form'
import List from '../Components/List'
import TotalMoney from '../Components/TotalMoney'
import HeaderDashboard from '../Components/HeaderDashboard'

function Dashboard ({listTransactions, setListTransactions, setLoged}) {

  return (

  <div className="App">
    <header className="App-header">
      <HeaderDashboard setLoged={setLoged}/>
    </header>
    <main>
        <div>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          <TotalMoney listTransactions={listTransactions}/>
        </div>

        <div className='divList'>
          <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>

        </div>
    </main>
  </div>
  )
}

export default Dashboard