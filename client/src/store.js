import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
}

export default () => {

  const persistedReducer = persistReducer(persistConfig, reducers)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(
      applyMiddleware(reduxThunk)
    )
  );
  let persistor = persistStore(store, storage)

  return { store, persistor}
}
