
export const topCategories = {
  name: 'topcategories',
  title: 'Top Categories',
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
      name: 'discountPrice',
      title: 'Discount Price',
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
    {
      name: 'image1',
      title: 'Image1',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot cropping
      },
     
    },
    {
      name: 'image2',
      title: 'Image2',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot cropping
      },
     
    },
    {
      name: 'image3',
      title: 'Image3',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot cropping
      },
     
    },
  ],
};