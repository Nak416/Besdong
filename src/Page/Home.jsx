import React from "react";
import Hero from "../Components/Hero";
import ShopCategories from "../Components/ShopCategories";
import Getdiscount from "../Components/Getdiscount";
import BestDeals from "../Components/BestDeals";
import PopularProducts from "../Components/PopularProducts";
import Herotwo from "../Components/Herotwo";
import BestDestTwo from "../Components/ProductList";
import Footer from "../Components/Footer";
import ProductList from "../Components/ProductList";
import TrendingProducts from "../Components/TrendingProducts";
import GetCash from "../Components/GetCash";
import About from "../Components/C_About";

function Home() {
  return (
    <div>
      <Hero />
      <ShopCategories />
      <BestDeals />
      <Getdiscount />
      <PopularProducts />
      <Herotwo />
      <ProductList />
      <GetCash />
      <TrendingProducts />
      <Footer/>
      {/* <About/> */}
      {/* <About/> */}
    </div>
  );
}

export default Home;
