
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
            <Route exact path="/business" key="business" element={<News pageSize={6} country="us" category="business"/>}/>
            <Route exact path="/entertainment" key="entertainment" element={<News pageSize={6} country="us" category="entertainment"/>}/>
            <Route exact path="/general" key="general" element={<News pageSize={6} country="us" category="general"/>}/>
            <Route  exact path="/health" key="health" element={<News pageSize={6} country="us" category="health"/>}/>
            <Route exact path="/technology" key="technology" element={<News pageSize={6} country="us" category="technology"/>}/>
            <Route exact path="/sports" key="sports" element={<News pageSize={6} country="us" category="sports"/>}/>
            <Route exact path="/science" key="science" element={<News pageSize={6} country="us" category="science"/>}/>
        </Routes>
        </Router>
        </div>
    );
  }
}







