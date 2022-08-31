import React, {useState, useContext} from 'react'
import { UserContext} from '../../context'
import { useLocalStorage } from '../../hooks'
import s from './Form.module.css'
import { useNavigate } from 'react-router-dom'

const Form: React.FC = () => {

  const userContext = useContext(UserContext)
  const {setLoggedInCB} = userContext
    
    interface User{
        username: string,
        password: string
    }

    const user: User ={
        username: 'admin',
        password: 'admin'
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [userStore, saveUserStore] = useLocalStorage<Record<string, User>>('user', {})
    const navigate = useNavigate()

    const formHandler = (e: any) => {
        e.preventDefault()
        const FormUser: User = {
          username: username,
          password: password,
        } 
        if(JSON.stringify(user) === JSON.stringify(FormUser)){
          navigate('/')
          setLoggedInCB(true)
          saveUserStore({user: FormUser})
        }else{
          setError(true)
          setUsername('')
          setPassword('')
          setTimeout(() => {
            setError(false)
          }, 3000)
        }
    } 

  return (
    <div className={s.container}>
      <h3>username: admin</h3>
      <h3>password: admin</h3>
      <form onSubmit={(e) => formHandler(e)}>
        <label>
            Username
        <input onChange={(e) => setUsername(e.target.value)} value={username} data-testid="username" placeholder={'username'} className={s.input} type='text'></input>
        </label>
        <label>
            Password
        <input data-testid="password" placeholder={'password'} value={password} onChange={(e) => setPassword(e.target.value)} className={s.input} type='password'></input>
        </label>
        <button className={s.button} type='submit'>Login</button>
        {error ? <h3 data-testid="error message">Error Incorrect username and or password</h3> : <></> }
      </form>
    </div>
  )
}

export default Form
