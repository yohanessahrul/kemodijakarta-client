export function moveUrl (data) {
  return dispatch => {
    // console.log('masuk action')
    dispatch(move(data))
  }
}

export function move(data) {
  return {
    type: 'MOVE_URL_PATH',
    payload: data
  }
}