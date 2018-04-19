import React from 'react'

function CheckoutFooter(props) {
  return (
    <section className="CheckoutFooter">
      <div className="checkoutData">
        <p>Subtotal: S/ 52.00</p>
        <p>IGV: S/ 5.00</p>
        <p>Total: S/ 57.00</p>
      </div>
      <button className="nextButtton">Siguiente</button>
    </section>
  )
}

export default CheckoutFooter