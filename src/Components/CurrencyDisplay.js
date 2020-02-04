import React from 'react'


const CurrencyDisplay = (props) => (
    <p>
    US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
    {currencyData.symbol}
    {(amount* currencyData.rate).toFixed(2)}
  </p>
)

export default CurrencyDisplay