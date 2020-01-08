import { 
    createStore,
    combineReducers,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import errorsReducer from './reducers/errors-reducer';
import winesReducer from './reducers/wines-reducer';

const rootReducer = combineReducers({
    winesStore: winesReducer,
    errorsStore: errorsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));