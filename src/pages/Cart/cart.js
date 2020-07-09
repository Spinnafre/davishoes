import React from 'react';

import { ProductTable, Container, Total } from './styles'
import { bindActionCreators } from 'redux'
import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md'
import { connect } from 'react-redux';
import * as ActionsCart from '../../store/modules/cart/actions'
import { formatPrice } from '../../utils/format'


function Cart({ cart, RemoveItem, updateAmountRequest, total }) {

    // Vai chamar a action que irá ser ouvida pelo o SAGA
    function addAmnout(product) {
        updateAmountRequest(product.id, product.amount + 1)
    }
    function removeAmnout(product) {
        updateAmountRequest(product.id, product.amount - 1)
    }

    return (
        <Container>
            <ProductTable>
                {!cart.length ? <h3>Seu carrinho está vazio</h3> : ''}
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {cart.map(product => {
                        return (
                            <tr key={product.id}>
                                <td className="Camp-image" headers="h1" >
                                    <img src={product.image} alt="Imagem do Produto" />
                                </td>
                                <td headers="h2">
                                    <strong>{product.title}</strong>
                                    <span>{product.priceFormated}</span>
                                </td>
                                <td headers="h3">
                                    <div className="box-button">

                                        <button type="button">
                                            <MdRemoveCircleOutline color="#8EE4AF" size={21} onClick={() => removeAmnout(product)} />
                                        </button>

                                        <input style={{textAlign:"center"}} type="button" value={product.amount} readonly />

                                        <button type="button" onClick={() => addAmnout(product)}>
                                            <MdAddCircleOutline color="#8EE4AF" size={21} />
                                        </button>

                                    </div>
                                </td>
                                <td>
                                    <strong>{product.subtotal}</strong>
                                </td>
                                <td>
                                    <button type="button" onClick={() => RemoveItem(product.id)}>

                                        <MdDelete color="#7159c1" size={21} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </ProductTable>
            <footer>
                <button type="button">FINALIZAR PEDIDO</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateProps = state => {
    return {
        cart: state.cart.map(product => {
            return {
                ...product,
                subtotal: formatPrice(product.amount * product.price)
            }
        }),
        total: formatPrice(state.cart.reduce((total, product) => {
            return total + product.amount * product.price
        }, 0))
    }
}

// Converte as action em propriedades do componente
const mapDispatchToProps = dispatch => bindActionCreators(ActionsCart, dispatch)

export default connect(mapStateProps, mapDispatchToProps)(Cart);
