import React from 'react';

export default function NavigationDots(props) {
    let dots = [];

    for (let i = 0; i < props.numberOfDots; i++) {
        let classes = 'navigation-bullet';

        if (i === props.selectedDot) {
            classes += ' active';
        }

        dots.push(<li key={i} className={classes} onClick={() => props.onClick(i)}></li>);
    }

    return (
        <ul>
            {dots}
        </ul>
    );
}

NavigationDots.propTypes = {
    numberOfDots: React.PropTypes.number.isRequired,
    selectedDot: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired
};