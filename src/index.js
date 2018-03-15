import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import store from './store';

ReactDOM.render(<Counter store={store}/>, document.getElementById('root'));
