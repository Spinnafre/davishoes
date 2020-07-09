import {all} from 'redux-saga/effects'
import cart from './cart/sagas'


// Se tiver mais sagas é só colocar aqui dentro
export default function* rootSaga(){
    return yield all([cart])
}