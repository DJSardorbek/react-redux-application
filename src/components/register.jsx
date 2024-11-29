import { useState } from 'react'
import {Input} from '../ui'

const Register = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='text-center d-flex align-items-center justify-content-center'>
      <form className="form-signin w-25 mt-5">
      <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
      
      <Input label='Username' state={userName} setState={setUserName}/>

      <Input label='Email' state={email} setState={setEmail}/>
      
      <Input label='Password' type='password' state={password} setState={setPassword}/>
      
      <button className="btn btn-lg btn-primary btn-block mt-2 w-100" type="submit">Register</button>
    </form>
    </div>
  )
}

export default Register