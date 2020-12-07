import React, { Component } from 'react';
import { connect } from "react-redux";
import store from '../../redux/store/store';
import ComponentGenerator from '../ComponentGenerator/ComponentGenerator';
import { TYPES } from '../Models';
import { updateJsonFlag, patchComplete } from '../../redux/action/jsonBuilderAction';

class JsonBuilder extends Component {
    constructor(props) {
        super();
        this.childItems = [];
        this.counter = 0;
        this.state = {
            expanded: false,
            typeInput: 'Object',
            newElementCount: 0,
            currentElementType: { 'label': 'Object', 'value': 'Object' },
            elementInputLabel: '',
            elementNode: {},
            childItems: [],
            elementsChilds: { items: [] },
            name: '',
            updatedRootJsonToChild: '',
            storeDeleteFlag: false,
            childDeleteKey: '',
            indexInParentArray: 0,
            patchComplete: false,
            counter: 0,
            selfDelete: false,
            clickDelete: false
        };
    }

    componentWillReceiveProps(nextProps) {
        // to delete everything
        // if (nextProps.deleteEverything) {
        //     this.setState({
        //         selfDelete: true
        //     });
        // } else {
        //     this.setState({
        //         selfDelete: false
        //     });
        // } //selfDelete
        // if (nextProps.selfDelete) {
        //     this.setState({
        //         clickDelete: true
        //     });
        // } else {
        //     this.setState({
        //         clickDelete: false
        //     });
        // }
        // if (!nextProps.patchCompleteFlag || nextProps.patchCompleteFlag) {
        //     this.setState({
        //         patchComplete: nextProps.patchCompleteFlag
        //     });
        // }
        if (nextProps.patchJson && nextProps.patchJson.length > 0) {
            console.log('new patch ', nextProps.patchJson);
            if (!this.state.patchComplete) {
                // console.log('inside patch file ', nextProps.patchJson);
                this.patchJson(nextProps.patchJson);
                // this.setState({
                //     childItems: nextProps.patchJson
                // });
                // this.childItems = this.state.childItems;
            }
        }
        if (nextProps.patchData && !this.state.patchComplete && this.state.name !== 'root-node') {
            if (Object.keys(nextProps.patchData)[0].includes(':')) {
                this.setState({
                    name: ''
                });
            } else {
                this.setState({
                    name: Object.keys(nextProps.patchData)[0]
                });
            }
            //problem here check..
            const obj = nextProps.patchData[Object.keys(nextProps.patchData)[0]];
            if (!Object.keys(obj).includes('type') || obj.type === 'Object') {
                Object.keys(obj).map(key => {
                    this.childItems.push({ [key]: obj[key] });
                });
                this.patchJson(this.childItems);
            } else {
                this.setState({
                    patchComplete: true
                });
                // store.dispatch(patchComplete(true));
            }
        }
        if (nextProps.componentKey && !nextProps.componentKey.includes(':')) {
            this.setState({
                name: nextProps.componentKey
            });
        }
        if (this.state.name !== '' && nextProps.checkDeleteKey === this.props.componentKey + this.state.name) {
            this.setState({
                checkDeleteKey: nextProps.componentKey
            });
        } else if (nextProps.checkDeleteKey === this.props.componentKey) {
            this.setState({
                checkDeleteKey: nextProps.componentKey
            });
        }
        if (nextProps.updatedRootJson && Object.keys(nextProps.updatedRootJson).length === 0) {
            this.childItems = [];
        }
    }

    componentDidMount() {
        this.setState({
            childItems: this.props.patchJson
        });
        this.childItems = this.state.childItems;
        //childItems, childName, oldKey, newKey, deleteFlag, childKeyToDelete
        this.props.componentCreated(this.childItems, this.state.name, null, null, null, null, this.props.componentKey);
        if (this.props.componentKey !== undefined && this.props.componentKey !== 0) {

            const strType = { 'label': 'String', 'value': 'String' };
            this.setState({
                currentElementType: strType
            });
            if (this.props.componentKey.includes(':')) {
                this.setState({
                    name: ''
                });
            } else {
                this.setState({
                    name: this.props.componentKey
                });
            }
        } else {
            this.setState({
                name: 'root-node'
            });
        }
        this.setState({
            indexInParentArray: this.props.indexInParentArray
        });
    }

    patchJson = (jsonChildArr) => {
        this.counter = jsonChildArr.length;
        this.setState({
            childItems: jsonChildArr,
            newElementCount: jsonChildArr.length,
            childDeleteKey: '-1',
            patchComplete: true,
            expanded: true,
            counter: this.counter
        });
        // store.dispatch(patchComplete(true));
    }

