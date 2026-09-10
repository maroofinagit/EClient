"use client";

import useCartStore from "@/stores/cartStore";
import {
    Product,
    ProductSize,
} from "@/types/Product";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ProductInteraction = ({
    product,
}: {
    product: Product;
}) => {
    // Selected color variant
    const [selectedVariant, setSelectedVariant] = useState(
        product.variants[0]
    );

    // Selected size
    const [selectedSize, setSelectedSize] = useState<ProductSize>(
        product.variants[0]?.sizes[0]?.size
    );

    const [quantity, setQuantity] = useState(1);

    const { addToCart, cart } = useCartStore();

    const [isInCart, setIsInCart] = useState(false);

    // Get selected size information
    const selectedSizeVariant = selectedVariant?.sizes.find(
        (sizeVariant) =>
            sizeVariant.size === selectedSize
    );

    const router = useRouter();

    const stock = selectedSizeVariant?.stock ?? 0;

    // Check whether this exact product/color/size is already in cart
    useEffect(() => {
        const exists = cart.some(
            (item) =>
                item.id === product.id &&
                item.productVariant.id === selectedVariant?.id &&
                item.productVariant.size === selectedSize
        );

        setIsInCart(exists);
    }, [
        cart,
        product.id,
        selectedVariant,
        selectedSize,
    ]);

    // Sizes available for currently selected color
    const sizes = selectedVariant?.sizes ?? [];

    // Available colors
    const colors = product.variants;

    // Handle size change
    const handleSizeChange = (size: ProductSize) => {
        setSelectedSize(size);
        setQuantity(1);
    };

    // Handle color change
    const handleColorChange = (colorName: string) => {
        const variant = product.variants.find(
            (variant) =>
                variant.color.name === colorName
        );

        if (!variant) return;

        setSelectedVariant(variant);

        // Keep current size if available in new color
        const sizeExists = variant.sizes.some(
            (sizeVariant) =>
                sizeVariant.size === selectedSize
        );

        if (!sizeExists) {
            setSelectedSize(
                variant.sizes[0]?.size
            );
        }

        setQuantity(1);
    };

    // Handle quantity
    const handleQuantityChange = (
        type: "increment" | "decrement"
    ) => {
        if (type === "increment") {
            if (quantity < stock) {
                setQuantity((prev) => prev + 1);
            }
        } else {
            setQuantity((prev) =>
                Math.max(1, prev - 1)
            );
        }
    };

    // Add to cart
    const handleAddToCart = () => {
        if (!selectedVariant || !selectedSizeVariant) {
            toast.error(
                "Selected variant is not available"
            );
            return;
        }

        if (stock <= 0) {
            toast.error(
                "Selected size is out of stock"
            );
            return;
        }

        if (quantity > stock) {
            toast.error(
                `Only ${stock} item${stock === 1 ? "" : "s"} available`
            );
            return;
        }

        if (isInCart) {
            toast.info(
                "This product variant is already in the cart"
            );
            return;
        }

        addToCart({
            id: product.id,
            name: product.name,

            productVariant: {
                ...selectedVariant,
                size: selectedSize,
            },

            quantity,
        });

        toast.success(
            "Product added to cart",
            {
                duration: 1500,
            }
        );
    };

    const handleBuyItem = () => {
        if (!selectedVariant || !selectedSizeVariant) {
            toast.error("Selected variant is not available");
            return;
        }

        if (stock <= 0) {
            toast.error("Selected size is out of stock");
            return;
        }

        const isAlreadyInCart = cart.some(
            (item) =>
                item.id === product.id &&
                item.productVariant.id === selectedVariant.id &&
                item.productVariant.size === selectedSize
        );

        if (isAlreadyInCart) {
            router.push("/cart");
            return;
        }

        addToCart({
            id: product.id,
            name: product.name,
            productVariant: {
                ...selectedVariant,
                size: selectedSize,
            },
            quantity,
        });

        toast.success("Product added to cart", {
            duration: 1500,
        });

        router.push("/cart");
    };

    return (
        <div className="flex w-full flex-col gap-4 lg:mt-4">

            {/* SIZE */}
            <div className="flex flex-col gap-2 text-xs">
                <span className="text-gray-500">
                    Size
                </span>

                <div className="flex items-center gap-2">
                    {sizes.map((sizeVariant) => {
                        const size = sizeVariant.size;

                        return (
                            <button
                                type="button"
                                key={size}
                                onClick={() =>
                                    handleSizeChange(size)
                                }
                                className={`cursor-pointer border p-0.5 ${selectedSize === size
                                    ? "border-gray-600"
                                    : "border-gray-300"
                                    }`}
                            >
                                <div
                                    className={`flex h-6 w-6 items-center justify-center text-center ${selectedSize === size
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                        }`}
                                >
                                    {size
                                        .slice(0, 1)
                                        .toUpperCase()}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* COLOR */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">
                    Color
                </span>

                <div className="flex items-center gap-2">
                    {colors.map((variant) => {
                        const colorName =
                            variant.color.name;

                        return (
                            <button
                                type="button"
                                key={variant.id}
                                onClick={() =>
                                    handleColorChange(
                                        colorName
                                    )
                                }
                                aria-label={`Select ${colorName}`}
                                className={`cursor-pointer rounded-full border p-0.5 ${selectedVariant?.id ===
                                    variant.id
                                    ? "border-gray-600"
                                    : "border-gray-300"
                                    }`}
                            >
                                <div
                                    className="h-6 w-6 rounded-full"
                                    style={{
                                        backgroundColor:
                                            variant.color.hex,
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* STOCK */}
            <div className="text-sm">
                {stock > 0 ? (
                    <span className="text-gray-500">
                        {stock} available
                    </span>
                ) : (
                    <span className="text-red-500">
                        Out of stock
                    </span>
                )}
            </div>

            {/* QUANTITY */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">
                    Quantity
                </span>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="cursor-pointer border border-gray-300 p-1 disabled:cursor-not-allowed disabled:opacity-50"
                        onClick={() =>
                            handleQuantityChange(
                                "decrement"
                            )
                        }
                        disabled={quantity <= 1}
                    >
                        <Minus className="h-4 w-4" />
                    </button>

                    <span>{quantity}</span>

                    <button
                        type="button"
                        className="cursor-pointer border border-gray-300 p-1 disabled:cursor-not-allowed disabled:opacity-50"
                        onClick={() =>
                            handleQuantityChange(
                                "increment"
                            )
                        }
                        disabled={
                            quantity >= stock ||
                            stock <= 0
                        }
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-4 flex w-full justify-between gap-4 text-xs md:justify-start md:text-sm lg:text-base">

                {/* ADD TO CART */}
                <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={
                        isInCart ||
                        stock <= 0
                    }
                    className="flex cursor-pointer items-center justify-between gap-1 rounded-md bg-gray-800 px-3 py-2 font-medium text-white shadow-lg disabled:cursor-not-allowed disabled:bg-amber-800 disabled:opacity-60 md:gap-2 lg:px-4"
                >
                    <Plus className="h-4 w-4" />

                    {isInCart
                        ? "Already in Cart"
                        : stock <= 0
                            ? "Out of Stock"
                            : "Add to Cart"}
                </button>

                {/* CART */}
                <button
                    type="button"
                    onClick={handleBuyItem}
                    disabled={stock <= 0}
                    className="flex cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2 font-medium text-gray-800 shadow-lg ring-1 ring-gray-400 transition-all hover:bg-gray-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 lg:px-4"
                >
                    <ShoppingCart className="size-3 md:size-4" />
                    Buy this Item
                </button>
            </div>
        </div>
    );
};

export default ProductInteraction;