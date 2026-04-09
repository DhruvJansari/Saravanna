"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Product Data (same as above - you can import from a separate file)
const jewelleryProducts = [
  {
    id: 1,
    name: "Diamond Elegance Necklace",
    price: "$2,499",
    originalPrice: "$3,499",
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80"
    ],
    description: "Exquisite diamond necklace with 18k white gold setting. This stunning piece features 2.5 carats of brilliant-cut diamonds, meticulously set to catch light from every angle. Perfect for special occasions or as a timeless addition to your collection.",
    details: [
      "18k White Gold",
      "2.5 carat total diamond weight",
      "VS clarity, G-H color diamonds",
      "Length: 18 inches",
      "Lobster clasp closure"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    slug: "diamond-elegance-necklace"
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: "$899",
    originalPrice: "$1,299",
    category: "earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80"
    ],
    description: "Cultured pearl drop earrings with diamond accents. These elegant earrings feature 12mm cultured pearls with diamond accents in 14k white gold.",
    details: [
      "14k White Gold",
      "12mm Cultured Pearls",
      "0.25 carat diamond accents",
      "Length: 1.5 inches",
      "Push back closure"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    slug: "pearl-drop-earrings"
  },
  {
    id: 3,
    name: "Sapphire Ring",
    price: "$1,899",
    originalPrice: "$2,699",
    category: "rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80"
    ],
    description: "Blue sapphire ring with diamond halo. A stunning statement piece featuring a 2-carat blue sapphire surrounded by sparkling diamonds.",
    details: [
      "Platinum Setting",
      "2 carat blue sapphire",
      "0.5 carat diamond halo",
      "Ring size: 7 (resizable)",
      "Prong setting"
    ],
    rating: 4.7,
    reviews: 56,
    inStock: true,
    slug: "sapphire-ring"
  }
  // Add more products as needed
];

export default function ProductSlug() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = jewelleryProducts.find(p => p.slug === params.slug);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      router.push("/jewellery");
    }
  }, [params.slug, router]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/jewellery" className="text-gray-500 hover:text-amber-600 transition-colors">
            ← Back to jewellery
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <Image
                src={product.gallery[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-amber-500" : "border-gray-200"
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300 fill-current"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-500 ml-2">({product.reviews} reviews)</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-amber-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold">
                    SAVE {Math.round(((product.originalPrice.replace('$', '') - product.price.replace('$', '')) / product.originalPrice.replace('$', '')) * 100)}%
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
              
              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Product Details:</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <label className="font-semibold text-gray-900">Quantity:</label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={addToCart}
                    className="flex-1 bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button className="px-6 py-3 border-2 border-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free shipping worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>30-day returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}