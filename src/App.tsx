import React from 'react';
import Button from '../Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick} variant="primary">
        Primary Button
      </Button>
    </div>
  );
};

export default App;
