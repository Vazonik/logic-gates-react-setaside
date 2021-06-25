import { useEffect, useState } from 'react';
import DraggableEntity from './DraggableEntity';
import '../sass/Input.scss';

const pinPos = {
  x: 40,
  y: 13,
}

function getSvg(isActive) {
  if(isActive) {
    return (
      <svg version="1.1" baseProfile="full" width="42" height="30" xlmns="http://www.w3.org/2000/svg">
        <path d="M0 0V30H30V0ZM3 3H27V27H3ZM29 16H42V14H29ZM14 7V23H16V7Z" fill="white" />
      </svg>
    );
  }

  return (
    <svg version="1.1" baseProfile="full" width="42" height="30" xlmns="http://www.w3.org/2000/svg">
      <path d="M0 0V30H30V0ZM3 3H27V27H3ZM29 16H42V14H29ZM10 7V23H20V7ZM12 9H18V21H12Z" fill="white" />
    </svg>
  );
}

function InputSwitch({
  outCb,
  startPos,
  moveCallback
}) {
  const [active, setActive] = useState(false);
  const [dragMode, setDragMode] = useState(false);

  const setActiveCallback = () => {
    if (!dragMode) {
      setActive(prev => !prev);
    }
  }

  useEffect(() => {
    if (outCb) {
      outCb([active]);
    }
  }, [active, outCb])

  return (
    <DraggableEntity
      defaultPosition={startPos ? startPos : { x: 50, y: 50 }}
      dragModeChangeCb={b => setDragMode(b)}
    >
      <div
        className="Input"
        style={{ backgroundColor: active ? 'limegreen' : 'red'}}
      >
        {getSvg(active)}
        <div className="Input-pin" style={{ left: pinPos.x, top: pinPos.y, backgroundColor: active ? 'lime' : 'red' }} />
        <div className="Input-button" onClick={setActiveCallback} />
      </div>
    </DraggableEntity>
  );
}

export default InputSwitch;