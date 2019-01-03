import history from '../history'

export function userLoginAction(payload) {
    console.log('masuk action signin')
    return dispatch => {
        dispatch(loading())
        fetch('http://66.42.62.145/auth/login/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: payload.email,
              password: payload.password,
            })
        }).then(response => response.json())
            .then(json => {
                const data = json
                console.log(data)
                if (!data.token) {
                    history.push('/login')
                    alert('Periksa lagi email dan password anda !')
                    
                } else {
                    dispatch(success(data))
                    localStorage.setItem('token',data.token)
                    if (localStorage.getItem('token')) {
                        history.push('/dashboard')
                    }
                }

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