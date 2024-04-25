import React from 'react'
import { createContext, useState } from 'react'

export const LoginDetailContext = React.createContext()

const LoginDetailContextProvider = ({ children }) => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)

    return <LoginDetailContext.Provider value={{ userName, userEmail, setUserName, setUserEmail, setLoggedIn, loggedIn }}>{children}</LoginDetailContext.Provider>

}
export default LoginDetailContextProvider
