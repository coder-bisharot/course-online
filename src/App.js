import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import CourseBar from './Components/Course-bar/CourseBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseBar></CourseBar>
      
    </div>
  );
}

export default App;
