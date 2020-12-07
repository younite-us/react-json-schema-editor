import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import './_YouInput.scss';



const styles = theme => ({
  // textField: {
  //   marginLeft: theme.spacing.unit,
  //   marginRight: theme.spacing.unit,
  // },

  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.1rem rgba(0,123,255,.25)',
    },
  }
});




class YouInput extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
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

  componentDidMount() {
    this.setState({
      elementInputValue: this.props.inputName
    });
  }

  onChangeInput(event) {
    this.setState({
      elementInputValue: event.target.value
    });
    this.props.onChangeInput(event);
  }

  onBlur=(event)=>{
    this.formRef.current.reportValidity();
    this.props.onBlur(event);
  }

  render() {
    const { classes } = this.props;
    return (
      // <Input
      //   autoFocus={true}
      //   className="you-input"
      //   name={this.props.inputName}
      //   placeholder='Enter Text'
      //   value = {this.state.elementInputValue}
      //   onBlur={this.props.onBlur}
      //   onChange = {this.onChangeInput.bind(this)}
      //   variant="outlined"
      //   size="small"
      // />
      
      <form ref={this.formRef}>
        <InputBase
          id="bootstrap-input"
          // defaultValue="react-bootstrap"
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }}
          required={true}
          autoFocus={true}
          // className="you-input"
          name={this.props.inputName}
          placeholder='Enter Text'
          value={this.state.elementInputValue}
          onBlur={this.onBlur}
          onChange={this.onChangeInput.bind(this)}
          // variant="outlined"
          size="small"
        />
      </form>
    );
  }
}

export default withStyles(styles)(YouInput);
