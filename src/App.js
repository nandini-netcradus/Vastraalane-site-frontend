import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import AuthForm from "./components/AuthForm";

// Pages
import Home from './components/Home';
import Collection from './components/Collection';
import About from './components/About';
import MyProfile from './components/MyProfile';
import LatestProducts from "./components/LatestProducts";
import ExclusivePage from './components/ExclusivePage';

import Purses from './components/categories/Purses.js';
import MenShirts from './components/categories/MenShirts';
import Girls from './components/categories/Girls';
import HandBags from './components/categories/HandBags';
import Perfumes from './components/categories/Perfumes';
import Sunglasses from './components/categories/Sunglasses';

import AccessoriesPage from './components/CollectionPages/AccessoriesPage';
import BagsPage from './components/CollectionPages/BagsPage';
import ClothingPage from './components/CollectionPages/ClothingPage';
import FootwearPage from './components/CollectionPages/FootwearPage';

import MyOrders from './Pages/MyOrders';
import Wishlist from './Pages/Wishlist';
import Address from './Pages/Address';
import Accounts from './Pages/Account';
import Product from './Pages/Product';
import ShippingAddress from "./Pages/ShippingAddress";

// Wishlist Context
import { WishlistProvider } from './WishlistContext';

function App() {
  const userId = Cookies.get("userId");

  return (
    <WishlistProvider>
      <Router>
        <Routes>
          {/* Auth Page */}
          <Route
            path="/auth"
            element={Cookies.get("token") ? <Navigate to="/" /> : <AuthForm />}
          />

          {/* Protected App Pages */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Navbar />
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/collection" element={<Collection />} />
                  <Route path="/collections" element={<Collection />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/myprofile" element={<MyProfile />} />
                  <Route path="/collections/Shop" element={<LatestProducts />} />
                  <Route path="/exclusive" element={<ExclusivePage />} />

                  {/* Collection Categories */}
                  <Route path="/collections/accessories" element={<AccessoriesPage />} />
                  <Route path="/collections/bags" element={<BagsPage />} />
                  <Route path="/collections/clothing" element={<ClothingPage />} />
                  <Route path="/collections/footwear" element={<FootwearPage />} />

                  {/* Category pages */}
                  <Route path="/collections/purses" element={<Purses />} />
                  <Route path="/collections/girls" element={<Girls />} />
                  <Route path="/collections/men-shirts" element={<MenShirts />} />
                  <Route path="/collections/hand-bags" element={<HandBags />} />
                  <Route path="/collections/perfumes" element={<Perfumes />} />
                  <Route path="/collections/sunglasses" element={<Sunglasses />} />

                  {/* Profile Related Pages */}
                  <Route path="/orders" element={<MyOrders />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/address" element={<Address />} />
                  <Route path="/account" element={<Accounts />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/shipping-address" element={<ShippingAddress userId={userId} />} />

                  {/* Redirect unknown paths to home */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </WishlistProvider>
  );
}

export default App;
