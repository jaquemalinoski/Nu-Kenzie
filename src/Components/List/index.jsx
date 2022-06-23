import TrashIcon from '../img/trash.svg'
import NoCard from '../img/NoCard.svg'
import { useState } from 'react'
import './style.css'

function List ({listTransactions, setListTransactions}) {

  const [choosenList, setChoosenList] = useState('Todos')
  const [filteredList, setFilteredList] = useState([...listTransactions])
  
  function remove (event) {
    const id = event.target.parentNode.parentNode.parentNode.id
    const copyArray = [...listTransactions]

    copyArray.splice(id, 1)

    setListTransactions(copyArray)
  }

  function Filter (event) {

    const id = event.target.id
    const filtered = listTransactions.filter(element => element.type === id)

    setFilteredList(filtered)
    setChoosenList(id)

  }

  function filterAll () {
    setFilteredList([...listTransactions])
    setChoosenList('Todos')
  }

  return (
    
    <>
      <div className='divBtns'>

        <button className={choosenList === 'Todos' ? 'btnClicked' : 'btnAll'} id="Todos" onClick={filterAll}>Todos</button>
        <button className={choosenList === 'Entrada' ? 'btnClicked' : 'btnAll'} id="Entrada" onClick={Filter}>Entradas</button>
        <button className={choosenList === 'Saida' ? 'btnClicked' : 'btnAll'} id="Saida" onClick={Filter}>Saídas</button>

      </div>

      {listTransactions.length === 0 && filteredList.length === 0 ? (
        
      <div className='skeleton'>
        <h1 className='titleList'>Você ainda não possui nenhum lançamento</h1>
        <img src={NoCard} alt='Skeleton' className='skeleton'/>
      </div>

      ) : (
      
      <div>
        <ul>
          {(choosenList !== 'Todos' ? filteredList : listTransactions).map((transaction, index) => (
            <li key={index} id={index}>

              {transaction.type === 'Entrada' ? (
              <hr className='hrGreen' width ={5} size ={80}/>) : (<hr className='hrRed' width ={5} size ={80}/>)}

              <div className="card">
                <h4>{transaction.description}</h4>
                <span className='value'>R$ {transaction.value.toFixed(2)}</span>
                <span id='trash'><img className='trash' src={TrashIcon} alt='Lixeira' onClick={remove}/></span>
              </div>
              
              <div className="container">
                  <span>{transaction.type}</span>
              </div>

            </li>
          )).reverse()}
        </ul>
      </div>
      )}
    </>
  )
}

export default List 