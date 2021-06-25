import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import '../sass/DraggableEntity.scss';

function DraggableEntity(props) {
  const [dragMode, setDragMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      setDragMode(true);
    };

    const handleKeyUp = (e) => {
      setDragMode(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    };
  }, []);

  const { dragModeChangeCb } = props;
  useEffect(() => {
    if (dragModeChangeCb) {
      dragModeChangeCb(dragMode);
    }
  }, [dragMode, dragModeChangeCb])

  return (
    <Draggable
      disabled={!dragMode}
      {...props}
    >
      <div className={dragMode ? 'DraggableEntity-on' : 'DraggableEntity-off'}>
        {props.children}
      </div>
    </Draggable>
  );
}

export default DraggableEntity;