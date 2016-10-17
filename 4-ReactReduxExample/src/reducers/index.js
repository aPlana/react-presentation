const initialState = {
    images: [],
    activeIndex: 0
};

function images(state = initialState.images, action) {
    switch (action.type) {
        case 'GET_IMAGES':
            // This should perform an actual ajax request
            return [
                'assets/mug-preview/mug1.jpg',
                'assets/mug-preview/mug2.jpg',
                'assets/mug-preview/mug3.jpg'
            ];
        default:
            return state
    }
}

function activeIndex(state = initialState, action) {
    let finalState = state;
    let index;

    switch (action.type) {
        case 'GO_PREVIOUS':
            index = state.activeIndex - 1;
            break;
        case 'GO_NEXT':
            index = state.activeIndex + 1;
            break;
        case 'GO_TO':
            index = action.index;
            break;
        default:
            index = state.activeIndex;
            break;
    }

    if (index >= 0 && index < state.images.length) {
        finalState = {
            ...state,
            activeIndex: index
        };
    }

    return finalState;
}

export default function productPreview(state = initialState, action) {
    return {
        images: images(state.images, action),
        activeIndex: activeIndex(state, action).activeIndex
    }
}
