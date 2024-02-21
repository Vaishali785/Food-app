import React, { useEffect, useState } from 'react'

import Home from './pages/Home'
import Button from './components/UI/Button/Button'
import Modal from './components/Cart/Cart'
import Menu from './components/menu/menu'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header/Header'
import Banner from './components/Banner/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { sendCartData } from './store/redux/cart-slice'
import Footer from './components/Layout/Footer/Footer'

// let initial = true;

const App = () => {
    const [cartIsShown, showCartIsShown] = useState(false);
    // console.log(modal)
    const dispatch = useDispatch();
    const ctx = useSelector(state => state.cart);


    const hideCart = () => {
        showCartIsShown(false)
    }
    const showCart = () => {
        showCartIsShown(true)
    }

    // useEffect(() => {
    //     if (initial) {
    //         initial = false;
    //         return;
    //     }
    //     dispatch(sendCartData(ctx))
    // }, [ctx.userData, dispatch])

    return (
        <div className='home-page'>
            <Header onClick={showCart} />
            <Banner />
            {cartIsShown && <Cart onClose={hideCart} />}
            <main>
                <Menu />
            </main>
            <Footer />
        </div>
    )
}

export default App

// InfusiDine