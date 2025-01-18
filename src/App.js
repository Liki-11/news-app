
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        
      />
        <Routes>
            <Route exact path="/business" key="business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="business"/>}/>
            <Route exact path="/entertainment" key="entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="entertainment"/>}/>
            <Route exact path="/general" key="general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="general"/>}/>
            <Route  exact path="/health" key="health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="health"/>}/>
            <Route exact path="/technology" key="technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="technology"/>}/>
            <Route exact path="/sports" key="sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="sports"/>}/>
            <Route exact path="/science" key="science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="science"/>}/>
        </Routes>
        </Router>
        </div>
    );
  }
}







