import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import AllBlog from './components/AllBlog';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';
import Error from './pages/Error';
import Article from './components/Article';
import Industry from './components/Industry';
import JobList from './pages/JobList';
import CareerHome from './components/CareerHome';
import Courses from './components/Courses';
import CourseDetails from './components/CourseDetails';
import Client from './components/Client';
// import UserList from './components/UserList';
import CourseUpload from './components/CourseUpload';
import AdminPanel from './components/AdminPanel';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import Profile from './pages/user/User';
import Orders from './pages/user/Orders';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './components/Routes/AdminRoute';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Products from './pages/Admin/Products';
import Users from './pages/Admin/Users';
import AdminOrders from './pages/Admin/AdminOrders';
import Career from './components/Career';
import CategoryProduct from './pages/CategoryProduct';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import CoursePage from './components/CoursePage';
function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.includes('/courses') || location.pathname.includes('/dashboard') || location.pathname.includes('/cart') || location.pathname.includes('/categories') || location.pathname.includes('/category');
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact  path="/career-home" element={<Career/>}/>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/clients" element={<Client />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/admin/dashboard" element={<AdminPanel />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/allblog" element={<AllBlog />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/:slug" element={<Article />} />
        <Route path="/:slug" element={<Industry />} />
        <Route path="/job" element={<JobList />} />
        <Route path="/career" element={<CareerHome />} />
        <Route path="/*" element={<Error />} />
        <Route path="/upload" element={<CourseUpload />} />
        {/* <Route path="/users" element={<UserList />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetails />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/category/:slug" element={<CategoryProduct/>} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/coursepage" element={<CoursePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
