import { type SchemaTypeDefinition } from 'sanity'

import { latestproduct } from '../products/latestproduct'

import { relatedProduct } from '../products/relatedproduct'
import { topCategories } from '../products/topcategories'
import { trendingproduct } from '../products/trendingproducts'
import { latestBlog } from '../products/latestblog'
import { shopgridproducts } from '../products/shopgridproduct'
import { featuredproduct } from '../products/featuredProduct'
import { newitem } from './newitem'
import { heroitem } from '../products/hero'
import { blogpage } from '../products/blog'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [latestproduct,trendingproduct,featuredproduct,relatedProduct,topCategories,latestBlog,
    shopgridproducts,newitem,heroitem,blogpage]
}
