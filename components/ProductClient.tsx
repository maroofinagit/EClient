"use client";

import { Product } from "@/types/Product";
import { ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductInteraction from "./ProductInteraction";
import { toast } from "sonner";

export default function ProductClientPage({
    product,
}: {
    product: Product;
}) {
    const searchParams = useSearchParams();

    const size = searchParams.get("size");
    const color = searchParams.get("color");

    // Default selections
    const selectedColor =
        color || product.variants[0]?.color.name;

    const selectedColorVariant = product.variants.find(
        (variant) =>
            variant.color.name === selectedColor
    );

    const selectedSize =
        size || selectedColorVariant?.sizes[0]?.size;

    // Find the selected color variant
    const selectedVariant = product.variants.find(
        (variant) =>
            variant.color.name === selectedColor
    );

    // Find the selected size information
    const selectedSizeVariant = selectedVariant?.sizes.find(
        (sizeVariant) =>
            sizeVariant.size === selectedSize
    );

    const image =
        selectedVariant?.images[0] ||
        product.variants[0]?.images[0] ||
        "/placeholder.png";

    const price = selectedVariant?.price ?? 0;

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: product.name,
                    text: `Check out ${product.name} on Cyber Mart. Shop now and discover more at Cyber Mart. | ${product.description}`,
                    url: window.location.href,
                })
                .then(() => {
                    toast.success(
                        "Product shared successfully!"
                    );

                    console.log(
                        "Product Details shared successfully.",
                        product.name,
                        product.description,
                        window.location.href
                    );
                })
                .catch((error) => {
                    console.log("Error sharing:", error);
                    toast.error(
                        "Failed to share the product."
                    );
                });
        } else {
            console.warn(
                "Web Share API is not supported in this browser."
            );
        }
    };

    return (
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden px-12 pt-20 pb-12 lg:flex-row">

            {/* BACK BUTTON */}
            <Link
                href="/products"
                className="absolute top-6 left-5 mb-4 flex cursor-pointer items-center gap-2 rounded-md bg-amber-800 px-4 py-2 text-sm text-white transition-colors duration-300 ease-in-out hover:bg-amber-900 md:text-base"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Products
            </Link>

            {/* IMAGE */}
            <div className="relative aspect-2/3 w-full overflow-hidden rounded-lg bg-gray-100 lg:h-128 lg:w-4/12">
                <Image
                    src={image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
                />
            </div>

            {/* DETAILS */}
            <div className="flex h-full w-full flex-col items-start justify-start gap-4 lg:w-7/12">

                {/* NAME + SHARE */}
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-lg font-medium md:text-2xl">
                        {product.name}
                    </h1>

                    <button
                        type="button"
                        onClick={handleShare}
                    >
                        <Share2 className="h-5 w-5 cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-600 md:h-6 md:w-6" />
                    </button>
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-500 md:text-base">
                    {product.description}
                </p>

                {/* PRICE */}
                <h2 className="text-lg font-semibold md:text-2xl">
                    ₹{price.toFixed(2)}
                </h2>

                {/* PRODUCT INTERACTION */}
                <ProductInteraction
                    product={product}
                />

                {/* CARD INFO */}
                <div className="mt-8 flex items-center gap-2">
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

                {/* PAYMENT TERMS */}
                <p className="mt-2 text-xs text-gray-500 md:text-sm">
                    By clicking Pay Now, you agree to our{" "}
                    <span className="underline hover:text-black">
                        Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span className="underline hover:text-black">
                        Privacy Policy
                    </span>
                    . You authorize us to charge your selected
                    payment method for the total amount shown.
                    All sales are subject to our return and{" "}
                    <span className="underline hover:text-black">
                        Refund Policies
                    </span>
                    .
                </p>
            </div>
        </div>
    );
}