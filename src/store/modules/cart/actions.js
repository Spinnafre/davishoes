export function RemoveItem(id){
    return{
        type: "REMOVE_ITEM",
        id
    }
}

// Irá pegar informações da
// API. Pois no redux as actions e reducers não podem realizar chamadas API's
// Assim que o usuário clicar no botão adicionar carrinho irá passar a action para o 
// redux saga, nele irá pegar os dados da API.
export function addCartRequest(id){
    return{
        type: "ADD_ITEM_REQUEST",
        id
    }
}
// Caso consiga adicionar items no carrinho, irá acionar a action para então
// assim conseguir adicionar o item no carrinho com as informações da API

// Irá ser acionada no REDUX-SAGA (sagas.js)
export function addCartSucess(product) {
    return {
        type: "ADD_ITEM_SUCESS",
        product
    }
}
// Vai ser ouvida pelo o Redux Saga
export function updateAmountRequest(id,amount){
    return{
        type:"UPDATE_AMOUNT_REQUEST",
        id,
        amount
    }
}
// Vai ser disparado pelo o redux saga
export function updateAmountSucess(id,amount){
    return{
        type:"UPDATE_AMOUNT_SUCESS",
        id,
        amount
    }
}