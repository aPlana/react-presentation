import React from 'react';
import Chevron from './Chevron';
import NavigationDots from './NavigationDots';

const LEFT_ARROW_CODE = 37;
const RIGHT_ARROW_CODE = 39;

export default class ProductPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('keydown', event => this.onKeyPressed(event));
    }

    onKeyPressed(event) {
        const pressedKey = event.keyCode;

        console.info('You have pressed the key', pressedKey);

        if (pressedKey === LEFT_ARROW_CODE) {
            this.props.previous();
        } else if (pressedKey === RIGHT_ARROW_CODE) {
            this.props.next();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', event => this.onKeyPressed(event));
    }

    render() {
        const displayedImage = this.props.images[this.props.activeIndex];

        return (
            <div className={'preview'}>
                <Chevron direction='left' disabled={this.props.activeIndex === 0} onClick={this.props.previous} />
                <img src={displayedImage} className={'preview-image'} />
                <Chevron direction='right' disabled={this.props.activeIndex === this.props.images.length - 1} onClick={this.props.next} />
                <NavigationDots numberOfDots={this.props.images.length} selectedDot={this.props.activeIndex} onClick={this.props.select} />
            </div>
        );
    }
}

ProductPreview.propTypes = {
    images: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    activeIndex: React.PropTypes.number.isRequired,
    select: React.PropTypes.func.isRequired,
    previous: React.PropTypes.func.isRequired,
    next: React.PropTypes.func.isRequired
};