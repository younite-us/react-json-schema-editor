import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export class YouAutocomplete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.multiOption === 'true' ?
      <Select
        name={this.props.autocompleteName}
        placeholder={this.props.autocompletePlaceholder}
        value={this.props.autocompleteValue}
        onChange={this.props.onChange}
        options={this.props.autocompleteObject}
        classNamePrefix="you-select__menu"
        multi
      /> :
        <Select
          name={this.props.autocompleteName}
          placeholder={this.props.autocompletePlaceholder}
          value={this.props.autocompleteValue}
          onChange={this.props.onChange}
          options={this.props.autocompleteObject}
          classNamePrefix="you-select__menu"
        /> }
        </div>
    );
  }
}

YouAutocomplete.propTypes = {
  autocompletePlaceholder: PropTypes.string,
  autocompleteName: PropTypes.string,
  autocompleteValue: PropTypes.any,
  autocompleteObject: PropTypes.array,
  multiOption:PropTypes.bool,
  onChange: PropTypes.func
};

export default YouAutocomplete;
