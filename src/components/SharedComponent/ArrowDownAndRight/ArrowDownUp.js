import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowRight from '@material-ui/icons/ArrowRight';

export default function ArrowDownUp(props) {
    // const [value, setValue] = React.useState('female');
    return (
        <div>
            {props.expanded
                ? <ArrowDropDown onClick={props.handleChange} />
                :
                <ArrowRight onClick={props.handleChange} />
            }</div>
    );
}
ArrowDownUp.propTypes = {
    expanded: PropTypes.bool,
    handleChange: PropTypes.func,
};
