import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import productPreviewReducer from './reducers';
import ProductPreviewContainer from './containers/ProductPreviewContainer';

const store = createStore(productPreviewReducer);

render(<ProductPreviewContainer store={store} />, document.getElementById('root'));