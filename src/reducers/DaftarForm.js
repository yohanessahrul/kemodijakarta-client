const initialState = {
  isLoading: false,
  isSuccess: null,
  isError: false
};

export default function DaftarForm(state = { ...initialState }, action) {
  switch (action.type) {
    case "LOADING":
      return ({
        ...state,
        isLoading: true
      });
    case "SUCCESS":
      return ({
        ...state,
        isLoading: false,
        isSuccess:action.payload        
      });
      case 'ERROR':
            return({
                ...state,
                isLoading:false,
                isSuccess:null,
                isError:true
            })   
    default:
      return state;
  }
}
