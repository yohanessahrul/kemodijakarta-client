import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import bukuTamu from './reducers/reducer.bukutamu';
import urlReducer from './reducers/reducer.url';
import signUp from './reducers/reducer.signUp';
import signIn from './reducers/reducer.signIn';
import DaftarForm from './reducers/DaftarForm';
import {reducer as formReducer} from 'redux-form';
import reducerUser from '../src/reducers/reducerUser';
import reducerArticle from '../src/reducers/reducerArtikel';
import reducerGalleries from '../src/reducers/reducerGallery';

const rootReducer = combineReducers({
    bukuTamu,
    urlReducer,
    signUp,
    signIn,
    DaftarForm,
    form:formReducer,
    reducerUser,
    reducerArticle,
    reducerGalleries,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
)

export default store;