import { SET_SELECTED_COMPONENT, UPDATE_COMPONENT_STYLES } from './actions';

const initialState = {
  selectedComponent: null,
  components: [
    {
      id: 1,
      type: 'Section',
      styles: {
        width: '100%',
        height: '200px',
        display: 'flex',
        position: 'relative',
        color: '#000000',
        backgroundColor: '#ffffff',
        padding: '10px',
        margin: '0',
      },
      children: [
        {
          id: 2,
          type: 'Button',
          styles: {
            width: 'auto',
            height: 'auto',
            display: 'inline-block',
            position: 'absolute',
            color: '#ffffff',
            backgroundColor: '#000000',
            padding: '5px 10px',
            margin: '0',
          },
          children: [],
        },
      ],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_COMPONENT:
      return {
        ...state,
        selectedComponent: action.payload,
      };
    case UPDATE_COMPONENT_STYLES:
      const updatedComponents = state.components.map((component) =>
        component.id === state.selectedComponent
          ? { ...component, styles: { ...component.styles, ...action.payload } }
          : component
      );
      return {
        ...state,
        components: updatedComponents,
      };
    default:
      return state;
  }
};

export default rootReducer;
