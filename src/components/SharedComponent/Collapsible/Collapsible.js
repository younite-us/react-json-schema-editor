import { IconButton, Modal, Typography, withStyles } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import React, { Component } from 'react';
import { connect } from "react-redux";
import ComponentGenerator from '../../ComponentGenerator/ComponentGenerator';
import './Collapsible.scss';
import styles from './styles.js';


const StyledMatPanel = withStyles({
    root: {
        borderRadius: 0,
        border: 0,
        padding: 0,
        boxShadow: 'none',
        flexGrow: 1
    },
})(ExpansionPanel);

const StyledMatPanelSummary = withStyles({
    root: {
        borderRadius: 0,
        border: 0,
        padding: 0,
        paddingLeft: '6px',
        margin: 0,
        height: '10px'
    },
})(ExpansionPanelSummary);

const StyledMatPanelDetails = withStyles({
    root: {
        borderRadius: 0,
        border: 0,
        padding: 0,
        paddingLeft: '15px',
        margin: 0
    },
})(ExpansionPanelDetails);



class Collapsible extends Component {
    constructor(props) {
        super(props);
        this.selectedTypeChild = []
        this.state = {
            expanded: false,
            defaultValue: { 'label': 'Object', 'value': 'Object' },
            isNewElement: false,
            inputName: '',
            inputNameValue: '',
            childItems: [],
            totalChildCount: 0,
            showDetails: false,
            isRequired: false,
            anchorEl: null,
            elementCount:0
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.newElementCount !== nextProps.newElementCount || nextProps.newElementCount !== 0) {
            this.setState({
                elementCount: nextProps.newElementCount
            });
        }
        if (nextProps.totalChildCount === 0 || nextProps.totalChildCount > 0) {
            this.setState({
                totalChildCount: nextProps.totalChildCount
            });
        }
        // patch json
        if (nextProps.childItems) {
            this.setState({
                childItems: nextProps.childItems
            });
        }
        // patch data
        if (nextProps.patchData) {
            const key = Object.keys(nextProps.patchData)[0];
            if (Object.keys(nextProps.patchData[key]).includes('type')) {
                this.setState({
                    defaultValue: { 'label': nextProps.patchData[key].type, 'value': nextProps.patchData[key].type }
                });
            } else {
                this.setState({
                    defaultValue: { 'label': 'Object', 'value': 'Object' }
                });
            }
        }
        if (nextProps.inputValue) {
            this.setState({
                inputName: nextProps.inputValue
            });
        }
    }

    componentDidMount() {
        if (this.props.isNewElement) {
            this.setState({
                defaultValue: { 'label': 'String', 'value': 'String' },
                isNewElement: this.props.isNewElement
            });
        }
    }

    handleTypeChange = (type) => {
        this.setState({
            defaultValue: type
        });
        if (this.props.inputValue !== '') {
            this.props.handleTypeChange(this.props.inputValue, type);
        } else {
            this.props.handleTypeChange(this.props.currentElementIndex, type);
        }
    }

    onChangeInputOfElement(event) {
        if (event.target.value !== '' && this.state.inputName !== event.target.value) {
            if (this.state.inputName === '') {
                this.setState({
                    inputName: event.target.value
                });
                this.props.onChangeInputOfElement(this.props.currentElementIndex, event.target.value);
            } else {
                this.props.onChangeInputOfElement(this.state.inputName, event.target.value);
                this.setState({
                    inputName: event.target.value
                });
            }
        }
    }

    setInputValue(event) {
        this.setState({
            inputNameValue: event.target.value
        });
    }

    onDeleteElement() {
        this.props.onDeleteElement(this.props.currentElementIndex);
    }

    getChild = (index) => {
        this.props.childItems.map((child, i) => {
            if (i === index) {
                return child
            }
        });
    }

    // showDetailsClicked for panel 
    showDetailsClicked(event) {
        this.setState({ showDetails: !this.state.showDetails, anchorEl: event.currentTarget });
    }

    onCloseDetailsClicked() {
        this.setState({ showDetails: !this.state.showDetails, anchorEl: null });
    }

    // required checkbox
    isRequired(event) {
        this.setState({
            isRequired: event.target.checked
        });
        if (this.state.inputName === '') {
            this.props.onChangeRequired(this.props.currentElementIndex, event.target.checked);
        } else {
            this.props.onChangeRequired(this.state.inputName, event.target.checked);
        }
    }

    gotDetails = (details, value) => {
        switch (details) {
            case 'name':
                if (value !== '' && this.state.inputName !== value) {
                    if (this.state.inputName === '') {
                        this.setState({
                            inputName: value
                        });
                        this.props.onChangeInputOfElement(this.props.currentElementIndex, value);
                    } else {
                        this.props.onChangeInputOfElement(this.state.inputName, value);
                        this.setState({
                            inputName: value
                        });
                    }
                }
                break;
            case 'description':
                this.setState({
                    description: value
                });
                if (this.state.inputName === '') {
                    this.props.onChangeDetails(this.props.currentElementIndex, 'description', value);
                } else {
                    this.props.onChangeDetails(this.state.inputName, 'description', value);
                }
                break;
            case 'required':
                this.setState({
                    isRequired: value
                });
                if (this.state.inputName === '') {
                    this.props.onChangeRequired(this.props.currentElementIndex, value);
                } else {
                    this.props.onChangeRequired(this.state.inputName, value);
                }
                break;
            case 'def':
                this.setState({
                    default: value
                });
                if (this.state.inputName === '') {
                    this.props.onChangeDetails(this.props.currentElementIndex, 'default', value);
                } else {
                    this.props.onChangeDetails(this.state.inputName, 'default', value);
                }
                break;
        }
    }

