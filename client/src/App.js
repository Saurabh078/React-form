import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import React from 'react';
const EmpListing=React.lazy(()=>import('./Emplisting'));
const EmpCreate=React.lazy(()=>import('./EmpCreate'));
const EmpEdit=React.lazy(()=>import('./EmpEdit'));

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<React.Suspense fallback='Loading...'><EmpListing/></React.Suspense>}></Route>
      <Route path='/employee/create' element={<React.Suspense fallback='Loading...'><EmpCreate/></React.Suspense>}></Route>
      <Route path='/employee/edit/:empid' element={<React.Suspense fallback='Loading...'><EmpEdit/></React.Suspense>}></Route>

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
