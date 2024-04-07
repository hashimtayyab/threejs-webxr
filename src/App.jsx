import React from 'react';

import ProjectName from './components/pages/projectName/ProjectName';

import './App.css'
import { NavbarSimple } from './components/navbar/Navbar';
import XrHitBoxContainer from './components/3dComponents/xr-hit-box/XrBoxContainer';

function App() {
  return (
    <div className="App">
      <NavbarSimple/>
      {/* <XrHitBoxContainer/> */}
      <ProjectName/>
    </div>
  );
}

export default App;