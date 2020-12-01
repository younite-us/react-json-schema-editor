import React, { Component } from 'react';
import ComponentGenerator from '../ComponentGenerator/ComponentGenerator';
import './_JsonField.scss';

class JsonField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            label: 'Object'
        };
    }

    // expandClick = () => {
    //     console.log('expandClick clicked inside jsonField');
    //     this.setState({
    //         expanded: !this.state.expanded
    //     });
    // }

    render() {
        return (
            <div className="expantionPanelHeader">
                <ComponentGenerator type='addMoreIcon' addMore={this.props.addMore} />
                <ComponentGenerator type='arrowDownUp' expanded={this.state.expanded} expandClick={this.expandClick}/>
                <ComponentGenerator type='typeLabel' label={this.state.label} onClickLabel={this.props.onClickLabel} />
                <ComponentGenerator className = 'checkBoxClass' type='checkbox' />
                <ComponentGenerator type='typeLabel' label='required'/>
            </div>);
    }

}

export default JsonField;