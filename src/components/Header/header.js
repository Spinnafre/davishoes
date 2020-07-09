import React from 'react';

import {Container,Cart} from './styles'
import logo from '../../assets/images/logo.png'
import {MdShoppingBasket} from 'react-icons/md'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

function Header({cart}) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cart.length} items</span>
                </div>

                <MdShoppingBasket size={39} color="#ffff"/>
            </Cart>

        </Container>
    )
}

export default connect(carts=>{
    return { cart: carts.cart }
})(Header);
