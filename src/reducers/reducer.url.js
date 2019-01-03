const initialState = {
    currentUrl: '',
}

export default function currentUrl (state={...initialState}, action){
  switch (action.type) {
    case 'MOVE_URL_PATH':
    // console.log('masuk reducer')
      return {
        ...state, currentUrl: action.payload
      }
    default:
      return state;
  }
}