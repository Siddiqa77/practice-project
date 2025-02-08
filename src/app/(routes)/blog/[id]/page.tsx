import { BlogSidebar } from "@/components/blogpage/blogSideBar"
import { sanityClient } from "@/sanity/sanity";



export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch the product

  const query = `*[_type == "blogs" && id == "${id}"]{
    id,
    name,
    subname,
    price,
    description,
    discountPercentage,
    date,
    image {
      asset -> {
        url
      }
    }
  }`;

  const product = await sanityClient.fetch(query);

  console.log(product);

  if (!product) return <p>Product not found</p>;
  
const grids = [
  {
    title: "Shop Grid Default",
  },
];


  const current = grids[0];


  return (
    <div>
       {/* Hero Section */}
       <section className="relative bg-[#F6F5FF] py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        {/* Center Column: Content (Title, Description, Button) */}
        <div className="md:w-1/3 max-w-lg text-center md:text-left flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl family font-bold text-[#101750] leading-tight mt-2 lg:ml-20 ">
            {current.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-10 mr-4 lg:mr-20">
            <div className="text-[#000000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Home
            </div>
            <div className="text-[#000] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Pages
            </div>
            <div className="text-[#FB2E86] text-[16px] font-normal lato cursor-pointer hover:text-[#fb2448] transition">
              Single Page
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="container md:w-[1177px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <article className="space-y-6">
              <img
                src={product.image}
                alt="post1"
                className="w-full rounded-lg"
              />
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="bg-pink-100 text-pink-500 px-4 py-1 ">{product.subname}</span>
                <span className="bg-pink-100 text-pink-500 px-4 py-1 ">{product.date}</span>
              </div>
              <h1 className="text-3xl font-bold text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim.
              </p>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. </p>

              <p className="text-gray-600 leading-8 px-2 border-l-2 mb-6 border-pink-500 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <div className="grid grid-cols-2 py-6 gap-4">
                <img
                  src={product.image}
                  alt="post2"
                  className="w-full rounded-lg"
                />
                <img
                  src={product.image}
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>

              <p className="text-gray-600  mb-12 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Adipiscing purus, cursus vulputate id id dictum at.cursus vulputate id id dictum at.
              
              </p>

              <div className="grid grid-cols-2 gap-y-[100px] md:gap-y-0 md:grid-cols-4 gap-4">
                <div >
                <img
                  src={product.image}
                  alt="post3"
                  className="w-full h-full aspect-square rounded-lg"
                />
                <div className="mt-4">
                  <h1 className="ml-4 font-semibold">{product.subname}</h1>
                </div>
                <div className="flex text-sm gap-2 mt-2">
                  <h3 className="text-[#151875]">${product.price}</h3>
                  <h4 className="text-pink-500 hidden md:block ">${product.discountPercentage}</h4>
                  <div className="flex items-center gap-1 ">
                     
                    </div>
                </div>
                </div>
                <div >
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full aspect-square rounded-lg"
                />
                <div className="mt-4">
                  <h1 className="ml-4 font-semibold">{product.name}</h1>
                </div>
                <div className="flex text-sm gap-2 mt-2">
                  <h3 className="text-[#151875]">${product.price}</h3>
                  <h4 className="text-pink-500 hidden md:block  ">{product.discountPercentage}</h4>
                  <div className="flex items-center gap-1 ">
                     
                    </div>
                </div>
                </div>
                

                <div >
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full aspect-square rounded-lg"
                />
                <div className="mt-4">
                  <h1 className="ml-4 font-semibold">{product.name}</h1>
                </div>
                <div className="flex text-sm gap-2 mt-2">
                  <h3 className="text-[#151875]">${product.price}</h3>
                  <h4 className="text-pink-500 hidden md:block  ">{product.discountPercentage}</h4>
                  <div className="flex items-center gap-1 ">
                     
                    </div>
                </div>
                </div>


                <div >
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full aspect-square rounded-lg"
                />
                <div className="mt-4">
                  <h1 className="ml-4 font-semibold">{product.name}</h1>
                </div>
                <div className="flex text-sm gap-2 mt-2">
                  <h3 className="text-[#151875]">${product.price}</h3>
                  <h4 className="text-pink-500 hidden md:block ">{product.discountPercentage}</h4>
                  <div className="flex items-center gap-1 ">
                   
                    </div>
                </div>
                </div>

              </div>
              <div className="pt-24">
              <p className="text-gray-600 ">
              {product.description}
              </p>

              <p className="text-gray-600 my-12 ">
             {product.description}
              </p>
              </div>

                <hr/>


                        {/* Follow */}
      
        <div className="flex justify-center my-4 gap-2">
          <a href="#" className="w-8 h-8 rounded-full bg-purple-700 font-semibold text-white flex items-center justify-center">f</a>
          <a href="#" className="w-8 h-8 rounded-full bg-[#FB2E86] text-white flex items-center justify-center">in</a>
          <a href="#" className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">X</a>
        </div>
      


               <div className="bg-gray-100 flex py-1 px-4 justify-between text-gray-400">
                  <p> ← Previous Post</p>
                  <p> Next Post ➝</p>
                </div>             

              {/* Comments */}
              <div className="space-y-6 md:py-24 pt-8">
               
                {[1, 2].map((comment) => (
                  <div key={comment} className="flex  items-center p-4 border-2 shadow-md border-gray-300 gap-4">
                    <img
                      src="/images/comment-1.png"
                      alt=""
                      className="w-24 h-24 "
                    />
                    <div>
                      <div className="flex my-0 py-0 gap-x-20">
                      <h3 className="font-bold text-[#151875]">{product.subname}</h3>
                      <p className="text-sm text-gray-500">{product.date}</p>
                      </div>
                      <p className=" py-0 my-0 text-gray-400 md:leading-8">
                      {product.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <form className="space-y-4  pt-8">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="p-2 border border-gray-400 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Write Your Email*"
                    className="p-2 border border-gray-400 rounded"
                  />
                </div>
                <textarea
                  placeholder="Write your comment*"
                  rows={6}
                  className="w-full p-2 border border-gray-400 rounded"
                ></textarea>
                <button className="w-full py-2 bg-[#FB2E86] text-white rounded">
                  Continue Shipping
                </button>
              </form>
            </article>

            
          </div>

          {/* Sidebar */}
          <aside>
             <BlogSidebar /> 
          </aside>
        </div>
        <div className="md:pt-[100px]">
        {/* <BrandLogos/> */}
        </div>
      </div>
    </div>
  )
}