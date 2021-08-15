import { createStore, applyMiddleware } from "redux"
import logger from 'redux-logger'
import rootReducer from "./rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from "redux-persist/es/persistStore";

const middlewares = []
// episode 164
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)

// const exportedObject = { store, persistor }
// export default exportedObject;