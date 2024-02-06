import React from 'react'
import { createContext, useState } from 'react'
import Cartt from './CartCon.js';

const CartContext = ({children}) =>{
    
    const [cart, setCart] = useState([])

    return <Cartt.Provider value={{ cart, setCart }}>{children}</Cartt.Provider>

}
export default CartContext