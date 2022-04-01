import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Hooks/Context/AuthProvider/AuthProvider';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Appointments from './Pages/Appointments/Appointments/Appointments';
import Supports from './Pages/Supports/Supports/Supports';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/appointments"
              element={<PrivateRoute>
                <Appointments></Appointments>
              </PrivateRoute>}
            />
            <Route
              path="/dashboard"
              element={<PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>}
            />
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboardHome" element={<DashboardHome />} />
            <Route path="/supports" element={<Supports />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
