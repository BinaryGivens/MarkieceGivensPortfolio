import React from 'react';

const NextSection = React.forwardRef((props,ref) => {
  return (
    <div ref={ref} 
      style = {{height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1> Next Section </h1>
    </div>
  );
});

export default NextSection;
