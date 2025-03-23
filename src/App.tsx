import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatBot from './components/chat/ChatBot';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Brands from './pages/Brands';
import InfluencerDetails from './pages/InfluencerDetails';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import About from './pages/About';
import PrivateRoute from './components/auth/PrivateRoute';
import { ROUTES } from './config/constants';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.EXPLORE} element={<Explore />} />
          <Route path={ROUTES.BRANDS} element={<Brands />} />
          <Route path={ROUTES.INFLUENCER} element={<InfluencerDetails />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}