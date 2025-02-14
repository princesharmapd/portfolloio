import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', background: '#282c34', color: 'white', padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Profile</a></li>
          <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Settings</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px', background: '#f5f5f5' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1>Dashboard</h1>
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} alt="Vite logo" style={{ height: '40px', marginRight: '10px' }} />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} alt="React logo" style={{ height: '40px' }} />
            </a>
          </div>
        </header>

        <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
          <h2>Welcome to the Dashboard</h2>
          <p>Click the button to increase the count:</p>
          <button onClick={() => setCount(count + 1)} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
