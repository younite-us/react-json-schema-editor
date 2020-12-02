import React, { Component } from 'react';
import YouCheckbox from '../SharedComponent/Checkbox/YouCheckBox';
import YouAutocomplete from '../SharedComponent/You-Dropdown/YouAutocomplete';
import YouInput from '../SharedComponent/YouInput/YouInput';
import Collapsible from '../SharedComponent/Collapsible/Collapsible'
import AddMore from '../SharedComponent/AddMoreIcon/AddMore';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownUp from '../SharedComponent/ArrowDownAndRight/ArrowDownUp';
import TypeLabel from '../SharedComponent/Type-Label/TypeLabel';
import JsonField from '../JsonField/JsonField';
import JsonBuilder from '../JsonBuilder/JsonBuilder';
import DsModel from '../SharedComponent/Ds-Model/Ds-Model';
import CancelIcon from '@material-ui/icons/Cancel';
import SettingsIcon from '@material-ui/icons/Settings';
class ComponentGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        switch (this.props.type) {
            case "checkbox":
                return <YouCheckbox {...this.props} />;
            case "dropdown":
                return <YouAutocomplete {...this.props} />;
            case "input":
                return <YouInput  {...this.props} />;
            case "collapsible":
                return <Collapsible childItems={this.props.childItems} {...this.props} />;
            case "addMoreIcon":
                return <AddMore style={{color:"#A0A0A0"}} {...this.props} />;
            case "arrowDownUp":
                return <ArrowDownUp style={{color:"#A0A0A0"}} {...this.props} />;
            case "typeLabel":
                return <TypeLabel {...this.props} />;
            case "jsonField":
                return <JsonField
                    {...this.props}
                />;
            case "JsonBuilder":
                return <JsonBuilder patchJson={this.props.patchJson}{...this.props} />
            case "deleteIcon":
                return <DeleteIcon style={{color:"#A0A0A0"}} {...this.props} />
            case "Model":
                return <DsModel {...this.props} />
            case "CancelIcon":
                return <CancelIcon style={{color:"#A0A0A0"}} {...this.props} />
            case "SettingsIcon":
                return <SettingsIcon style={{color:"#A0A0A0"}} {...this.props} />
            default:
                return ""
        }
    }

}

export default ComponentGenerator;