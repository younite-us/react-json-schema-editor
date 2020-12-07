export const componentService = (action, currentElesChildArray, childItems, childName, oldKey, newKey, deleteFlag, childKeyToDelete) => {
    switch (action) {
        case 'ADD':
            if (oldKey === undefined) {
                currentElesChildArray.map((child) => {
                    var jsonKey = Object.keys(child);
                    if (jsonKey[0] === childName) {
                        childItems.map((item) => {
                            var itemJsonKey = Object.keys(item);
                            if (typeof child[childName][itemJsonKey[0]] !== 'string') {
                            // console.log('check TypeError: Cannot assign to read only property "0" of string "Object" - ' , child[childName][itemJsonKey[0]]);
                            child[childName][itemJsonKey[0]] = item[itemJsonKey[0]];
                            delete child[childName].type;
                            }

                        });
                    }
                });
            }
            return currentElesChildArray;
        case 'UPDATE':
            currentElesChildArray.map((child) => {
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
            return currentElesChildArray;
        case 'DELETE':
            if (deleteFlag) {
                currentElesChildArray.map((child) => {
                    var jsonKey = Object.keys(child);
                    if (jsonKey[0] === childName) {
                        delete child[childName][childKeyToDelete];
                    }
                });
                // this.setState({ deleteFlag: deleteFlag });
            }
        return currentElesChildArray

    }
}


// childItems, childName, oldKey, newKey, deleteFlag, childKeyToDelete


// if (this.childItems.length === 0) {
//     this.childItems = this.state.childItems;
// }

// else 

// else {

// }
// this.props.componentCreated(this.childItems, this.state.name);