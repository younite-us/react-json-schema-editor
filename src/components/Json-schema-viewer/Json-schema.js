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
            jsonSchema: {},
            updatedRootJson:{}
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

        // store.subscribe(() => {
        //     if (store.getState().createNewElementReducer.updatedRootJson) {
        //         this.setState(
        //             {
        //                 updatedRootJson: store.getState().createNewElementReducer.updatedRootJson
        //             }
        //         )
        //     }
        // });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.updatedRootJson) {
            this.setState(
                {
                    updatedRootJson: nextProps.updatedRootJson
                }
            )
        }
    }

    render() {
        const { classes } = this.props;
        const oneChild = JSON.stringify(this.props.updatedRootJson, undefined, 10)
        return (
            <textarea name="body" className={classes.jsonView} value={oneChild} onChange={this.onJsonChange}></textarea>
        )
    }

}

const mapStateToProps = function mapStateToProps(store) {
    return {
        // updatedRootJson: store.createNewElementReducer.rootJsonSchema
    }
}

export default connect(mapStateToProps)(withStyles(styles)(JsonSchemaViewer));