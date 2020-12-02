export const UPDATE_JSON_ELEMENT = 'UPDATE_JSON_ELEMENT';
export const UPDATE_JSON_FLAG = 'UPDATE_JSON_FLAG';
export const RESET_COMPONENT ='RESET_COMPONENT';

export function updateJsonElement(rootJson, deleteFlag) {
  return {
    type: UPDATE_JSON_ELEMENT,
    payload: {
      rootJson: rootJson,
      deleteFlag: deleteFlag
    }
  };
}

export function updateJsonFlag(deleteFlag) {
  return {
    type: UPDATE_JSON_FLAG,
    payload: deleteFlag
  };
}

export function resetComponent(resetKey) {
  return {
    type: RESET_COMPONENT,
    payload: resetKey
  };
}
