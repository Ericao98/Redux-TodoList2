import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import reducer from './reducers';
import React from 'react';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
