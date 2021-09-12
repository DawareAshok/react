import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import UsersReducer from '../Reducers/UsersReducer';
import thunk from 'redux-thunk';

const Store = createStore(combineReducers({
    usersData : UsersReducer
}),compose(
    applyMiddleware(thunk),
));

export default Store;