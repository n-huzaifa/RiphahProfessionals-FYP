import React from 'react';

const NotFound = () => {
  return (
    <div style={{ margin: 0, fontSize: '.7em', fontFamily: 'Verdana, Arial, Helvetica, sans-serif', background: '#EEEEEE' , minHeight: '100vh' }}>
      <div style={{ width: '100%', margin: '0 0 0 0', padding: '6px 2% 6px 2%', fontFamily: '"trebuchet MS", Verdana, sans-serif', color: '#FFF', backgroundColor: '#555555' }}>
        <h1>Server Error</h1>
      </div>
      <div style={{ margin: '0 0 0 2%', position: 'relative' }}>
        <div style={{ background: '#FFF', width: '96%', marginTop: '8px', padding: '10px', position: 'relative' }}>
          <fieldset style={{ padding: '0 15px 10px 15px' }}>
            <h2 style={{ fontSize: '1.7em', margin: 0, color: '#CC0000' }}>404 - File or directory not found.</h2>
            <h3 style={{ fontSize: '1.2em', margin: '10px 0 0 0', color: '#000000' }}>The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.</h3>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
