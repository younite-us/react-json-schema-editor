import React, { Component } from 'react';
import { connect } from "react-redux";
import store from '../../redux/store/store';
import './Json-schema.scss';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import { TextField } from '@material-ui/core';

class JsonSchemaViewer extends Component {
    constructor(props) {
        super();
        this.state = {
            jsonSchema: {}
        };
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

    render() {
        const { classes } = this.props;
        const oneChild = JSON.stringify(this.props.jsonSchema, undefined, 10)
        return (
            // <div className={classes.compareContainer}>
            <textarea name="body" className={classes.jsonView} value={oneChild} onChange={this.onJsonChange}></textarea>
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