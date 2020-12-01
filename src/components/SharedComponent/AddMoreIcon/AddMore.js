import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Add from '@material-ui/icons/Add';

export class AddMore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Add onClick={this.props.addMore} className='plusIcon' />
        );
    }
}

AddMore.propTypes = {
    onClick: PropTypes.func,
};

export default AddMore;
