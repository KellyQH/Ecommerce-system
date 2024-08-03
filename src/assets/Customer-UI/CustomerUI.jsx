import React from 'react'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import FlashSales from './components/flash-sales/FlashSales'
import BrowseByCategories from './components/browse-by-categories/BrowseByCategories'
import BestSellingProducts from './components/best-selling-products/BestSellingProducts'
import Categories from './components/categories/Categories'

function CustomerUI() {
  return (
    <div>
      <HomePage />
      <FlashSales />
      <BrowseByCategories />
      <BestSellingProducts />
      <Categories />
      <Footer />
    </div>
  );
}

export default CustomerUI;
