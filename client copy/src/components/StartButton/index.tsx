import React, {useState, useEffect} from 'react'
import s from "./StartButton.module.css"
import { useNavigate } from 'react-router-dom'
import {useLocalStorage} from '../../hooks'

interface props{
  loggedIn?: boolean
  boardSize?: number
}

 const StartButton: React.FC<props> = ({boardSize ,loggedIn}: props) => {
  const navigate = useNavigate()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [buttonClass, setButtonClass] = useState<string>(`${s.container} ${s.disabled}`)
  const [_, saveBoardSizeStore] = useLocalStorage<
    Record<string, number | undefined>
  >('boardSize', {})
  

  useEffect(() => {
    if(loggedIn) {
      setButtonClass(`${s.container}`)
      setButtonDisabled(false)};
  },[loggedIn])
  
  const handleClick = () =>{
    saveBoardSizeStore({'boardSize': boardSize})
    navigate('/game')
  }

  return (
    <button disabled={buttonDisabled} onClick={handleClick} className={buttonClass}>Start</button>
  )
}

export default StartButton
