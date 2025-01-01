import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

export function SplineViewer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-90">
      <spline-viewer 
        url="https://prod.spline.design/1QOUHTKv8ceXVyFy/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}