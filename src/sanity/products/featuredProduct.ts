
export const featuredproduct = {
    name: 'featuredproduct',
    title: 'Featured Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Product ID',
        type: 'number',
        
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
       
      },
      {
        name: 'description',
        title: 'text',
        type: 'string',
       
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        
        
      },
      {
        name: 'originalPrice',
        title: 'Original Price',
        type: 'number',
        
       
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