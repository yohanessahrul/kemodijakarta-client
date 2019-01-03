import history from '../history';
import alertify from 'alertifyjs'

export function userFormAction(payload) {
    console.log('masuk', )
    return dispatch => {
        dispatch(loading())
        fetch('http://66.42.62.145/auth/registration/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                app_owner: 'datamedis_app',
                user_types: 'datamedis_app_admin',
                name: payload.username,
                email: payload.email,
                password1: payload.password1,
                password2: payload.password2
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch(success(json))

                alertify.set('notifier','position', 'bottom-right');
                alertify.success('Anda sudah terdaftar, silahkan login terlebih dahulu !');

                history.push('/login')
            })
            .catch(err => {
                dispatch(error())
            })
    }
}

export function loading() {
    return {
        type: 'LOADING'
    }
}

export function error() {
    return {
        type: 'ERROR'
    }
}
export function success(payload) {
    return {
        type: 'SUCCESS',
        payload
    }
};