    addMore = (index, count) => {
        store.dispatch(updateJsonFlag(false));
        if (this.props.patchJson && this.props.patchJson.length > 0) {
            this.childItems = this.props.patchJson
        }
        this.counter = this.counter + 1;
        const jsonStringElement = {
            'type': 'String'
        }
        const actualCount = count + 1;
        // const uniqueKey = index + ':' + this.counter;
        const uniqueKey = index + ':' + actualCount;
        this.childItems.push({ [uniqueKey]: jsonStringElement });
        this.setState({
            newElementCount: this.state.newElementCount + 1,
            childDeleteKey: '-1',
            childItems: this.childItems,
            counter: this.counter
        });
        this.props.componentCreated(this.childItems, this.state.name);
    }

    expandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleTypeChange = (elementKey, type) => {
        this.setState({
            currentElementType: type
        });
        this.props.handleChildTypeChange(elementKey, type);
    }

    onChangeInputOfElement = (elementKey, value) => {
        this.setState({
            name: value
        });
        if (this.state.name === '') {
            this.props.childElementNameChanged(this.state.indexInParentArray, value, elementKey);
        } else {
            this.props.childElementNameChanged(this.state.indexInParentArray, value, this.state.name);
        }
    }

    childElementNameChanged(childInd, childValue, oldKey) {
        // console.log(this.state.name, 'child Items ', this.childItems, ' parents - child name - ', oldKey, 'changed to - ', childValue);
        if (childValue !== '' && childValue !== undefined && childInd !== '' && childInd !== undefined) {
            // var childIndex = childInd;
            if (this.childItems.length === 0) {
                this.childItems = this.state.childItems;
            }
            //
            this.childItems.map((child) => {
                if (Object.keys(child)[0] === oldKey && oldKey !== childValue) {
                    const valueToReplace = child[oldKey];
                    child[childValue] = valueToReplace;
                    delete child[oldKey];
                }
            });
            this.props.componentCreated(this.childItems, this.state.name, oldKey, childValue);
        }
    }

    handleChildTypeChange(childElementKey, childType) {
        this.childItems.map((child) => {
            if (Object.keys(child)[0] === childElementKey) {
                if (child[childElementKey].type === 'Object' || !Object.keys(child[childElementKey]).includes('type')) {
                    delete child[childElementKey].type;
                    const remainingItems = child[childElementKey];
                    child[childElementKey] = { 'type': childType.label, ...remainingItems }
                } else {
                    child[childElementKey].type = childType.label;
                }
            }
        });
        this.props.componentCreated(this.childItems, childElementKey);
    }

    componentCreated(childItems, childName, oldKey, newKey, deleteFlag, childKeyToDelete, lastKey) {
        if (this.props.componentKey === 0 && lastKey !== undefined) {
            if (parseInt(lastKey.split(':')[1]) === this.childItems.length) {
                // console.log('last element key', lastKey);
                // store.dispatch(patchComplete(true));
                this.setState({
                    patchComplete: true
                });
            }
        }
        if (this.childItems.length === 0) {
            this.childItems = this.state.childItems;
        }
        if (deleteFlag) {
            this.childItems.map((child) => {
                var jsonKey = Object.keys(child);
                if (jsonKey[0] === childName) {
                    delete child[childName][childKeyToDelete];
                }
            });
            this.setState({ deleteFlag: deleteFlag });
        } else if (oldKey === undefined) {
            this.childItems.map((child) => {
                var jsonKey = Object.keys(child);
                if (jsonKey[0] === childName) {
                    childItems.map((item) => {
                        var itemJsonKey = Object.keys(item);
                        // if (typeof child[childName][itemJsonKey[0]] !== 'string') {
                        // console.log('check TypeError: Cannot assign to read only property "0" of string "Object" - ', child[childName][itemJsonKey[0]]);
                        child[childName][itemJsonKey[0]] = item[itemJsonKey[0]];
                        delete child[childName].type;
                        // }

                    });
                }
            });
        } else {
            this.childItems.map((child) => {
                var jsonKey = Object.keys(child);
                if (jsonKey[0] === childName) {
                    var itemJsonKey = Object.keys(child[childName]);
                    [...Array(itemJsonKey.length)].map((e, i) => {
                        if (oldKey === itemJsonKey[i]) {
                            const valueToReplace = child[childName][oldKey];
                            child[childName][newKey] = valueToReplace;
                            delete child[childName][oldKey];
                            delete child[childName].type;
                        }
                    });

                }
            });
        }
        this.props.componentCreated(this.childItems, this.state.name);
    }

