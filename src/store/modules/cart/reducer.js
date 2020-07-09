import { produce } from 'immer'
export default function cart(state = [], action) {
    // console.log(action.product)
    // console.log(state)
    switch (action.type) {
        case "ADD_ITEM_SUCESS":
            return produce(state, draft => {
                const { product } = action

                draft.push(product)

            })

        case "REMOVE_ITEM":
            return produce(state, draft => {
                const findIndexDraft = state.findIndex(prod => prod.id === action.id)
                if (findIndexDraft >= 0) {
                    draft.splice(findIndexDraft, 1)
                }
            })

        case "UPDATE_AMOUNT_SUCESS": {

            return produce(state, draft => {
                const findIndexDraft = state.findIndex(prodState => prodState.id === action.id)
                
                // Se tiver um produto com o id igual ao do estado, então irá pegar o produto
                // repetido modificando a propriedade amount dele.
                if (findIndexDraft >= 0) {
                    draft[findIndexDraft].amount = Number(action.amount)
                }
            })
        }

        default:
            return state
    }
}