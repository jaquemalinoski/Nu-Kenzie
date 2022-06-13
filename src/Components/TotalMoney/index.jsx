import FormatNumber from "../FormatNumber"

function TotalMoney ({listTransactions}) {

  const total = listTransactions.reduce((acc, currentValue) => acc + Number(currentValue.value), 0)

  return (
    <div className="divTotal">
      <h4 className="total">Valor total:</h4>
      <FormatNumber className="total" format={'0.0,'}>{total}</FormatNumber>
      {/* <span className="total">R$ {total.toFixed(2)}</span> */}
    </div>
  )
}

export default TotalMoney