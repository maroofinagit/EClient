"use client";

import useCartStore from "@/stores/cartStore";
import { Product } from "@/types/Product";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ProductInteraction = ({
    product,
}: {
    product: Product;
}) => {
    const [selectedVariant, setSelectedVariant] = useState(
        product.variants[0]
    );

    const [quantity, setQuantity] = useState(1);

    const { addToCart, cart } = useCartStore();
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const exists = cart.some(
            (item) =>
                item.id === product.id &&
                item.productVariant.size === selectedVariant.size &&
                item.productVariant.color.color ===
                selectedVariant.color.color
        );

        setIsInCart(exists);
    }, [cart, product.id, selectedVariant]);


    const sizes = Array.from(
        new Set(product.variants.map((variant) => variant.size))
    );

    const colors = Array.from(
        new Set(
            product.variants.map(
                (variant) => variant.color.color
            )
        )
    );

    const handleSizeChange = (
        size: Product["variants"][number]["size"]
    ) => {
        // Try to keep the currently selected color
        const variant = product.variants.find(
            (variant) =>
                variant.size === size &&
                variant.color.color === selectedVariant.color.color
        );

        if (variant) {
            setSelectedVariant(variant);
            setQuantity(1);
            return;
        }

        // If that size doesn't exist with the current color,
        // select the first variant having that size.
        const firstVariantForSize = product.variants.find(
            (variant) => variant.size === size
        );

        if (firstVariantForSize) {
            setSelectedVariant(firstVariantForSize);
            setQuantity(1);
        }
    };

    const handleColorChange = (
        color: Product["variants"][number]["color"]["color"]
    ) => {
        const variant = product.variants.find(
            (variant) =>
                variant.color.color === color &&
                variant.size === selectedVariant.size
        );

        if (variant) {
            setSelectedVariant(variant);
            setQuantity(1);
        } else {
            // If current size doesn't exist for this color,
            // select the first variant having this color.
            const firstVariantForColor = product.variants.find(
                (variant) =>
                    variant.color.color === color
            );

            if (firstVariantForColor) {
                setSelectedVariant(firstVariantForColor);
                setQuantity(1);
            }
        }
    };

    const handleQuantityChange = (
        type: "increment" | "decrement"
    ) => {
        if (type === "increment") {
            if (quantity < selectedVariant.stock) {
                setQuantity((prev) => prev + 1);
            }
        } else {
            setQuantity((prev) => Math.max(1, prev - 1));
        }
    };

    const handleAddToCart = () => {

        if (isInCart) {
            toast.info("This product variant is already in the cart");
            return;
        }

        if (!selectedVariant) {
            toast.error("Selected variant is not available");
            return;
        }

        if (selectedVariant.stock <= 0) {
            toast.error("Selected variant is out of stock");
            return;
        }
        
        addToCart({
            productVariant: selectedVariant,
            quantity,
            name: product.name,
            id: product.id,
        });

        toast.success("Product added to cart", {
            duration: 1500,
        });
    };

    return (
        <div className="flex flex-col gap-4 lg:mt-4 w-full">

            {/* SIZE */}
            <div className="flex flex-col gap-2 text-xs">
                <span className="text-gray-500">
                    Size
                </span>

                <div className="flex items-center gap-2">
                    {sizes.map((size) => (
                        <button
                            type="button"
                            key={size}
                            onClick={() =>
                                handleSizeChange(size)
                            }
                            className={`cursor-pointer border p-0.5 ${selectedVariant.size === size
                                ? "border-gray-600"
                                : "border-gray-300"
                                }`}
                        >
                            <div
                                className={`w-6 h-6 text-center flex items-center justify-center ${selectedVariant.size === size
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                                    }`}
                            >
                                {size.slice(0, 1).toUpperCase()}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* COLOR */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">
                    Color
                </span>

                <div className="flex items-center gap-2">
                    {colors.map((color) => (
                        <button
                            type="button"
                            key={color}
                            onClick={() =>
                                handleColorChange(color)
                            }
                            className={`cursor-pointer rounded-full border p-0.5 ${selectedVariant.color.color ===
                                color
                                ? "border-gray-600"
                                : "border-gray-300"
                                }`}
                        >
                            <div
                                className="w-6 h-6 rounded-full"
                                style={{
                                    backgroundColor: color,
                                }}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* QUANTITY */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">
                    Quantity
                </span>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="cursor-pointer border border-gray-300 p-1"
                        onClick={() =>
                            handleQuantityChange("decrement")
                        }
                    >
                        <Minus className="w-4 h-4" />
                    </button>

                    <span>{quantity}</span>

                    <button
                        type="button"
                        className="cursor-pointer border border-gray-300 p-1"
                        onClick={() =>
                            handleQuantityChange("increment")
                        }
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-between md:justify-start mt-4 gap-4 text-xs md:text-sm lg:text-base w-full">
                <button
                    type="button"
                    onClick={handleAddToCart}
                    className="bg-gray-800 text-white lg:px-4 px-3 py-2 rounded-md shadow-lg flex items-center justify-between gap-1 md:gap-2 cursor-pointer font-medium disabled:bg-amber-800 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isInCart}
                >
                    <Plus className="w-4 h-4" />
                    {isInCart ? "Already in Cart" : "Add to Cart"}
                </button>

                <Link
                    href="/cart"
                    className="ring-1 ring-gray-400 shadow-lg text-gray-800 lg:px-4 px-3 py-2 rounded-md flex items-center justify-between cursor-pointer gap-2 font-medium"
                >
                    <ShoppingCart className="size-3 md:size-4" />
                    Buy this Item
                </Link>
            </div>
        </div>
    );
};

export default ProductInteraction;