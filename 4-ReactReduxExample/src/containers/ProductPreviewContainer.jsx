import React from 'react';
import {connect} from 'react-redux';
import {loadImages, goTo, goPrevious, goNext} from '../actions';
import ProductPreview from '../components/ProductPreview';

const mapStateToProps = (state) => {
    return {
        images: state.images,
        activeIndex: state.activeIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadImages: () => {
            dispatch(loadImages());
        },
        previous: (index) => {
            dispatch(goPrevious());
        },
        next: () => {
            dispatch(goNext());
        },
        select: (index) => {
            dispatch(goTo(index));
        }
    }
}

let ProductPreviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductPreview);

ProductPreviewContainer.propTypes = {
    initialIndex: React.PropTypes.number
};

export default ProductPreviewContainer;