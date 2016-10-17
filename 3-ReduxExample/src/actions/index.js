export const loadImages = () => {
    return {
        type: 'GET_IMAGES'
    };
}

export const goTo = (index) => {
    return {
        type: 'GO_TO',
        index
    };
}

export const goPrevious = () => {
    return {
        type: 'GO_PREVIOUS'
    };
}

export const goNext = () => {
    return {
        type: 'GO_NEXT'
    };
}