import Entity from './Entity';
import '../sass/Canvas.scss';

function Canvas() {
  return (
    <div className="Canvas">
      <Entity type="OR" />
      <Entity type="AND" />
      <Entity type="NOT" />
    </div>
  );
}

export default Canvas;