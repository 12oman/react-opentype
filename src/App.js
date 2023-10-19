import React from 'react';
import useTypeface from './UseTypeface';
import DisplayTypeface from './DisplayTypeface';
import TypeRibbon from './TypeRibbon'; // Import the TypeRibbon component

function App() {
  const typefaceUrl = '/TrialFont-Regular.ttf';
  const [typeface, isLoading] = useTypeface(typefaceUrl);
  const greeting = 'Cool font cool font cool font';

  return (
    <div className="App">
      {isLoading ? (
        'Loading typeface...'
      ) : (
        <>
          {/* <DisplayTypeface text={greeting} typeface={typeface} fontSize={128} x={0} y={150} /> */}
          {/* Use the TypeRibbon component and pass required props */}
          {/* <TypeRibbon text={greeting} typeface={typeface} fontSize={128} ribbonWidth={20} density={1} /> */}
          {/* <TypeRibbon text={greeting} typeface={typeface} fontSize={128} ribbonWidth={20} density={0.5} /> */}
          <TypeRibbon text={greeting} typeface={typeface} fontSize={256} ribbonWidth={64} density={4} />
          <TypeRibbon text={greeting} typeface={typeface} fontSize={512} ribbonWidth={32} density={8} />
          {/* <TypeRibbon text={greeting} typeface={typeface} fontSize={128} ribbonWidth={5} density={0.5} /> */}
        <TypeRibbon text={greeting} typeface={typeface} fontSize={256} ribbonWidth={128} density={16} />
        </>
      )}
    </div>
  );
}

export default App;
