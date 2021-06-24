import { useEffect, useState } from 'react';

function SidebarResizer({ setSidebarWidthCb }) {

  const [resizing, setResizing] = useState(false);

  const resizerMouseDown = () => {
    setResizing(true);
  }

  useEffect(() => {
    const handleDocumentMouseUp = e => {
      setResizing(false);
    }

    const handleDocumentMouseMove = e => {
      if (resizing) {
        let width = e.pageX + 2;

        if (width < 50) {
          width = 4;
        } else if (width < 200) {
          width = 200;
        } else if (width > 1500) {
          width = 1500;
        }

        console.log(setSidebarWidthCb(width));
      }
    }

    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('mousemove', handleDocumentMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('mousemove', handleDocumentMouseMove);
    }

  }, [resizing, setSidebarWidthCb]);

  return (
    <div
      className={`Sidebar-resizer${resizing ? ' Sidebar-resizer-resizing' : ''}`}
      onMouseDown={resizerMouseDown}
    />
  );
}

export default SidebarResizer;