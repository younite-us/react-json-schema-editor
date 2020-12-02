import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateJsonElement , resetComponent } from '../../redux/action/jsonBuilderAction';
import store from '../../redux/store/store';
import './Json-schema.scss';
import styles from './styles.js';
import { traverse } from '../patchFIle';

class JsonSchemaViewer extends Component {
    constructor(props) {
        super();
        this.state = {
            jsonSchema: {}
        };
    }
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if (nextProps.updatedRootJson) {
            // document.getElementById("schema").value = {};
            console.log('updatedRootJson ', nextProps.updatedRootJson);
            this.setState({ jsonSchema: nextProps.updatedRootJson })
        }
    }
    componentDidMount() {
        // if(props.updatedRootJson){
        // console.log('jsonSchema ' ,this.props.jsonSchema);
        // console.log(beautify(this.sampleJson, null, 2, 100));
        // }
        // let tempSchema = this.props.jsonSchema;
        // Object.keys(tempSchema).forEach((key) => { //this will return array of keys
        //     if (key.includes(':')) {
        //         tempSchema[''] = tempSchema[key]; //saving reference in your new key.
        //         delete tempSchema[key]; //deleting old key;
        //     }
        // });
        // this.setState({
        //     jsonSchema: tempSchema
        // });
        // console.log(' this.props.jsonSchema ', tempSchema);
    }

    onJsonChange = (event) => {
        console.log('change text ', JSON.parse(event.target.value));
        // let resetKey = Math.random().toString(36).substring(7);
        // store.dispatch(resetComponent(resetKey));
        const jsonObj = JSON.parse(event.target.value);
        store.dispatch(updateJsonElement(jsonObj));
    }

    render() {
        const { classes } = this.props;
        const oneChild = JSON.stringify(this.state.jsonSchema, undefined, 10)
        return (
            // <div className={classes.compareContainer}>
            <textarea name="body" id="schema" className={classes.jsonView} value={oneChild} onBlur={this.onJsonChange}></textarea>
            // <TextField
            //     id="standard-multiline-static"
            //     // label="Multiline"
            //     multiline
            //     rowsMin="40"
            //     value={oneChild}
            //     // onChange={this.handleChange('multiline')}
            //     className={classes.textField}
            //     InputProps={{
            //         classes: {
            //            root: classes.root
            //         }
            //      }}
            //     margin="normal"
            // />
            // </div >
        )
    }

}

const mapStateToProps = function mapStateToProps(store) {
    return {
        updatedRootJson: store.createNewElementReducer.rootJsonSchema
    }
}

export default connect(mapStateToProps)(withStyles(styles)(JsonSchemaViewer));