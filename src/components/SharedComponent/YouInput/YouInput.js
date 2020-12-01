import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import './_YouInput.scss';

class YouInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementInputValue: ''
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.elementInputValue) {
      this.setState({
        elementInputValue: nextProps.inputName
      });
    }
  }

  componentDidMount(){
    this.setState({
      elementInputValue: this.props.inputName
    });
  }

  onChangeInput(event){
    this.setState({
      elementInputValue: event.target.value
    });
    this.props.onChangeInput(event);
  }

  render() {
    return (
      <Input
        autoFocus={true}
        // type={this.props.type}
        className="you-input"
        name={this.props.inputName}
        placeholder='Enter Text'//{this.props.inputPlaceholder}
        // s={this.props.columnCount} label={this.props.inputLabel}
        // value={this.props.elementInputValue}
        value = {this.state.elementInputValue}
        onBlur={this.props.onBlur} //{this.onChangeText}//
        onChange = {this.onChangeInput.bind(this)}
        variant="outlined"
        size="small"
      />
    );
  }
}

// YouInput.propTypes = {
// //   autoFocus: PropTypes.bool,
//   type: PropTypes.string,
//   inputPlaceholder: PropTypes.string,
//   inputLabel: PropTypes.string,
// //   inputValue: PropTypes.string,
// //   columnCount: PropTypes.number,
//   onChange: PropTypes.func,
//   inputName: PropTypes.string
// };

export default YouInput;
