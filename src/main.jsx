import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './components/CounterApp'
// import { CounterWithCustomHook } from './components/CounterWithCustomHook'
// import { SimpleForm } from './components/SimpleForm'
// import { FormWithCustomHook } from './components/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import Layout from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
import { TodoApp } from './08-useReducer/TodoApp';

// import './08-useReducer/intro-reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <TodoApp />
    // </React.StrictMode>,
);