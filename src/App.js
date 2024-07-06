import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReferSection from './components/ReferSection';
import ReferralModal from './components/ReferralModal';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Router>
      <ReferSection onOpenModal={() => setModalIsOpen(true)} />
      <ReferralModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Router>
  );
};

export default App;



/*
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        Hello world        
      </header>
      
    </div>
  );
}

export default App;
*/