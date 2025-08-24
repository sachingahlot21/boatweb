import React from 'react'
import { createContext, useState } from 'react'

export const LoginDetailContext = React.createContext()

const LoginDetailContextProvider = ({ children }) => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPhoneNo, setUserPhoneNo] = useState('')
    const [loggedIn, setLoggedIn] = useState(null)

    return <LoginDetailContext.Provider value={{ userName, userEmail, setUserName, setUserEmail, setLoggedIn, loggedIn, userPhoneNo, setUserPhoneNo }}>{children}</LoginDetailContext.Provider>

}
export default LoginDetailContextProvider
