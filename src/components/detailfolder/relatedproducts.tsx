"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/sanity";
import Link from "next/link";
import Tags from "../Homepage/Tags";

const Relatedproducts: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "relatedProduct"]{
        id, 
        name,
        price,
        description,
        originalPrice,
        "image": image.asset->url
      }`;
      try {
        const product = await sanityClient.fetch(query);
        setProducts(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <div>
      <section className="wrapper mt-28 px-4">
        <div className="grid sm:grid-cols-2 md:flex md:justify-between gap-6">
          <div className="text-[#151875] md:text-xl font-semibold underline family">
            Description
          </div>
          <div className="text-[#151875] md:text-xl font-semibold family">
            Additional Info
          </div>
          <div className="text-[#151875] md:text-xl font-semibold family">
            Reviews
          </div>
          <div className="text-[#151875] md:text-xl font-semibold family">
            Video
          </div>
        </div>

        <div className="mt-8">
          <div className="text-[#151875] text-lg sm:text-xl font-semibold family">
            Varius tempor.
          </div>
          <p className="text-[#a9acc6] text-base sm:text-base leading-relaxed mt-4 family">
            Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.
          </p>
        </div>

        <div className="mt-8">
          <div className="text-[#151875] text-lg sm:text-xl font-semibold family">
            More details
          </div>
          <ul className="list-disc text-[#a9acc6] text-base sm:text-base leading-relaxed ml-3 mt-4 family">
            <li>Aliquam dis vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet.</li>
            <li>Montes, mauris varius ac est bibendum.</li>
            <li>Velit consectetur neque, elit, aliquet.</li>
            <li>Non varius proin sed urna, egestas consequat laoreet diam tincidunt.</li>
          </ul>
        </div>

        <h1 className="text-[#101750] text-2xl sm:text-3xl font-bold mt-12 family">
          Related Products
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {products.map((product: any) => (
            <div key={product.id} className="text-center">
              <Image
                className="w-full max-w-[270px] h-auto rounded-md mx-auto transform transition-transform duration-300 hover:scale-105"
                src={product.image}
                alt={product.name}
                width={270}
                height={270}
              />
              <Link href={`/relatedProduct/${product.id}`}>
                <div className="text-[#151875] text-sm font-normal mt-2">
                  {product.price}
                  <div>⭐⭐⭐⭐⭐</div>
                </div>
                <div className="text-[#151875] text-base font-semibold family">
                  {product.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <Tags/>
      </section>
    </div>
  );
};

export default Relatedproducts;
