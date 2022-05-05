import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
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
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddTestimonials from './Pages/Dashboard/AddTestimonials/AddTestimonials';

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
              </PrivateRoute>}>

              <Route exact path="/dashboard" element={<DashboardHome />} />
              <Route path='/dashboard/addTestimonials' element={<AdminRoute><AddTestimonials /></AdminRoute>} />
              <Route path='/dashboard/makeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />

            </Route>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/supports" element={<Supports />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
