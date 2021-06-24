import Draggable from 'react-draggable';
import GateAnd from './GateAnd';
import GateOr from './GateOr';
import GateNot from './GateNot';
import '../sass/Entity.scss';

function Entity({ type }) {
  
  let svgComponent, componentData;
  switch (type) {
    case 'NOT':
      svgComponent = <GateNot />;
      componentData = {
        in: [
          {
            id: "1",
            pos: { x: 0 , y: 10 }
          }
        ],
        out: [
          {
            id: "1",
            pos: { x: 45 , y: 10 }
          }
        ]
      }
      break;
    case 'OR':
      svgComponent = <GateOr />;
      componentData = {
        in: [
          {
            id: "1",
            pos: { x: 0 , y: 3 }
          },
          {
            id: "2",
            pos: { x: 0 , y: 17 }
          },
        ],
        out: [
          {
            id: "1",
            pos: { x: 45 , y: 10 }
          }
        ]
      }
      break;
    case 'AND':
      svgComponent = <GateAnd />;
      componentData = {
        in: [
          {
            id: "1",
            pos: { x: 0 , y: 3 }
          },
          {
            id: "2",
            pos: { x: 0 , y: 17 }
          },
        ],
        out: [
          {
            id: "1",
            pos: { x: 45 , y: 10 }
          }
        ]
      }
      break;
    default:
  }
  
  return (
    <Draggable
      axis="both"
      defaultPosition={{ x: 50, y: 50 }}
      position={null}
      scale={1}
    >
      <div className="Entity">
        {svgComponent}
        {componentData.in.map(o => <div key={o.id} className="Entity-pin" style={{ left: o.pos.x, top: o.pos.y }} />)}
        {componentData.out.map(o => <div key={o.id} className="Entity-pin" style={{ left: o.pos.x, top: o.pos.y }} />)}
      </div>
    </Draggable>
  );
}

export default Entity;