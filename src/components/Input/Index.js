import React from 'react'

const Input = ({ inputValue, onChangeInput }) => {
  return (
    <div className="input-container">
      <input type="text" value={inputValue} onChange={onChangeInput} />
      {/* Tengo que poner acá un icono en el buscador */}
    </div>
  )
}

export { Input }