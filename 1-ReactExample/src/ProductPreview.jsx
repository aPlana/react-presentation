import React from 'react';
import Chevron from './Chevron';
import NavigationDots from './NavigationDots';

const LEFT_ARROW_CODE = 37;
const RIGHT_ARROW_CODE = 39;

export default class ProductPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: this.props.initialIndex || 0,
        };

        this.onKeyPressed = this.onKeyPressed.bind(this);
    }

    select(index) {
        this.setState({
            activeIndex: index
        });
    }

    previous() {
        if (this.previousExists()) {
            this.select(this.state.activeIndex - 1);
        }
    }

    next() {
        if (this.nextExists()) {
            this.select(this.state.activeIndex + 1);
        }
    }

    previousExists() {
        return this.state.activeIndex > 0;
    }

    nextExists() {
        return this.state.activeIndex < this.props.images.length - 1;
    }

    onKeyPressed(event) {
        const pressedKey = event.keyCode;
        
        console.info('You have pressed the key', pressedKey);
        
        if (pressedKey === LEFT_ARROW_CODE) {
            this.previous();
        } else if (pressedKey === RIGHT_ARROW_CODE) {
            this.next();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyPressed);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyPressed);
    }

    render() {
        const displayedImage = this.props.images[this.state.activeIndex];

        return (
            <div className={'preview'}>
                <Chevron direction='left' disabled={!this.previousExists()} onClick={() => this.previous()} />
                <img src={displayedImage} className={'preview-image'} alt={displayedImage} />
                <Chevron direction='right' disabled={!this.nextExists()} onClick={() => this.next()} />
                <NavigationDots numberOfDots={this.props.images.length} selectedDot={this.state.activeIndex} onClick={index => this.select(index)} />
            </div>
        );
    }
}

ProductPreview.propTypes = {
    initialIndex: React.PropTypes.number,
    images: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
};