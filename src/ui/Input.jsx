import React from 'react'

const Input = ({state, setState, label, type="text"}) => {
  return (
    <div className='form-floating'>
        <input 
        type={type} 
        className="form-control mb-2" 
        value={state}
        onChange={e => setState(e.target.value)}
        id='floatingInput'
        placeholder={label} 
    />
    <label htmlFor="floatingInput">{label}</label>
    </div>
    
  )
}

export default Input