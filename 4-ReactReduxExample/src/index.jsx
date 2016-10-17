import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import productPreviewReducer from './reducers';
import ProductPreviewContainer from './containers/ProductPreviewContainer';

const store = createStore(productPreviewReducer);

render(
    <Provider store={store}>
        <ProductPreviewContainer />
    </Provider>,
    document.getElementById('root')
);