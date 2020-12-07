import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import ComponentGenerator from '../../../../ComponentGenerator/ComponentGenerator';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import './ForObject.scss';
const ForObject = (props) => {
    const [allValues, setValue] = useState({
        name: '',
        description: '',
        def: '',
        required: '',
        // minimum: '',
        // maximum: '',
        // enum: ''
    });
    const inputChanged = (state, value) => {
        setValue({ [state]: value, ...allValues });
        props.elementDetails(state, value);
    }
    const { classes } = props;
    return (
        <div className={classes.ModelContainer}>
            <div className={classes.detailsLabels}>Details</div>
            <div className={classes.formContainer}>
                <div className={classes.formBox}>
                    {/* <h4>Basic Information</h4> */}
                    {/* <div className='formFieldss'>
                        <TextField
                            id="standard-with-placeholder"
                            label="Name"
                            placeholder="Enter Name"
                            margin="normal"
                            onBlur={((event) => inputChanged('name', event.target.value))}
                        />
                    </div> */}
                    <div className={classes.formFieldss}>
                        <TextField
                            id="standard-with-placeholder"
                            label="Default"
                            placeholder="Enter Default Value"
                            margin="normal"
                            onBlur={((event) => inputChanged('def', event.target.value))}
                        />
                    </div>
                    <div >
                        <h5 className={classes.labels}>Description:</h5>
                        <textarea onBlur={((event) => inputChanged('description', event.target.value))}></textarea>
                    </div>
                </div>
                <div className={classes.divider} ></div>
                <div className={classes.formBox}>
                    <div>
                        <h4>Common Validations</h4>
                        <div className={classes.requiredClass}>
                            <ComponentGenerator type='checkbox' onClick={((event) => inputChanged('required', event.target.checked))} />
                            <ComponentGenerator type='typeLabel' label='Required ?' />
                        </div>
                    </div>
                    <div >
                        <h4>Object Validations</h4>
                        <div className={classes.formFieldss}>
                            <TextField
                                id="filled-number"
                                label="Minimum"
                                placeholder="Enter Minimum Value"
                                margin="normal"
                                type="number"
                                onChange={((event) => inputChanged('minimum', event.target.value))}
                            />
                        </div>
                        <div className={classes.formFieldss}>
                            <TextField
                                id="filled-number"
                                label="Maximum"
                                placeholder="Enter Maximum Value"
                                margin="normal"
                                type="number"
                                onChange={((event) => inputChanged('maximum', event.target.value))}
                            />
                        </div>
                        <div className={classes.formFieldss}>
                            <TextField
                                id="standard-with-placeholder"
                                label="Enum"
                                placeholder="Enter Enum Value"
                                margin="normal"
                                onChange={((event) => inputChanged('enum', event.target.value))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(ForObject);