import React,{ useState } from "react";
import './App.css';

import Start from "./Start";
import Page2 from "./Page2";




function App() {
    const [rows, setRows] = useState([
        {
            id: 1,
            title: 'This is first list'
        },
        {
            id: 2,
            title: 'This is second list'
        },
        {
            id: 3,
            title: 'This is third list'
        },
    ]);
  return (
    <div className="App">


      <Start />
        <Page2 rows={rows}/>
    </div>
  );
}

export default App;
