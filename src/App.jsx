// src/App.jsx
import React from 'react';
import './App.css';
import MyResponsiveBar from './Components/bar';
import MyResponsiveLine from './Components/Linechart';
import MyResponsivePie from './Components/Piechart';

function App() {
  return (
    <div style={{ height: '500px', width: '100%', alignContent:'center', padding:'20px' }}>
      <MyResponsiveBar />
      <MyResponsiveLine/>
      <MyResponsivePie/>
    </div>
  );
}

export default App;