    render() {
        const { classes } = this.props;
        const compo = this.state;
        return (<div>
            {/* <StyledMatPanel expanded={true} classes={{ root: classes.expansionPanelStyle }} > */}
            {/* <StyledMatPanelSummary
                    className={classes.expantionPanelHeader}
                > */}
            <div className={classes.expantionPanelHeader}>
                <div className={classes.expantionPanelHeader}>
                    {this.state.defaultValue.label === 'Object' ?
                        <div className={classes.expantionPanelIcons}>
                            <ComponentGenerator type='addMoreIcon' addMore={this.props.addMore.bind(this, this.props.currentElementIndex, this.props.newElementCount)} />
                            {this.props.currentElementIndex !== 0 ?
                                <ComponentGenerator type='arrowDownUp' expanded={this.props.expanded} handleChange={this.props.expandClick} />
                                :
                                ''
                            }
                        </div> : <div className={classes.expantionPanelIcons}></div>}
                    <div>
                        {/* {this.state.isNewElement ? */}
                        <div className={classes.requiredClass}>
                            {this.state.isNewElement ? <ComponentGenerator type='input'
                                inputName={compo.inputName}
                                onChangeInput={this.setInputValue.bind(this)}
                                onBlur={this.onChangeInputOfElement.bind(this)} />
                                : ''}
                            <ComponentGenerator className={this.state.isNewElement ? classes.checkBoxClass : classes.hiddenClass} checked={this.state.isRequired} onClick={this.isRequired.bind(this)} type='checkbox' />
                        </div>
                        {/* // : <div className={classes.requiredClass}></div>} */}
                    </div>
                    <div className={classes.dropDownClass}>
                        {this.props.currentElementIndex !== 0 ? <ComponentGenerator type='dropdown'
                            autocompleteName={this.props.autocompleteName}
                            autocompletePlaceholder={this.props.autocompletePlaceholder}
                            autocompleteValue={this.state.defaultValue}
                            autocompleteObject={this.props.autocompleteObject}
                            multiOption={this.props.multiOption}
                            onChange={this.handleTypeChange.bind(this)} /> : <h4>Properties</h4>}
                    </div>
                    {this.state.defaultValue.label === 'Object' ?
                        <p className={classes.countBracket}>[{this.state.totalChildCount}]</p> : <p className={classes.countBracket}></p>}

                    {/* this is showdetails accordian */}
                    <div >
                        {this.state.isNewElement ? <div>
                            {this.state.showDetails ?
                                <ComponentGenerator type='CancelIcon' onClick={this.showDetailsClicked.bind(this)} />
                                :
                                <ComponentGenerator type='SettingsIcon' onClick={this.showDetailsClicked.bind(this)} />
                            }
                        </div> : ''}
                    </div>
                    {this.state.isNewElement ?
                        <div className={classes.requiredClass}>
                            {/* is required condition value */}
                            <div onClick={this.onDeleteElement.bind(this)} className={classes.deleteIcon}><ComponentGenerator type='deleteIcon' /></div>
                        </div> : ''}
                </div>
                {/* </StyledMatPanelSummary> */}
            </div>
            {/* <StyledMatPanelDetails > */}
            <div className={classes.panelClass}>
                {(this.state.defaultValue.label === 'Object' && this.props.expanded) || this.props.currentElementIndex === 0 ?
                    <div>
                        <ul style={{ listStyleType: 'none' }}>
                            {
                                [...Array(this.state.elementCount)].map((e, i) => { //this.props.newElementCount
                                    const eleId = i + 1;
                                    const newEleKey = this.props.currentElementIndex + ':' + eleId;
                                    return <li key={newEleKey}><ComponentGenerator
                                        type='JsonBuilder'
                                        key={newEleKey}
                                        isNewElement={true}
                                        id={newEleKey}
                                        componentKey={newEleKey}
                                        componentCreated={this.props.componentCreated}
                                        childElementNameChanged={this.props.childElementNameChanged}
                                        handleChildTypeChange={this.props.handleChildTypeChange}
                                        deleteRequestChild={this.props.deleteRequestChild}
                                        checkDeleteKey={this.props.childDeleteKey}
                                        indexInParentArray={i}
                                        patchData={this.state.childItems[i]}
                                        selfDelete={this.props.selfDelete}
                                        onChangeRequiredChild={this.props.onChangeRequiredChild}
                                        onChangeDetailsChild={this.props.onChangeDetailsChild}
                                    /> </li>
                                })}
                        </ul>
                    </div>
                    : ''}
            </div>
            {/* </StyledMatPanelDetails> */}
            {/* </StyledMatPanel> */}
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.showDetails} //this.state.showDetails
                onClose={() => { this.setState({ showDetails: false }) }}
            >
                <div
                    className={classes.muiModelClass}
                >
                    <div className={classes.modalHeader}>
                        <div className="typeTitle"><Typography variant="h6" >String</Typography></div>
                        <IconButton
                            className={classes.closeIcon}
                            color='primary'
                            onClick={() => { this.setState({ showDetails: false }) }}
                        >
                            <HighlightOffRoundedIcon />
                        </IconButton>
                    </div>

                    <ComponentGenerator type='Model' elementDetails={this.gotDetails.bind(this)} subType={this.state.defaultValue.label} />
                </div>
            </Modal>
        </div >);
    }
}

const mapStateToProps = function mapStateToProps(store) {
    return {
        updatedRootJson: store.createNewElementReducer.rootJsonSchema
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Collapsible));