    onDeleteElement(currentIndex) {
        if (this.state.name === '') {
            this.props.deleteRequestChild(currentIndex);
        } else {
            this.props.deleteRequestChild(currentIndex, this.state.name, this.state.indexInParentArray);
        }
    }

    deleteRequestChild(childIndex, childName, indexInParentArray) {
        this.counter = this.counter - 1;
        let childItemsArr = this.childItems;
        let indexOfChild = '';
        childItemsArr.map((child) => {
            if (Object.keys(child)[0] === childName) {
                indexOfChild = this.childItems.indexOf(child);
            }
        });
        this.childItems.splice(indexOfChild, 1);
        this.setState({
            childDeleteKey: childName ? childIndex + childName : childIndex,
            counter: this.counter
        });
        this.props.componentCreated(this.childItems, this.state.name, null, null, true, childName);
    }

    // on required change self
    onChangeRequired(childName, isRequired) {
        this.props.onChangeRequiredChild(childName, isRequired);
    }

    // on required change parent
    onChangeRequiredChild(childElementKey, isRequired) {
        this.childItems.map((child) => {
            if (Object.keys(child)[0] === childElementKey) {
                if (isRequired) {
                    child[childElementKey].required = isRequired;
                } else if (child[childElementKey].required !== undefined) {
                    delete child[childElementKey].required;
                }
            }
        });
        this.props.componentCreated(this.childItems, childElementKey);
    }

    // on details change self
    onChangeDetails(childName, details, value) {
        this.setState({
            [details]: value
        });
        this.props.onChangeDetailsChild(childName, details, value);
    }

    // on details change parent
    onChangeDetailsChild(childElementKey, details, value) {
        this.childItems.map((child) => {
            if (Object.keys(child)[0] === childElementKey) {
                if (value && value !== '' && value !== undefined) {
                    child[childElementKey][details] = value;
                } else if (child[childElementKey][details] !== undefined) {
                    delete child[childElementKey][details];
                }
            }
        });
        this.props.componentCreated(this.childItems, childElementKey);
    }

    render() {
        if (!this.state.checkDeleteKey) {
            return (
                <div>
                    <ComponentGenerator type='collapsible'
                        expanded={this.state.expanded}
                        expandClick={this.expandClick}
                        addMore={this.addMore}
                        autocompleteName='Type'
                        autocompletePlaceholder='Type'
                        autocompleteObject={TYPES}
                        multiOption={false}
                        handleTypeChange={this.handleTypeChange.bind(this)}
                        isNewElement={this.props.isNewElement}
                        newElementCount={this.state.newElementCount}
                        currentElementIndex={this.props.componentKey}
                        key={this.props.componentKey}
                        onChangeInputOfElement={this.onChangeInputOfElement.bind(this)}
                        componentCreated={this.componentCreated.bind(this)}
                        elementInputValue={this.state.elementInputLabel}
                        childElementNameChanged={this.childElementNameChanged.bind(this)}
                        handleChildTypeChange={this.handleChildTypeChange.bind(this)}
                        onDeleteElement={this.onDeleteElement.bind(this)}
                        deleteRequestChild={this.deleteRequestChild.bind(this)}
                        updatedRootJsonToChild={this.state.updatedRootJsonToChild}
                        inputValue={this.state.name}
                        storeDeleteFlag={this.props.storeDeleteFlag}
                        childDeleteKey={this.state.childDeleteKey}
                        childItems={this.state.childItems}
                        patchData={this.props.patchData}
                        totalChildCount={this.state.counter}
                        onChangeRequired={this.onChangeRequired.bind(this)}
                        onChangeRequiredChild={this.onChangeRequiredChild.bind(this)}
                        onChangeDetails={this.onChangeDetails.bind(this)}
                        onChangeDetailsChild={this.onChangeDetailsChild.bind(this)}
                        updatedComponent={this.state.updatedComponent}
                    // selfDelete={this.state.selfDelete}
                    // clickDelete={this.state.clickDelete}
                    // thisElementIsDeleted={this.state.thisElementIsDeleted}
                    />
                </div>);
        } else {
            return null;
        }
    }
}

const mapStateToProps = function mapStateToProps(store) {
    return {
        updatedRootJson: store.createNewElementReducer.rootJsonSchema,
        patchCompletFlag: store.createNewElementReducer.patchCompletFlag
    }
}

export default connect(mapStateToProps)(JsonBuilder);