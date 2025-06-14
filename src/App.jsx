import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Layout
import AdminLayout from './layouts/AdminLayout'
import UserLayout from './layouts/UserLayout'
// User pages
import Home from './pages/user/Home'
import About from './pages/user/About'
import ProductDetail from './pages/user/ProductDetail'
// Admin pages
import Dashboard from './pages/admin/Dashboard'
import Chart from './pages/admin/Chart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/product/:productId/option/:optionId"
            element={<ProductDetail />}
          />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
