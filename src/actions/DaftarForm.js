import history from '../history'
import axios from "axios";

export function DaftarForm(values) {
  return dispatch => {
    dispatch(loading());
    axios
      .post("http://neoal.xyz:3000/api/email/send", { values })
      .then(response => {
        if (response.data.message) {
          localStorage.setItem("formUser", JSON.stringify(values));
          dispatch(success(values))
          history.push('/notif-form')
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(error())
      });
  };
}

export function loading() {
  return {
    type: "LOADING"
  };
}

export function error() {
  return {
    type: "ERROR"
  };
}

export function success(payload) {
  return {
    type: "SUCCESS",
    payload: payload
  };
}
