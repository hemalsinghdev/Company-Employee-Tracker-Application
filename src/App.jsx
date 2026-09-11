import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  )
}
export default App
