import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { todosApi, todosReducer } from "./slices/todos/todosAPI";
import { txtReducer } from "./slices/txt/txtSlice";

const store = configureStore({
    reducer: {
        todos: todosReducer,
        txt: txtReducer,
    },
    middleware: (getDefaultMiddlware)=>[
        ...getDefaultMiddlware(),
        todosApi.middleware,
    ]
    
})


export default store