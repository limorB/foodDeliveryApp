/* eslint-disable no-undef */
import { useReducer } from 'react'
import CartContext from "./cart-context"


const defCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        //concat will create a new array and will push the new item into it
        //if you edit the old state, react will not know about this change in memory 
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }
    if (action.type==='REMOVE'){
        const filteredItems = state.item.filter(item=>item.id !== action.id)
        const updatedTotalAmount = filteredItems.length 
        return {
            items: filteredItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defCartState

}

const CartProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, defCartState)

    const addItemToCartHanlder = (item) => {
        dispatch({ type: 'ADD', item: item })
    }

    const removeCartItemHandler=(item)=>{
        dispatch({ type: 'REMOVE', id: id })

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHanlder,
        removeItem: removeCartItemHandler
    }



    console.log(cartState)
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;