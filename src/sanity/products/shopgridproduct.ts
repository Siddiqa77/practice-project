
export const shopgridproducts = {
  name: 'shopgridproduct',
  title: 'Shopgrid Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Product ID',
      type: 'string',
      
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
     
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
     
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      
      
    },
    {
      name: 'discountPercentage',
      title: 'Original Price',
      type: 'string',
      
     
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot cropping
      },
     
    },
   
  ],
};