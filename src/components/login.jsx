import { useState } from 'react'
import {Input} from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserStart } from '../slice/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isLoading} = useSelector(state => state.auth)  
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(loginUserStart())
  }

  return (
    <div className='text-center mt-5'>
      <form className="form-signin w-25 m-auto">
      <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
      
      <Input label='Email address' state={email} setState={setEmail}/>
      
      <Input label='Password' type='password' state={password} setState={setPassword}/>
      
      <button 
        className="btn btn-lg btn-primary btn-block mt-2 w-100" 
        type="submit" 
        onClick={submitHandler}
        disabled= {isLoading}>
          {isLoading? 'loading...' : 'Login'}
      </button>
    </form>
    </div>
  )
}

export default Login