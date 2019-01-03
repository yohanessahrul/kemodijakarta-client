const initialState = {
  allGalleries: null,
  imageChooseForCreateArticle: null,
}

export default function reducerGalleries (state={...initialState}, action) {
  switch (action.type) {
    case 'GET_ALL_GALLERIES':
      return {
        ...state,
        allGalleries: action.payload
      }
    case 'STORING_CHOOSE_IMAGE':
      return {
        ...state,
        imageChooseForCreateArticle: action.payload
      }
    case 'RESET_CHOOSE_IMAGE':
      return {
        ...state,
        imageChooseForCreateArticle: null
      }
    default:
      return state;
  }
}