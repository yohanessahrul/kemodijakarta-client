import history from '../history';
import axios from 'axios';
import alertify from 'alertifyjs';

// const baseIpServer = 'http://localhost:8000';
const baseIpServer = 'http://35.187.225.21:3000';

export function getAllArticlesAction (token) {
  return dispatch => {
    axios.get(`http://35.187.225.21:3000/api/article/getallarticles`, {
      headers: { token: token }
    })
      .then((response) => {
        dispatch(getAllArticlesReducer(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function createArticleAction (judul, isi, img, token) {
  return dispatch => {
    axios.post(`${baseIpServer}/api/article/createarticle`, {
      judul: judul,
      isi: isi,
      img: img
    }, {
      headers: { token: token }
    })
      .then((response) => {
        history.push('/admin/artikel');
        alertify.success('Anda berhasil menambahkan artikel baru');

      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getArticleByIdAction (id, token) {
  return dispatch => {
    axios.get(`${baseIpServer}/api/article/getarticlebyid/${id}`, {
      headers: { token: token }
    })
      .then((response) => {
        dispatch(getArticleByIdReducer(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function deleteArticleAction (id, token) {
  return dispatch => {
    axios.delete(`${baseIpServer}/api/article/deletearticle/${id}`, {
      headers: { token: token }
    })
      .then((response) => {
        dispatch(getAllArticlesReducer(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function changeArticleByIdAction (id, token, judul, isi) {
  return dispatch => {
    axios.put(`${baseIpServer}/api/article/changearticle/${id}`, {
      judul: judul, isi: isi
    }, {
      headers: { token: token }
    })
      .then((response) => {
        if (response.data.data) {
          alertify.success('Anda berhasil mengubah artikel')
          history.push('/admin/artikel');
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function changeImageArticleAction (id, urlImage, token) {
  return dispatch => {
    axios.put(`${baseIpServer}/api/article/changeimagearticle/${id}`, {
      img: urlImage
    }, {
      headers: { token: token }
    })
      .then((response) => {
        alertify.success('Anda berhasil mengubah gambar artikel')
        dispatch(getAllArticlesReducer(response.data.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getAllArticlesReducer (payload) {
  return {
    type: 'GET_ALL_ARTICLE',
    payload: payload
  }
}

export function getArticleByIdReducer (payload) {
  return {
    type: 'READ_ARTICLE_BY_ID',
    payload: payload
  }
}