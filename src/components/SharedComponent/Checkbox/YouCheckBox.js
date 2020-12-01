import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@material-ui/core';

export class YouCheckbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
      <Checkbox
              type="checkbox"
              checked={this.props.checked}
              onChange={this.props.onClick}
              color="primary"
            />
        );
    }
}

YouCheckbox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func,
};

export default YouCheckbox;
