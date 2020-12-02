import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateJsonElement } from '../../redux/action/jsonBuilderAction';
import store from '../../redux/store/store';
import Designer from '../Designer/Designer';
import JsonSchemaViewer from '../Json-schema-viewer/Json-schema';
import './Builder-container.css';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import { Card, Divider, Grid } from '@material-ui/core';
class JsonBuilderContainer extends Component {
    constructor() {
        super();
        this.state = {
            value: 'designer',
            updatedRootJson: {},
            uploadedJson: []
        };
    }

    // handleChange(value) {
    //     this.value = value;
    //     if (this.value === 'designer' && this.state.updatedRootJson !== '') {
    //         store.dispatch(updateJsonElement(this.state.updatedRootJson));
    //     }
    //     this.setState({ value });
    // }
    UNSAFE_componentWillReceiveProps = (nextProps) => {
        // if (nextProps.importJson) {
        //     store.dispatch(updateJsonElement(this.props.importJson));
        //     this.setState({
        //         updatedRootJson: nextProps.updatedRootJson
        //     });
        // }
        // if (nextProps.updatedRootJson) {
        //     this.setState({
        //         updatedRootJson: nextProps.updatedRootJson
        //     });
        // }
    }

    // static getDerivedStateFromProps(nextProps, state) {
    //     if (nextProps.updatedRootJson) {
    //         return state.updatedRootJson = nextProps.updatedRootJson;
    //     }
    // }

    // uploadJsonFile = (event) => {
    //     if (event.target.files.length > 0) {
    //         this.setState({ value: 'designer' });
    //         let reader = new FileReader();
    //         reader.onload = this.onReaderLoad;
    //         reader.readAsText(event.target.files[0]);
    //     }
    // }

    // onReaderLoad = (event) => {
    //     this.setState({ uploadedJson: JSON.parse(event.target.result) });
    // }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        // className={classes.demo}
        return (
            // className={classes.builderContainer}
            // <div className={classes.builderContainer}>
            <Grid container style={{ width: '100%' }} alignItems="stretch" justify="center" spacing={0}>
                <Grid item xs={12} className={classes.root} >
                    {/* < div className={classes.builderGrid} > */}
                    <div className={classes.designer}>
                        <Designer />
                    </div>
                </Grid>
                {/* <Grid item xs={12} > */}
                {/* <div className={classes.divider} ></div> */}
                {/* </Grid> */}
                <Grid item xs={12} className={classes.root} >
                    <div className={classes.jsonschema}>
                        <JsonSchemaViewer />
                    </div>
                    {/* </div > */}
                </Grid>
            </Grid >
            // </div>
        )
    }

}

const mapStateToProps = function mapStateToProps(store) {
    return {
        updatedRootJson: store.createNewElementReducer.rootJsonSchema
    }
}

export default connect(mapStateToProps)(withStyles(styles)(JsonBuilderContainer));