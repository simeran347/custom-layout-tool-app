import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedComponent } from '../redux/actions';

const Canvas = () => {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.components);
  const selectedComponent = useSelector((state) => state.selectedComponent);

  const handleComponentClick = (id) => {
    dispatch(setSelectedComponent(id));
  };

  const renderComponent = (component) => {
    const { id, type, children, styles } = component;

    return (
      <div
        key={id}
        onClick={() => handleComponentClick(id)}
        style={styles}
        className={`component ${type.toLowerCase()} ${id === selectedComponent ? 'selected' : ''}`}
      >
        {type === 'Section' && children.map(renderComponent)}
        {type === 'Button' && <button>Button Text</button>}
      </div>
    );
  };

  return (
    <div className="canvas">
      {components.map((component) => renderComponent(component))}
    </div>
  );
};

export default Canvas;
