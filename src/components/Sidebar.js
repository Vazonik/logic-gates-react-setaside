import { useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SidebarResizer from './SidebarResizer';
import '../sass/Sidebar.scss';

function Sidebar() {

  const [width, setWidth] = useState(280);

  return (
    <div className="Sidebar" style={{ width, padding: width > 4 ? 5 : 0 }}>
      <SidebarResizer setSidebarWidthCb={setWidth} />
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Basic Logic Gates">
          <TreeItem nodeId="2" label="NOT" />
          <TreeItem nodeId="3" label="AND" />
          <TreeItem nodeId="4" label="OR" />
          <TreeItem nodeId="5" label="NAND" />
          <TreeItem nodeId="6" label="NOR" />
          <TreeItem nodeId="7" label="XOR" />
          <TreeItem nodeId="8" label="XNOR" />
        </TreeItem>
        <TreeItem nodeId="9" label="Basic Inputs">
          <TreeItem nodeId="10" label="Switch" />
          <TreeItem nodeId="11" label="Button" />
        </TreeItem>
        <TreeItem nodeId="12" label="Basic Outputs">
          <TreeItem nodeId="13" label="LED" />
        </TreeItem>
      </TreeView>
    </div>
  );
}

export default Sidebar;