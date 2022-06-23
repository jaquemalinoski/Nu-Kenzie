import './style.css'

function Form ({listTransactions, setListTransactions}) {
 
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    data.type === 'Saida' ? data.value = -data.value : data.value = +data.value

    setListTransactions([...listTransactions, data])

    for (let i = 0; i < event.target.length; i++) {
      if (event.target[i].name) {
        event.target[i].value = ''
      }
    }
  }

  return (
    <div className='divForm'>
    <form className='form' onSubmit={handleSubmit}>

      <div className='divDescription'>
        <label className='description'>Descrição</label>
        <input className='inputDescription' type='text' name='description' placeholder='Digite aqui sua descrição' required/>
        <span>Ex: Compra de roupas</span>
      </div>

      <div className='divValue'>
          <label className='description'>Valor
          <input className='inputValue' type='number' name="value" placeholder='R$' required/>
          </label>
          <label className='description'>Tipo de Valor 
          <select id='select' name="type" required>
            <option value='Entrada' >Entrada</option>
            <option value='Saida' >Saída</option>
          </select>
          </label>
      </div>
      <button className='btnSubmit' type='submit'>Inserir Valor</button>
    </form>
  </div>
  )
}

export default Form