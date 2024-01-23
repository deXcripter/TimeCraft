import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import { Tasks } from './components/Tasks';

export default function App() {
  return (
    <div className="h-screen text-gray-900 grid grid-rows-[auto_1fr_auto] text-sm">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<h1>Invalid Url</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
