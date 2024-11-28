import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); // Get the current route

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className=" max-w-3xl p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">CRUD OPERATIONS</h2>
        {/* Conditionally render the button only on the home screen */}
        {location.pathname === '/' && (
          <button
            onClick={() => window.location.href = "/create"}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
          >
            Create Our List
          </button>
        )}
        <Routes>
          <Route path="/" element={<div>Welcome to CRUD Operations</div>} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
