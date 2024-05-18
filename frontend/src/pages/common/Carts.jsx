import React from 'react'
import Header from '../../components/layout/Header'
import { useDispatch,useSelector } from 'react-redux'

const Carts = () => {

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart)

    console.log("cart--<",cartProducts)

    return (
        <>
            <Header />
            <div>

            </div>
        </>
    )
}

export default Carts
