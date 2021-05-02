const TransactionReducer =  ((state, action)=>{
    switch(action.type){
        case "ADD_TRANSACTION": {
            return [action.payload , ...state]
        }
        //delete button
        // case "DELETE_TRANSACTION":return {
        //     ...state,
        //     transactions: state.transactions.filter(transactions=>transactions.id !==action.payload)
        // }
        default:
            return state;
    }
})

export default TransactionReducer;