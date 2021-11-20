import { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const [loggedIn, handleLoggedIn] = useState(false);
  const [activePage, handleActivePage] = useState("/home");

  return (
    <>
			<Router>
				<div className={`flex flex-col relative min-h-screen bg-gray-500`}>
					<Navbar loggedIn={loggedIn} activePage={activePage} />
					<Routes>
						<>
							<Route exact path="/" element={<Home />} />
            </>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
