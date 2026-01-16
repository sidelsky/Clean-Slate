import React from 'react';
import Button from '../Button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">React Button Component</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Variants</h2>
            <div className="flex flex-wrap gap-4">
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
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
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
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">States</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={handleClick}>
                Default State
              </Button>
              
              <Button onClick={handleClick} disabled>
                Disabled State
              </Button>
              
              <Button onClick={handleClick} loading>
                Loading State
              </Button>
              
              <Button onClick={handleClick} type="submit">
                Submit Type
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Interactive States:</strong> Hover over buttons to see hover state, click to see active state, 
              and use Tab key to see focus state.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
