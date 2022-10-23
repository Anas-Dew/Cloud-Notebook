import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Account from './components/Account';
import NoteState from './context/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title='INoteBook' />
        <Alert message='Hi, I am INoteBook!'/>
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/account" element={<Account />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
