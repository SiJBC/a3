import React, {useContext} from 'react'
import { UserContext } from '../../context'
import s from './HeaderActions.module.css'
import { useNavigate, useLocation } from 'react-router-dom'


const HeaderActions: React.FC = () => {

  const {loggedIn} = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className={s.actions}>
      {
        loggedIn || location.pathname.split('/')[1] === 'login' ? 
        <></>
        :
        <button onClick={() => navigate('/login')} className={s.action}>Login</button>        
      }
      {
        loggedIn && location.pathname.split('/')[1] === '' ? <button onClick = {() => navigate('/games')} className={s.action}>Previous Games</button>
        :
        <></>
      }
      
    </div>
  )
}

export default HeaderActions
