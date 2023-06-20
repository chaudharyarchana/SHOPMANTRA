import React from 'react';
import Slider from '../../Components/Slider/Slider.js';
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts.js';
import Categories from '../../Components/Categories/Categories.js';

const Home = () => {
    return <div className='home'>
   <Slider />
   <FeaturedProducts type="Featured" />
   <Categories />
   <FeaturedProducts type="Trending" />
    </div>;
}

export default Home;