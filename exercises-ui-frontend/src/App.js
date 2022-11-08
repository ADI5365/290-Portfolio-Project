// import dependencie
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// import components, stylesheet, and pages
import Nav from './components/Nav';
import './App.css';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';

function App() {

  const [exercise, setExercise] = useState([]);

  return (
    <div>
      <Router>

          <header>
            <h1>Sun's Out, Guns Out: An Exercise Collection</h1>
            <p>Track Your Workouts Day-by-Day</p>
          </header>

          <Nav />

          <main>
            <Route path="/" exact><HomePage setExercise={setExercise} /></Route>
            <Route path="/add-exercise"><AddExercisePage /></Route>
            <Route path="/edit-exercise"><EditExercisePage exercise={exercise} /></Route>
          </main>

          <footer>
            <p>&copy; 2022 Andrea Irwin</p>
          </footer>

      </Router>
    </div>
  );
}

export default App;