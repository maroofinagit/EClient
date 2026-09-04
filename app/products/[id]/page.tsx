import ProductInteraction from "@/components/ProductInteraction";
import { products } from "@/Data/Products";
import { Product } from "@/types/Product";
import { title } from "framer-motion/client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { id } from "zod/locales";

// TEMPORARY
// const product: Product = {
//     id: "prod-004",
//     name: "Relaxed Fit Everyday Hoodie",
//     category: "Clothing",
//     gender: "Unisex",
//     type: "Hoodie",
//     price: 1999,
//     discountPrice: 1599,
//     variants: [
//         {
//             color: {
//                 color: "Grey",
//                 images: [
//                     "https://images.pexels.com/photos/5781307/pexels-photo-5781307.jpeg?auto=compress&cs=tinysrgb&w=800",
//                 ],
//             },
//             size: "L",
//             stock: 19,
//             price: 1999,
//             discountPrice: 1599,
//         },
//         {
//             color: {
//                 color: "Black",
//                 images: [
//                     "https://images.pexels.com/photos/5781307/pexels-photo-5781307.jpeg?auto=compress&cs=tinysrgb&w=800",
//                 ],
//             },
//             size: "XL",
//             stock: 12,
//             price: 1999,
//             discountPrice: 1599,
//         },
//     ],
//     brand: "Street Form",
//     material: "Cotton Fleece",
//     rating: 4.7,
//     reviews: 96,
//     description:
//         "A relaxed unisex hoodie with a soft fleece interior, roomy fit and understated streetwear styling.",
//     shortDescription: "Soft fleece hoodie with a relaxed streetwear fit.",
//     tags: ["hoodie", "streetwear", "fleece", "unisex", "winter"],
//     isFeatured: false,
//     isNew: true,
//     isActive: true,
//     lastUpdated: "2026-09-01",
// }

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    // TODO:get the product from db
    // TEMPORARY

    const productId = (await params).id

    const product: Product = products.find((p) => p.id === productId) as Product;

    return {
        title: product.name,
        description: product.shortDescription,
    };
};

const ProductPage = async ({
    params,
    searchParams,
}: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ color: string; size: string }>;
}) => {
    const { size, color } = await searchParams;

    const productId = (await params).id

    const product: Product = products.find((p) => p.id === productId) as Product;

    const selectedSize = size || (product.variants[0].size as string);
    const selectedColor = color || (product.variants[0].color.color as string);
    const selectedVariant = product.variants.find(
        (variant) =>
            variant.size === selectedSize && variant.color.color === selectedColor
    );

    return (
        <div className="flex relative flex-col w-full pb-12 pt-20 mx-auto px-12 max-w-7xl overflow-hidden items-center justify-between gap-8 lg:flex-row">

            <Link href="/products" className="absolute top-6 left-5 bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-900 transition-colors duration-300 ease-in-out mb-4 flex cursor-pointer items-center gap-2 text-sm md:text-base" 
            >
                <ArrowLeft className="h-4 w-4 textxl" />
                Back to Products
            </Link>
            {/* IMAGE */}
            <div className="lg:h-128 w-full lg:w-4/12 relative aspect-2/3 rounded-lg overflow-hidden bg-gray-100">
                <Image
                    src={selectedVariant?.color.images[0] || product.variants[0].color.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                />
            </div>
            {/* DETAILS */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4 h-full justify-start items-start">
                <h1 className="text-lg md:text-2xl font-medium">{product.name}</h1>
                <p className="text-gray-500 text-sm md:text-base">{product.description}</p>
                <h2 className="text-lg md:text-2xl font-semibold">${product.price.toFixed(2)}</h2>
                <ProductInteraction
                    product={product}
                />
                {/* CARD INFO */}
                <div className="flex items-center gap-2 mt-8">
                    <Image
                        src="/paypal.png"
                        alt="paypal"
                        width={50}
                        height={25}
                        className="rounded-md"
                    />
                    <Image
                        src="/cards.png"
                        alt="cards"
                        width={50}
                        height={25}
                        className="rounded-md"
                    />
                    <Image
                        src="/stripe.png"
                        alt="stripe"
                        width={50}
                        height={25}
                        className="rounded-md"
                    />
                </div>
                <p className="text-gray-500 text-xs md:text-sm mt-2">
                    By clicking Pay Now, you agree to our{" "}
                    <span className="underline hover:text-black">Terms & Conditions</span>{" "}
                    and <span className="underline hover:text-black">Privacy Policy</span>
                    . You authorize us to charge your selected payment method for the
                    total amount shown. All sales are subject to our return and{" "}
                    <span className="underline hover:text-black">Refund Policies</span>.
                </p>
            </div>
        </div>
    );
};

export default ProductPage;