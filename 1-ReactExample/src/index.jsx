import React from 'react';
import { render } from 'react-dom';
import ProductPreview from './ProductPreview';

render(<ProductPreview initialIndex={0} images={[
    'assets/mug-preview/mug1.jpg',
    'assets/mug-preview/mug2.jpg',
    'assets/mug-preview/mug3.jpg'
]}/>, document.getElementById('root'));
