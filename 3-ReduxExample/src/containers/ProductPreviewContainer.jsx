import React from 'react';
import {loadImages, goTo, goPrevious, goNext} from '../actions';
import ProductPreview from '../components/ProductPreview';

export default class ProductPreviewContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.store.getState();
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.setState(this.props.store.getState()));
        this.props.store.dispatch(loadImages());
    }

    previous() {
        this.props.store.dispatch(goPrevious());
    }

    next() {
        this.props.store.dispatch(goNext());
    }

    select(index) {
        this.props.store.dispatch(goTo(index));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <ProductPreview
                images={this.state.images}
                activeIndex={this.state.activeIndex}
                select={index => this.select(index)}
                previous={() => this.previous()}
                next={() => this.next()}
            />
        );
    }
}

ProductPreviewContainer.propTypes = {
    initialIndex: React.PropTypes.number
};