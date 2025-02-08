
import ProductDetails from "@/components/detailfolder/ProductDeatail";
import { client } from "@/sanity/lib/client";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const fetchProduct = async (id: string) => {
    const query = `*[_type == "item" && id == "${id}"][0]{
      id,
      name,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category->{
        title,
        value, 
      },
      "image": image.asset->url
    }`;
    return await client.fetch(query);
  };

  const product = await fetchProduct(params.id);
  if (!product) return <p>Product not found</p>;

  return <ProductDetails product={product} />;
}