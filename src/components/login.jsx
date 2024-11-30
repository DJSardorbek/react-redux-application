import { useEffect, useState } from 'react'
import {Input} from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'
import AuthService from '../service/auth'
import {ValidationError} from './'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isLoading, loggedIn} = useSelector(state => state.auth)  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {email, password} 
    try {

      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')

    } catch (error) {
      
      dispatch(signUserFailure(error.response.data.errors))

    }
  }
  useEffect(() => {
    loggedIn === true && navigate('/')
  }, [])

  return (
    <div className='text-center mt-5'>
      <form className="form-signin w-25 m-auto">
      <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Please login</h1>
      <ValidationError/>
      <Input label='Email address' state={email} setState={setEmail}/>
      
      <Input label='Password' type='password' state={password} setState={setPassword}/>
      
      <button 
        className="btn btn-lg btn-primary btn-block mt-2 w-100" 
        type="submit" 
        onClick={loginHandler}
        disabled= {isLoading}>
          {isLoading? 'loading...' : 'Login'}
      </button>
    </form>
    </div>
  )
}

export default Login