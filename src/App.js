import React from 'react';
import './App.css';
import Tabs from './components/Tabs'
import GetCats from './components/GetCats'
import FilterCats from './components/FilterCats';



function App() {
  return (
    <div className="App">
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Les cats</h1>
      <Tabs>
        <div className="tab" label="All cats" >
          <div>
            <h2 style={{display: 'flex'
            ,justifyContent:'center'}} >
              Cute little companions</h2>
            <GetCats/>
          
          </div>
        </div>
        <div className="tab" label="Filter by:">
          <div>
            <h2>Then I have to figure out how to filter them</h2>
            <FilterCats/>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default App;
