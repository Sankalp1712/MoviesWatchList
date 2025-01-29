import './App.css';
import Admin from './Pages/Admin';
import AddMovie from './Pages/AddMovie';
import UpdateMovie from './Pages/UpdateMovie';
import DeleteMovie from './functionalities/DeleteMovie';
import AddToWatchList from './functionalities/AddToWatchList';
import Login from './Pages/Login';
import AuthProvider from './components/PrivateRoutes/AuthProvider';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes'; // Import PrivateRoutes
import { Routes, Route } from 'react-router-dom';
import Unauthorized from './components/PrivateRoutes/Unauthorized';
import WatchList from './Pages/WatchList';
import  DeleteWatchlist  from './functionalities/DeleteWatchlist';

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Route */}
        <Route path="*" element={<Login />} />
        <Route path='/unauthorized' element={<Unauthorized/>}/>
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={<PrivateRoutes element={<Admin />} role="admin" />}
        />
        <Route
          path="/user"
          element={<PrivateRoutes element={<Admin />} role="user" />}
        />
        <Route
          path="/admin/add"
          element={<PrivateRoutes element={<AddMovie />} role="admin" />}
        />
        <Route
          path="/admin/update/:id"
          element={<PrivateRoutes element={<UpdateMovie />} role="admin" />}
        />
        <Route
          path="/admin/delete/:id"
          element={<PrivateRoutes element={<DeleteMovie />} role="admin" />}
        />

        {/* User Routes */}
        <Route
          path="/user/add/:id"
          element={<PrivateRoutes element={<AddToWatchList />} role="user" />}
        />
        <Route
          path="/user/watchlist"
          element={<PrivateRoutes element={<WatchList/>} role="user" />}
        />
        <Route
          path="/user/watchlist/delete/:id"
          element={<PrivateRoutes element={<DeleteWatchlist/>} role="user" />}
        />
      </Routes>
      
    </AuthProvider>
  );
}

export default App;
