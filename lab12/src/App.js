import React from 'react';
import CguMultiIconButton from './CguMultiIconButton';

const styleArgument = {
  color: 'red',
  fontSize: '32px',
  textAlign: 'center',
  marginTop: '50px',
};

function App() {
  return (
    <div className="App">
      <h1 style={styleArgument}>hello CGU!!</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
        <CguMultiIconButton />
      </div>
    </div>
  );
}

export default App;




