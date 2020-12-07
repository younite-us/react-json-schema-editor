/** @flow */

/** import action types */
import {
    UPDATE_JSON_ELEMENT,
    UPDATE_JSON_FLAG,
    RESET_COMPONENT,
    PATCH_STATUS_FLAG
} from '../action/jsonBuilderAction';

/** set groups default state */
const initialGroupState = {
    jsonSchema: {},
    rootJsonSchema: {},
    items: [],
    storeDeleteFlag: false,
    refreshComponent: '1',
    patchCompletFlag:true
};

export function createNewElementReducer(state = initialGroupState, action) {
    switch (action.type) {
        case UPDATE_JSON_ELEMENT:
            return Object.assign({}, state, {
                ...state,
                rootJsonSchema: action.payload.rootJson,
                storeDeleteFlag: action.payload.deleteFlag
            });
            break;
        case UPDATE_JSON_FLAG:
            return Object.assign({}, state, {
                ...state,
                storeDeleteFlag: action.payload
            });
            break;
        case RESET_COMPONENT:
            return Object.assign({}, state, {
                ...state,
                refreshComponent: action.payload
            });
            break;
        case PATCH_STATUS_FLAG:
            return Object.assign({}, state, {
                ...state,
                patchCompletFlag: action.payload
            });
        default:
            return state;
    }
}
