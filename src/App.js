import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from "./components/Navbar";
import Counter from "./components/counter/Counter";
import UserForm from "./components/users/UserForm";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="*" element={<h2 className="text-center p-2">No Page Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
