import React from 'react';
import ProductPreviewStore from '../stores/ProductPreviewStore';
import ProductPreviewActions from '../actions/ProductPreviewActions';
import ProductPreview from '../components/ProductPreview';

export default class ProductPreviewContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = ProductPreviewStore.getState();
    }

    componentWillMount() {
        ProductPreviewStore.listen(state => this.setState(state));
        ProductPreviewActions.fetchPreviewImages();
    }

    previous() {
        ProductPreviewActions.goPrevious();
    }

    next() {
        ProductPreviewActions.goNext();
    }

    select(index) {
        ProductPreviewActions.goTo(index);
    }

    componentWillUnmount() {
        ProductPreviewStore.unlisten((state) => this.onChange(state));
    }

    render() {
        return (
            <ProductPreview
                images={this.state.images}
                activeIndex={this.state.activeIndex} 
                select={this.select} 
                previous={this.previous}
                next={this.next}
            />
        );
    }
}

ProductPreviewContainer.propTypes = {
    initialIndex: React.PropTypes.number
};