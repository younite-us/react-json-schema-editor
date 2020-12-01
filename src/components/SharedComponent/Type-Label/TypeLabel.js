import React from 'react';
import PropTypes from 'prop-types';

export default function TypeLabel(props) {
    return (
        <div onClick = {props.onClick}>
            <h5>{props.label}</h5>
        </div>
    );
}
TypeLabel.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};
