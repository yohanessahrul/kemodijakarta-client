const initialState = {
    isLoading:false,
    isError:false,
    isSuccess:null
}

export default function userLogin(state={...initialState},action){
    switch (action.type){
        case 'LOADING' :
        return({
            ...state,
            isLoading:true
        })
        case 'SUCCESS' :
        return({
            ...state,
            isLoading:false,
            isSuccess:action.payload
        })
        case 'ERROR' :
        return({
            ...state,
            isLoading:false,
            isSuccess:null,
            isError:true
        })
        default:
        return state    
    }
}