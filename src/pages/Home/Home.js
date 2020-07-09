import React, { Component } from 'react';

import { ListShoes } from './styles'
import { bindActionCreators } from 'redux'
import { MdAddShoppingCart } from 'react-icons/md'
import api from '../../services/api'
import { formatPrice } from '../../utils/format'
import { connect } from 'react-redux'
import * as ActionsCart from '../../store/modules/cart/actions'


class Home extends Component {
    state = {
        items: [],
    }

    async componentDidMount() {
        const resp = await api.get('products')

        /*Poderia colocar a função formatPrice dentro do render, mas como toda vez que houver modificação dentro dele
        irá  executar a função formatPrice , ocasionando em perca de performance ou outros possíveis falhas. Uma boa prática é 
        pre-renderizar os valores formatados dos números assim que o componente for montado, carregando somente uma vez os valores.
        */
        const data = resp.data.map(product => {
            return {
                ...product,
                priceFormated: formatPrice(product.price),
                iniPriceFormated: formatPrice(product.iniPrice)
            }
        })

        this.setState({ items: data })
    }

    handleAddCart = id => {
        const { addCartRequest } = this.props
        
        // Dispara a action 
        addCartRequest(id)
    }

    render() {
        const { items } = this.state
        const {amount}=this.props
        return (
            <ListShoes>
                {items.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt="Sapatos" />
                        <strong>{product.title} </strong>
                        <strong>FRETE GRÁTIS</strong>
                        <del>{product.iniPriceFormated}</del>
                        <span>{product.priceFormated}</span>

                        <button type="button" onClick={() => this.handleAddCart(product.id)}>
                            <div>
                                <MdAddShoppingCart size={20} color="#FFF" />
                                <p>{amount[product.id] || 0}</p>
                            </div>
                            <span>Adicionar ao carrinho</span>
                        </button>
                    </li>
                ))}

            </ListShoes >
        )
    }
}

// Se tiver um criador de actions, utilizo o bindActionCreators para ter acesso a todas as action pela a propriedade
const mapDispatchToProps = dispatch => bindActionCreators(ActionsCart, dispatch)

const mapStateProps=state=>{
    // Amount[1]=quantidade X, amount[2]=quantidade Y
    return{
        amount:state.cart.reduce((amount,product)=>{
            
            amount[product.id]=product.amount
            return amount
            
        },{})
    }
}

export default connect(mapStateProps,mapDispatchToProps)(Home);
