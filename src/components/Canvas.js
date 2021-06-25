import Gate from './Gate';
import InputSwitch from './InputSwitch';
import '../sass/Canvas.scss';
import { useState } from 'react';

function Canvas() {

  const [ip1, setIp1] = useState(false);
  const [ip2, setIp2] = useState(false);
  const [ip3, setIp3] = useState(false);
  const [ip4, setIp4] = useState(false);
  const [ip5, setIp5] = useState(false);

  return (
    <div className="Canvas">
      <Gate
        type="OR"
        inputs={[ip1, ip2]}
        startPos={{ x: 200, y: 200 }}
        outCb={o => setIp3(o[0])}
      />
      <Gate
        type="AND"
        inputs={[ip3, ip4]}
        startPos={{ x: 50, y: 200 }}
      />
      <Gate
        type="NOT"
        inputs={[ip5]}
        startPos={{ x: 200, y: 50 }}
        outCb={o => setIp4(o[0])}
      />
      <InputSwitch
        outCb={o => setIp1(o[0])}
      />
      <InputSwitch
        outCb={o => setIp5(o[0])}
      />
    </div>
  );
}

export default Canvas;