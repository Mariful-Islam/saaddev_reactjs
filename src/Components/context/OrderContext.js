import React, { createContext, useEffect, useState } from 'react'



const OrderItemContext = createContext()
export default OrderItemContext

export const OrderItemProvider = ({ children }) => {

    const username = localStorage.getItem('username')

    const [orderItems, setOrderItems] = useState([])


    useEffect(() => {
        getOrderItems()
    }, [])

    const getOrderItems = async () => {
        const response = await fetch(`/ecom/order_items/${username}/`)
        const data = await response.json()
        setOrderItems(data)
    }

    const contextData = {
        getOrderItems: getOrderItems,
        orderItems: orderItems
    }

    return (
        <div>
            <OrderItemContext.Provider value={contextData}>
                {children}
            </OrderItemContext.Provider>
        </div>
    )
}
