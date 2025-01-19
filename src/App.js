
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
        <Route exact strict path="/" element={<News  key="nav" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="general"/>}/>
            <Route exact strict path="/business" element={<News  key="business" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="business"/>}/>
            <Route exact strict path="/entertainment" element={<News  key="entertainment" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="entertainment"/>}/>
            <Route exact strict path="/general"element={<News  key="general" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="general"/>}/>
            <Route  exact strict path="/health" element={<News key="health" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="health"/>}/>
            <Route exact strict path="/technology" element={<News key="technology" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="technology"/>}/>
            <Route exact strict path="/sports" element={<News  key="sports" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="sports"/>}/>
            <Route exact strict path="/science"element={<News key="science" setProgress={this.setProgress} apiKey={this.apiKey} pageSize={6} country="us" category="science"/>}/>
        </Routes>
        </Router>
        </div>
    );
  }
}







