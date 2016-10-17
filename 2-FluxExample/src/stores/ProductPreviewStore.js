import alt from '../alt';
import ProductPreviewActions from '../actions/ProductPreviewActions';

class ProductPreviewStore {
    constructor() {
        this.images = [];
        this.activeIndex = 0;

        this.bindListeners({
            handleFetchImages: ProductPreviewActions.FETCH_PREVIEW_IMAGES,
            handleGoPrevious: ProductPreviewActions.GO_PREVIOUS,
            handleGoNext: ProductPreviewActions.GO_NEXT,
            handleGoTo: ProductPreviewActions.GO_TO
        });
    }

    handleFetchImages() {
        this.images = [ // This should perform an actual ajax request
            'assets/mug-preview/mug1.jpg',
            'assets/mug-preview/mug2.jpg',
            'assets/mug-preview/mug3.jpg'
        ];
    }

    handleGoPrevious(action) {
        this.handleGoTo(this.activeIndex - 1);
    }

    handleGoNext(action) {
        this.handleGoTo(this.activeIndex + 1);
    }

    handleGoTo(index) {
        if (index >= 0 && index < this.images.length) {
            this.activeIndex = index;
        }
    }
}

export default alt.createStore(ProductPreviewStore, 'ProductPreviewStore');
