export const SET_SELECTED_COMPONENT = 'SET_SELECTED_COMPONENT';
export const UPDATE_COMPONENT_STYLES = 'UPDATE_COMPONENT_STYLES';

export const setSelectedComponent = (id) => ({
  type: SET_SELECTED_COMPONENT,
  payload: id,
});

export const updateComponentStyles = (styles) => ({
  type: UPDATE_COMPONENT_STYLES,
  payload: styles,
});
