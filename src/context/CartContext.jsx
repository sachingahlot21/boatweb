import React from 'react'
import { createContext, useState,useContext,useEffect } from 'react'
import Cartt from './CartCon.js';
import { LoginDetailContext } from './LoginDetailCon'
import axios from 'axios';
const CartContext = ({ children }) => {
    const { loggedIn } = useContext(LoginDetailContext);
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    const calculateTotal = (items) => {
        const total = items.reduce((sum, item) => sum + item.price * item.count, 0);
        setCartTotal(total);
    };

    const getCartData = async () => {
        if (loggedIn?.userId) {
            try {
                const res = await axios.get(`http://localhost:8000/cart?user=${loggedIn.userId}`);
                const items = res.data.items
                console.log("items res",res)
                setCart(items);
                calculateTotal(items);
            } catch (err) {
                console.error('Fetch cart failed:', err);
            }
        } else {
            const localCart = JSON.parse(localStorage.getItem('guest_cart')) || [];
            setCart(localCart);
            calculateTotal(localCart);
        }
    };

    const addToCart = async (item) => {
        if (loggedIn?.userId) {
            try {
                await axios.post('http://localhost:8000/cart', {
                    items: [item],
                    user: loggedIn.userId
                });
                getCartData();
            } catch (err) {
                console.error('Add to cart failed:', err);
            }
        } else {
            let localCart = JSON.parse(localStorage.getItem('guest_cart')) || [];
            const exists = localCart.find(i => i.productid === item.productid);
            if (!exists) {
                localCart.push(item);
                localStorage.setItem('guest_cart', JSON.stringify(localCart));
                setCart(localCart);
                calculateTotal(localCart);
            } else {
                alert('Already in cart');
            }
        }
    };

    const removeFromCart = async (id) => {
        if (loggedIn?.userId) {
            const userId=loggedIn.userId
            console.log("userId", userId)
            await axios.delete(`http://localhost:8000/cart/${userId}/${id}`);
        } else {
            const updatedCart = cart.filter(item => item.productid !== id);
            localStorage.setItem('guest_cart', JSON.stringify(updatedCart));
            setCart(updatedCart);
            calculateTotal(updatedCart);
        }
        getCartData();
    };

    const syncGuestCartToServer = async () => {
        const guestCart = JSON.parse(localStorage.getItem('guest_cart')) || [];

        if (guestCart.length === 0 || !loggedIn?.userId) return;

        try {
            await axios.post('http://localhost:8000/cart/bulk', {
                items: guestCart,
                user: loggedIn.userId
            });

            localStorage.removeItem('guest_cart'); // clear guest cart
            await getCartData(); // refresh server-side cart
        } catch (error) {
            console.error('Error syncing guest cart:', error);
        }
    };

    useEffect(() => {
        if (loggedIn?.userId) {
            syncGuestCartToServer(); 
        }
        getCartData(); 
        console.log("user logges in now...")
    }, [loggedIn]);


    return <Cartt.Provider value={{ cart, cartTotal, addToCart, removeFromCart, getCartData, setCart, syncGuestCartToServer,setCartTotal }}>{children}</Cartt.Provider>

}
export default CartContext