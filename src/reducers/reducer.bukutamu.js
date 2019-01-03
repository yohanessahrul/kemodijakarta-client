const initialState = {
  isSuccess: false,
  bukutamu: null,
}

export default function bukuTamu (state={...initialState}, action) {
  switch (action.type) {
    case 'TEST_DOANG':
      return {
        ...state,
      }
    default:
      return state;
  }
}