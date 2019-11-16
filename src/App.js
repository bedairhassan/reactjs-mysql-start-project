import React from 'react';
import './App.css';
import NavigationBar from './comp/NavigationBar'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Table2 from './comp/Front/table-2/Table2'

import Notfound from './comp/Front/Notfound'
import Table1 from './comp/Front/table-1/Table1';

import GDrive from './comp/Front/GDrive';

function App() {
  return (
    <div>
      <Router>
      <NavigationBar/>

      <Switch>
        
      
              <Route path="/table2" component={Table2} />
              
              <Route path="/table1" component={Table1} />
              <Route path="/help" component={GDrive}/>
              {/* warning: for /login THE NAVBAR SHALL NOT BE DISPLAYED ! */}
        <Route component={Notfound} />
      </Switch>
        </Router>
    </div>
  );
}

export default App;
