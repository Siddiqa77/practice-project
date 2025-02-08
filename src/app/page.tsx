

import Hero from "@/components/Hero";  
import Midbanner from "@/components/Homepage/Midbanner";  
import Support from "@/components/Homepage/Support";
import Latestblog from "@/components/Homepage/Latestblog";
import Newsletter from "@/components/Homepage/Newsletter";
import DiscountItem from "@/components/Homepage/DiscountItem";
import Tags from "@/components/Homepage/Tags";
import FeaturedProduct from "@/components/Homepage/new-featuredproducts";
import LatestProduct from "@/components/Homepage/new-latestproducts";
import TrendingProducts from "@/components/Homepage/new-trendingproducts";
import Topcategories from "@/components/Homepage/Topcategories";


const Page = () => {
  return (
    
      <div>

        
       
        <Hero/>
        <FeaturedProduct/>
        <LatestProduct/>
        <Support/>
        <Midbanner/>
        <TrendingProducts/>
        <DiscountItem/>
        <Topcategories/>
        <Newsletter/>
        <Tags/>
        <Latestblog/>
       
        
      
      </div>
    
  );
}

export default Page;
