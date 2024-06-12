import React from 'react'
import useForm from './hooks/useForm'
import validate from '../utils/Validate'

const FormSignup = () => {
  const{handleChange,values,handleSubmit,errors}=useForm(validate)
 
  return (

    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create your Account</h1>
        <div className="form-inputs">
            <label  htmlFor="username" className='form-label'>
                Username
            </label>
            <input
              id='username'
              type='text'
              name='username'
              className='form-input'
              placeholder='Enter you username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p> {errors.username}</p>}
        </div>
        <div className='form-inputs'>
            <label htmlFor='email' className='form-label'>
                Email
            </label>
            <input
              id='email'
              type='text'
              name='email'
              className='form-input'
              placeholder='Enter you email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p> {errors.email}</p>}

        </div>
        <div className='form-inputs'>
            <label htmlFor="password" className='form-label'> 
                Password
            </label>
            <input
              id='password'
              type='password'
              name='password'
              className='form-input'
              placeholder='Enter you password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p> {errors.password}</p>}
        </div>
        <div className='form-inputs'>
            <label htmlFor="password2" className='form-label'> 
                Conform password
            </label>
            <input
              id='password2'
              type='password'
              name='password2'
              className='form-input'
              placeholder='Enter you Conform password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p> {errors.password2}</p>}

        </div>
        <button >
         Sign up
       </button>  
        
        <span className='form-input-login'>
            Already have an account? <a href='https://www.google.com'>Google</a>
            
        </span>
    </form>
   </div>
   
);
}

  

export default FormSignup
