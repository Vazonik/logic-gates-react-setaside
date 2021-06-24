import { useState } from 'react';
import SidebarResizer from './SidebarResizer';
import '../sass/Sidebar.scss';

function Sidebar() {

  const [width, setWidth] = useState(280);

  return (
    <div className="Sidebar" style={{ width, padding: width > 4 ? 5 : 0 }}>
      <SidebarResizer setSidebarWidthCb={setWidth} />
    </div>
  );
}

export default Sidebar;