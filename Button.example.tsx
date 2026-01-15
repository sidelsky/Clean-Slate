import React from 'react';
import Button from './Button';

const ButtonExample: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Button Examples</h1>
      
      <div className="space-x-4">
        <Button onClick={handleClick} variant="primary">
          Primary Button
        </Button>
        
        <Button onClick={handleClick} variant="secondary">
          Secondary Button
        </Button>
        
        <Button onClick={handleClick} variant="outline">
          Outline Button
        </Button>
      </div>
      
      <div className="space-x-4">
        <Button onClick={handleClick} size="small">
          Small Button
        </Button>
        
        <Button onClick={handleClick} size="medium">
          Medium Button
        </Button>
        
        <Button onClick={handleClick} size="large">
          Large Button
        </Button>
      </div>
      
      <div className="space-x-4">
        <Button onClick={handleClick} disabled>
          Disabled Button
        </Button>
        
        <Button onClick={handleClick} type="submit">
          Submit Button
        </Button>
      </div>
    </div>
  );
};

export default ButtonExample;
