import React from 'react'
import FormSignup from './FormSignup'
import "./Form.css"

const Form = (validate) => {
  return (
    <>
    <div className='form-container'>
      <span className='close-btn'>x</span>
      <div className='form-content-left'>
      </div>
      <FormSignup/>
    </div>
      
    </>
  )
}

export default Form
