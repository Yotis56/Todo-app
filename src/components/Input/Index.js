import React from 'react'

const Input = ({ inputValue, onChangeInput, onSubmitInput }) => {
  return (
    <form className="input-container" onSubmit={onSubmitInput}>
      <input type="text" value={inputValue} onChange={onChangeInput} />
      {/* Tengo que poner acá un icono en el buscador */}
    </form>
  )
}

export { Input }