'use client';
import { Product } from "@/types/Product";
import { ArrowLeft } from "lucide-react";
import { Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductInteraction from "./ProductInteraction";
import { toast } from "sonner";

export default function ProductClientPage({ product }: { product: Product }) {

    const searchParams = useSearchParams();
    const size = searchParams.get("size") as string | null;
    const color = searchParams.get("color") as string | null;


    const selectedSize = size || (product.variants[0].size as string);
    const selectedColor = color || (product.variants[0].color.color as string);
    const selectedVariant = product.variants.find(
        (variant) =>
            variant.size === selectedSize && variant.color.color === selectedColor
    );

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: product.name,
                    text: `Check out ${product.name} on Cyber Mart. Shop now and discover more at Cyber Mart. | ${product.description}`,
                    url: window.location.href,
                })
                .then(() => {
                    toast.success("Product shared successfully!");
                    console.log("Product Details shared successfully.", product.name, product.description, window.location.href);
                })
                .catch((error) => {
                    console.log("Error sharing:", error);
                    toast.error("Failed to share the product.");
                });
        } else {
            console.warn("Web Share API is not supported in this browser.");
        }
    };

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
                <div className="flex justify-between w-full items-center">

                    <h1 className="text-lg md:text-2xl font-medium">{product.name}</h1>
                    <button
                        type="button"
                        onClick={handleShare}
                    >
                        <Share2 className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-600 transition-colors duration-300 ease-in-out" />
                    </button>

                </div>
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
}