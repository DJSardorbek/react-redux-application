import { useState } from 'react'
import {Input} from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import AuthService from '../service/auth'
import {ValidationError} from './'

const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isLoading} = useSelector(state => state.auth)  
  const dispatch = useDispatch()

  const registerHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username: userName, password, email}
    try {

      const response = await AuthService.userRegister(user)
      dispatch(signUserSuccess(response.user))
    
    } catch (error) {

      dispatch(signUserFailure(error.response.data.errors))

    }
  }

  return (
    <div className='text-center d-flex align-items-center justify-content-center'>
      <form className="form-signin w-25 mt-5">
      <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
      <ValidationError/>
      <Input label='Username' state={userName} setState={setUserName}/>

      <Input label='Email' state={email} setState={setEmail}/>
      
      <Input label='Password' type='password' state={password} setState={setPassword}/>
      
      <button 
        className="btn btn-lg btn-primary btn-block mt-2 w-100" 
        type="submit" 
        onClick={registerHandler}
        disabled= {isLoading}>
          {isLoading? 'loading...' : 'Register'}
      </button>
    </form>
    </div>
  )
}

export default Register