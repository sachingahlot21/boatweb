import React from 'react'
import { createContext, useState } from 'react'
import Cartt from './CartCon.js';

const CartContext = ({children}) =>{
    
    const [cart, setCart] = useState([])
    const [cartTotal , setCartTotal] = useState(0)

    return <Cartt.Provider value={{ cart, setCart,cartTotal , setCartTotal }}>{children}</Cartt.Provider>

}
export default CartContext