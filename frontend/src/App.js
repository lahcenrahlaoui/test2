import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'


import Home from "./pages/Home";
import Teachers from "./pages/Teachers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyNavbar from "./components/MyNavbar";
function App() {
    const { user } = useAuthContext();
    console.log(user)
    return (
        <div className="App">
            
            
            <BrowserRouter>
                <MyNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route
                        path="/login"
                        element={!user ? <Login /> : <Navigate to="/" />} 
                    />
                    <Route
                        path="/signup"
                        element={!user ? <Signup /> : <Navigate to="/" />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
