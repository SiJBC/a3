import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks";
import UserContext from "../context/UserContext";
import {UserType} from '../types'

interface iProps {
    children: React.ReactNode
}

const UserProvider: React.FC<iProps> = 
({children}: iProps) => {
    const [user] = useLocalStorage<any>('user', [])
    const [loggedIn, setLoggedIn] = useState<boolean | undefined>(user.user !== undefined)
    const setLoggedInCB = (loggedIn?: boolean) => {
        setLoggedIn(loggedIn)
    }
    
    const userVal: UserType = {
        loggedIn,
        setLoggedInCB,
    }

    useEffect(() => {
            if(user !== undefined){
                if(user.length > 0){
                    setLoggedIn(true)
                }
            }
    },[user])

    useEffect(() => {
        if(user !== undefined){
            if(user.length > 0){
                setLoggedIn(true)
            }
        } 
    },[])

    return(
        <UserContext.Provider value={userVal}>
            {children}
        </UserContext.Provider>
    )
}  

export default UserProvider