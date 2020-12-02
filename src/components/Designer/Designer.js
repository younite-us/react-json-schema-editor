import React, { Component } from 'react';
import { connect } from "react-redux";
import store from '../../redux/store/store';
import { updateJsonElement } from '../../redux/action/jsonBuilderAction';
import ComponentGenerator from '../ComponentGenerator/ComponentGenerator';
import { traverse } from '../patchFIle';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';

class Designer extends Component {
    constructor(props) {
        super(props);
        this.jsonFields = [];
        this.childItems = [];
        this.state = {
            expanded: false,
            expansionPanelDetails: [],
            childItems: null,
            deleteEverything: false,
            uniqueId: '1'
        };
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.updatedRootJson && props.updatedRootJson.length>0 && props.updatedRootJson !== null && this.json !== props.updatedRootJson) {
            // console.log('changed json in designer inside if ..... ', props.updatedRootJson);
            this.jsonUploaded(props.updatedRootJson)
        }
        if(props.refreshComponent !== this.state.uniqueId){
            this.setState({uniqueId:props.refreshComponent});
        }
    }

    jsonUploaded(json) {
        if (traverse(json) !== this.childItems) {
            // this.clearOldData();
            this.childItems = traverse(json);
            this.json = json;
            this.setState({
                // deleteEverything: false,
                childItems: this.childItems
            });
            store.dispatch(updateJsonElement(JSON.parse(JSON.stringify(this.childItems)), false));
        }
    }

    clearOldData = () => {
        store.dispatch(updateJsonElement({}, true));
        this.setState({
            deleteEverything: true
        });
    }

    componentCreated(childItems, childName, oldKey, newKey, deleteFlag, childKeyToDelete) {
        let str = '';
        this.childItems = childItems;
        childItems.map((child) => {
            if (str === '') {
                str = str + JSON.stringify(child).substring(1, JSON.stringify(child).length - 1);
            } else {
                str = str + ',' + JSON.stringify(child).substring(1, JSON.stringify(child).length - 1);
            }
        });
        const finalJsonStr = '{' + str + '}';
        if (deleteFlag !== undefined && deleteFlag) {
            store.dispatch(updateJsonElement(JSON.parse(finalJsonStr), deleteFlag));
        } else {
            store.dispatch(updateJsonElement(JSON.parse(finalJsonStr), false));
        }
    }
    // deleteEverything={this.state.deleteEverything}
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.designerContainer} key={this.state.uniqueId}>
                <ComponentGenerator type='JsonBuilder' isNewElement={false} id='-1' patchJson={this.state.childItems ? this.state.childItems : []} componentCreated={this.componentCreated.bind(this)} componentKey={0} />
            </div>);
    }

}

const mapStateToProps = function mapStateToProps(store) {
    return {
        updatedRootJson: store.createNewElementReducer.rootJsonSchema,
        refreshComponent:store.createNewElementReducer.refreshComponent
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Designer));