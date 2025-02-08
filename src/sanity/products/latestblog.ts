// schemas/blog.js
export const latestBlog = {
    name: 'latestblog',
    title: 'Latest Blog',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
       
      },
      {
        name: 'id',
        title: 'Product ID',
        type: 'string',
        
      },
     
      {
        name: 'author',
        title: 'Author',
        type: 'string'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
       
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enable hotspot cropping
        },
       
      },
      
     
      
    ]
  }
  