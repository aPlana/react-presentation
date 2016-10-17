import alt from '../alt';

class ProductPreviewActions {
    fetchPreviewImages() {
        return null; // Apparently, it needs to return something for the action to be dispatched.
    }

    goPrevious() {
        return null;
    }

    goNext() {
        return null;
    }

    goTo(index) {
        return index; // Returned value -> dispatched value to the store
    }
}

export default alt.createActions(ProductPreviewActions);
