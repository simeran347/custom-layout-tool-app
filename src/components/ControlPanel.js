import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComponentStyles } from '../redux/actions';

const ControlPanel = () => {
  const dispatch = useDispatch();
  const selectedComponent = useSelector((state) => state.selectedComponent);
  const components = useSelector((state) => state.components);

  const selectedComponentData = components.find((component) => component.id === selectedComponent);

  const [styles, setStyles] = useState({
    width: '',
    height: '',
    display: '',
    position: '',
    color: '',
    backgroundColor: '',
    padding: '',
    margin: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStyles({ ...styles, [name]: value });
  };

  const handleApplyStyles = () => {
    dispatch(updateComponentStyles(styles));
  };

  const canNest = selectedComponentData && selectedComponentData.type === 'Section' && selectedComponentData.children.length < 5;

  const handleAddNestedComponent = () => {
    // Implement logic to add a nested component
    // Example: dispatch(addNestedComponent(selectedComponent));
  };

  return (
    <div className="control-panel">
      <h2>Control Panel</h2>
      {selectedComponentData && (
        <div>
          {Object.keys(styles).map((prop) => (
            <div key={prop} className="control">
              <label>{prop}</label>
              <input
                type="text"
                name={prop}
                value={styles[prop]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <button onClick={handleApplyStyles}>Apply Styles</button>
          {canNest && (
            <button onClick={handleAddNestedComponent}>Add Nested Component</button>
          )}
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
