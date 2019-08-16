import { createStore } from 'redux';
import usuarioReducer from './usuarioReducer';
import { persistReducer, persistStore } from 'redux-persist';

/*Vai usar o storage padrão do navegador*/
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    /*A Key para identificar a aplicação que está persistindo os dados*/
    key: 'awake',
    storage,
};

const persistedReducer = persistReducer(persistConfig, usuarioReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

