import history from '../history';
import axios from 'axios';
import alertify from 'alertifyjs';

// const baseIpServer = 'http://localhost:8000';
const baseIpServer = 'http://35.187.225.21:3000';

export function getAllGaleriesAction (token) {
  return dispatch => {
    axios.get(`${baseIpServer}/api/gallery/getallgalleries`)
      .then((response) => {
        dispatch(getAllGaleriesReducer(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function createGalleryAction (formData, token) {
  return dispatch => {
    axios.post(`${baseIpServer}/api/gallery/creategallery`, formData, {
      headers: { token: token }
    })
      .then((response) => {
        dispatch(getAllGaleriesReducer(response.data.data))
        alertify.success('Anda berhasil menambahkan gambar baru')
        history.push('/admin/gallery')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function chooseImageReducer (imageUrl) {
  return {
    type: 'STORING_CHOOSE_IMAGE',
    payload: imageUrl
  }
}

export function getAllGaleriesReducer (payload) {
  return {
    type: 'GET_ALL_GALLERIES',
    payload: payload
  }
}

export function resetChooseImage () {
  return {
    type: 'RESET_CHOOSE_IMAGE',
    payload: ''
  }
}