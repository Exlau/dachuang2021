import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// 引入reducer
import userReducer from './reducers/user_reducer'

// 浏览器插件
import { composeWithDevTools } from 'redux-devtools-extension'

const saveState = state => {

    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('currentState', serializedState);
    } catch (err) {
        // ...错误处理
        console.log("STATE STOREGE ERROR!!!")
        console.log(err.message)
    }
}



const loadState = () => {
    try {
        const serializedState = localStorage.getItem('currentState');
        if (serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        // ... 错误处理
        console.log("LOAD STATE ERROR !!!");
        console.log(err.message);
        return undefined;
    }
}


// 合并reducers
const allReducers = combineReducers({
    userInfo: userReducer
})

let store = createStore(allReducers, loadState(), composeWithDevTools(applyMiddleware(thunk)))
// let store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})

export default store


// export default createStore(allReducers, applyMiddleware(thunk))
