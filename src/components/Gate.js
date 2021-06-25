import { useEffect, useState } from 'react';
import DraggableEntity from './DraggableEntity';
import GateAnd from '../helpers/GateAnd';
import GateOr from '../helpers/GateOr';
import GateNot from '../helpers/GateNot';
import '../sass/Gate.scss';

function Gate({
  type,
  inputs,
  outCb,
  startPos,
  moveCallback
}) {

  const [outputs, setOutputs] = useState([false]);

  let gate;
  switch (type) {
    case 'NOT':
      gate = GateNot;
      break;
    case 'OR':
      gate = GateOr;
      break;
    case 'AND':
      gate = GateAnd;
      break;
    default:
      gate = GateAnd;
      break;
  }

  useEffect(() => {
    if (inputs) {
      setOutputs([gate.logic(...inputs) || false])
    } else {
      setOutputs([false]);
    }
    
  }, [gate, inputs]);

  useEffect(() => {
    if (outCb) {
      outCb(outputs);
    }
  }, [outputs, outCb])
  
  return (
    <DraggableEntity
      defaultPosition={startPos ? startPos : { x: 50, y: 50 }}
    >
      <div className="Gate">
        <svg version="1.1" baseProfile="full" width="48" height="24" xlmns="http://www.w3.org/2000/svg">
          <path d={gate.pathString} fill="white" />
        </svg>
        {gate.in.map((o, i) => <div key={i} className="Gate-pin" style={{ left: o.pos.x, top: o.pos.y, backgroundColor: inputs && inputs[i] ? 'lime' : 'red' }} />)}
        {gate.out.map((o, i) => <div key={i} className="Gate-pin" style={{ left: o.pos.x, top: o.pos.y, backgroundColor: outputs[i] ? 'lime' : 'red' }} />)}
      </div>
    </DraggableEntity>
  );
}

export default Gate;