import React from 'react';

export default function Chevron(props) {
    const chevronClass = 'icon-chevron-' + props.direction;

    return (
        <a
            href='#'
            className={'chevron ' + props.direction}
            disabled={props.disabled}
            onClick={event => {
                event.preventDefault();
                props.onClick();
            }}
            alt={props.direction}
            title={props.direction}
        ></a>
    );
}

Chevron.propTypes = {
    direction: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired
};
