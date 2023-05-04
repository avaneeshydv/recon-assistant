import React from 'react';
import "./Start.css";
import AttachFileIcon from '@mui/icons-material/AttachFile';


function Start() {
  return (
    <div className="start">
      <h1>Identify File</h1>
      <div className="split left">
        <div className="centered">
          <AttachFileIcon />
          <h2>Jane Flex</h2>
          <p>Some text.</p>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <AttachFileIcon />
          <h2>John Doe</h2>
          <p>Some text here too.</p>
        </div>
      </div>
    </div>

  )
}

export default Start