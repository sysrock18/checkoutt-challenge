import React from 'react'

function FormUser(props) {
  return (
    <section className="FormUser">
      <h3>Ingresa tus datos</h3>

      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" />

      <label htmlFor="dni">DNI</label>
      <input type="number" id="dni" />
    </section>
  )
}

export default FormUser