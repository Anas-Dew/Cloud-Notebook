import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Account from './components/Account';
import NoteState from './context/NoteState';


function App() {
  return (
    <>
      <NoteState>

        <Router>
          <Navbar title='INoteBook' />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>

        </Router>
      </NoteState>
    </>
  );
}

export default App;
