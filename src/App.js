// import logo from './logo.svg';
import './App.css';
import Classbase from './components/Classbase';
import Hello1 from './components/Hello1';
import ClassStats from './components/ClassStats';
import MapEx from './components/MapEx';
import MapClass from './components/MapClass';
import Form from './components/Form';
import MyFragment from './components/MyFragment';
import ComponentA from './components/ComponentA';
import React from 'react';
import UsestateClass from './components/UsestateClass';
import UsestateFunction from './components/UsestateFunction';
import FatchDataUseeffect from './components/FatchDataUseeffect';
import UseContextA from './components/UseContextA'
import UseReducer from './components/UseReducer';
import DatafachinbUseReducer from './components/DatafachinbUseReducer';

// import React from 'react';

// COmponent
export const MyContext = React.createContext()

function App() {
 function ClickMe(){
    console.log("inside app.js class components")
 }
  return (
    <div className='container '>
      {/* <h1>hello wfdorld</h1> */}
       {/* <Hello1 name = 'Vishv' lastname= 'patel'/> */}
      {/* <Classbase Email = 'patelvishv343@gmail.com' myclick={ClickMe}/>  */}
      {/* <ClassStats/> */}

      {/* <MapEx names= {['reactjs','python','django','nodejs','php']}/> */}
      {/* <MapClass names= {['reactjs','python','django','nodejs','php']}/> */}

      {/* <Form/> */}
      {/* <MyFragment/> */}

      {/* <MyContext.Provider value={'this is value from context'}>
      <ComponentA/>
      </MyContext.Provider> */}

      {/* <UsestateClass/> */}
      {/* <UsestateFunction/>  */}

      <FatchDataUseeffect/>

      {/* <MyContext.Provider value="this data is context hook">

      <UseContextA/>
      </MyContext.Provider> */}

      {/* <UseReducer/> */}

      {/* <DatafachinbUseReducer/> */}

    </div>
  );
}

export default App;
