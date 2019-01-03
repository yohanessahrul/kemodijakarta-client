const initilState = {
    isLoading: false,
    allArticles: null,
    readArticle: null,
    formEdit: null,
    articleTerbaru: null
  }
  
  export default function reducerArticle(state={...initilState}, action) {
    switch (action.type) {
      case 'GET_ALL_ARTICLE':
        return {
          ...state,
          allArticles: action.payload
        }
      case 'READ_ARTICLE_BY_ID':
        return {
          ...state,
          readArticle: action.payload
        }
      case 'READ_ARTICLE':
        return {
          ...state,
          readArticle: action.payload
        }
      case 'UPDATE_ARTICLE':
        return {
          ...state,
          allArticles: action.payload
        }
      case 'FORM_EDIT':
        return {
          ...state,
          formEdit: action.payload
        }
      case 'GET_ARTICLE_TERBARU':
        return {
          ...state,
          articleTerbaru: action.payload
        }
      default: 
        return state;
    }
  }