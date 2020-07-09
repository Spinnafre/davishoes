// -Sempre que quiser fazer algum tipo de verificação assíncrona antes de uma informação ser alterada no reducer.

import History from '../../../services/history'
import api from './../../../services/api'
import {call,put,select,all,takeLatest} from 'redux-saga/effects'
import {toast, Zoom} from 'react-toastify'
import { addCartSucess, updateAmountSucess} from '../../modules/cart/actions'
import { formatPrice } from "../../../utils/format";
/*
1- fork(), realiza uma operação não bloqueante com a função passada
2- take(), pausa as operações até receber uma redux action
3- race(), executa Effects simultaneamente, e cancela todos quando um efeito retorna seu resultado
4- call(), executa uma função. Se essa função retornar uma Promise, ele irá pausar a Saga até a Promise ser resolvida
5- put(), despacha uma redux action
6- select(), executa uma função seletora que irá buscar dados do estado global do Redux
7- takeLatest(), irá executar as operações recebidas, porém, irá retornar apenas o valor da última. Se a mesma operação for enviada mais de uma vez, elas serão ignoradas, exceto a última (ex: click -> loadUser, usuário clica 4 vezes no botão (ele é legal né, quer testar sua app), apenas a função enviada no último click será executada/retornado o valor, as outras serão ignoradas)
8- takeEvery(), irá retornar os valores de todas as operações recebidas
*/


// Essa function equivale a uma função assíncrona, mas possui mais vantagens do que o ASYNC---GENERATOR
function* addCart({id}) {

    // Yield equivale ao await
    // Como na function eu não posso chamar o api.get() então irei usar o call para chamar métodos assíncronos
    
    // Se o item que estou tentando adicionar já exisitr = irá atualizar o compo amount, caso contrário= irá pegar
    // o produto da API, adicionar propriedades (amount, priceFormatted) e disparar a action enviando a data.
    // OBS: O find retorna o primeiro objeto do estado global que se encaixa nos requisitos de id
    const productExists = yield select(state => state.cart.find(prodState=>prodState.id===id))

    const stock=yield call(api.get,`/stock/${id}`)
    const stockAmount=stock.data.amount

    // Se o produto já existir na carrinho => adiciona a quantidade que já possui
    // Se não existir no carrinho => a quantidade irá ser 0
    const currencyAmount=productExists ? productExists.amount :0
    // Toda vez que clicar irá aumentar a quantidade atual 
    const amountAdd=currencyAmount+1

    if(amountAdd>stockAmount){
        toast.dark('A quantidade solicitada não está disponível no estoque', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition:Zoom,
        })
        return
    }

    
    if (productExists) {
        yield put(updateAmountSucess(id, amountAdd))
    }
    else {
        const response= yield call(api.get,`/products/${id}`)
        
        const data={
            ...response.data,
            amount:1,
            priceFormatted:formatPrice(response.data.price)
        }

        
        yield put(addCartSucess(data))
        
        // History.push("/cart")
    }
    
    // Irá disparar a action addCartSucess passando o valor da response. 
}
function* updateAmount({id,amount}){

    if (amount <= 0) {
        return ;
    }

    const stock=yield call(api.get,`stock/${id}`)
    const stockAmount=stock.data.amount

    if(amount>stockAmount){
        toast.dark('A quantidade solicitada não está disponível no estoque', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Zoom,
            
        })
        return
    }

    yield put(updateAmountSucess(id,amount))
}
// Essa configuração é para fazer o redux saga ouvir a action que foi disparada 
export default all([
    // Evita que determinadad action seja disparava to vez que o usuário clicar no botão adicionar carrinho várias vezes,
    // Resumindo:Irá executar a action somente quando o usuário der o último clique e quando já carregar os dados da API
    takeLatest('ADD_ITEM_REQUEST',addCart),
    takeLatest('UPDATE_AMOUNT_REQUEST',updateAmount)

    // takeLatest('Qual action irá ouvir','Efeito colateral')
])