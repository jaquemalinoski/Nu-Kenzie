import React from "react"
import numeral from "numeral"

numeral.register('locale', 'pt-br', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'mil',
    million: 'milhões',
    billion: 'b',
    trillion: 't',
  },
  ordinal: function (number) {
    return 'º'
  },
  currency: {
    symbol: 'R$',
  },
})

numeral.locale('pt-br')

function FormatNumber ({format, children}) {

  return (
    <span className="total">R$ {numeral(children).format(format)}</span>
  )
}

export default FormatNumber