"use client";

import useCartStore from "@/stores/cartStore";
import {
    Product,
    ProductColor,
    ProductSize,
} from "@/types/Product";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Badge } from "./ui/badge";

const ProductCard = ({ product }: { product: Product }) => {
    // Get unique colors from variants
    const colors = useMemo(
        () =>
            Array.from(
                new Map(
                    product.variants.map((variant) => [
                        variant.color.name,
                        variant.color,
                    ])
                ).values()
            ),
        [product.variants]
    );

    const [selectedColor, setSelectedColor] = useState<ProductColor>(
        colors[0]?.name
    );

    // Get the variant for the selected color
    const selectedColorVariant = useMemo(
        () =>
            product.variants.find(
                (variant) => variant.color.name === selectedColor
            ),
        [product.variants, selectedColor]
    );

    // Get sizes available for the selected color
    const sizes = useMemo(
        () =>
            selectedColorVariant?.sizes.map(
                (sizeVariant) => sizeVariant.size
            ) ?? [],
        [selectedColorVariant]
    );

    const [selectedSize, setSelectedSize] = useState<ProductSize>(
        sizes[0]
    );

    const { addToCart, cart } = useCartStore();

    // Find stock for selected size
    const selectedSizeVariant = useMemo(
        () =>
            selectedColorVariant?.sizes.find(
                (sizeVariant) => sizeVariant.size === selectedSize
            ),
        [selectedColorVariant, selectedSize]
    );

    const handleColorChange = (color: ProductColor) => {
        setSelectedColor(color);

        // Get the new color variant
        const newVariant = product.variants.find(
            (variant) => variant.color.name === color
        );

        // Reset size to the first available size
        const newSize = newVariant?.sizes[0]?.size;
        if (newSize !== undefined) {
            setSelectedSize(newSize);
        }
    };

    const handleSizeChange = (size: ProductSize) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (!selectedColorVariant || !selectedSizeVariant) {
            toast.error("Selected variant is not available");
            return;
        }

        if (selectedSizeVariant.stock <= 0) {
            toast.error("Selected size is out of stock");
            return;
        }

        const alreadyInCart = cart.some(
            (item) =>
                item.id === product.id &&
                item.productVariant.id === selectedColorVariant.id &&
                item.productVariant.size === selectedSize
        );

        if (alreadyInCart) {
            toast.info("This product variant is already in the cart");
            return;
        }

        addToCart({
            id: product.id,
            name: product.name,
            productVariant: {
                ...selectedColorVariant,
                size: selectedSize,
            },
            quantity: 1,
        });

        toast.success(`${product.name} added to cart!`, {
            duration: 1500,
        });
    };

    const image =
        selectedColorVariant?.images[0] ?? "/placeholder.png";

    const displayPrice = selectedColorVariant?.price ?? 0;

    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">

            {/* NEW BADGE */}
            {product.isNew && (
                <Badge className="absolute top-2 left-2 z-10 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-md shadow-gray-600">
                    New
                </Badge>
            )}

            {/* IMAGE */}
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-4/5 overflow-hidden">
                    <Image
                        src={image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-all duration-300 hover:scale-105"
                    />
                </div>
            </Link>

            {/* PRODUCT DETAIL */}
            <div className="flex flex-col gap-4 p-4">

                {/* NAME + DESCRIPTION */}
                <div>
                    <h2 className="font-medium">
                        {product.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {product.shortDescription}
                    </p>
                </div>

                {/* SIZE + COLOR */}
                <div className="flex items-center gap-8 text-sm">

                    {/* SIZES */}
                    {sizes.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500">
                                Size
                            </span>

                            <select
                                name={`size-${product.id}`}
                                value={selectedSize}
                                onChange={(e) =>
                                    handleSizeChange(
                                        e.target.value as ProductSize
                                    )
                                }
                                className="rounded-md p-2 text-xs ring-1 ring-gray-300 outline-none"
                            >
                                {sizes.map((size) => (
                                    <option
                                        key={size}
                                        value={size}
                                    >
                                        {size.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* COLORS */}
                    {colors.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500">
                                Color
                            </span>

                            <div className="flex items-center gap-2">
                                {colors.map((color) => (
                                    <button
                                        type="button"
                                        key={color.name}
                                        aria-label={`Select ${color.name}`}
                                        onClick={() =>
                                            handleColorChange(
                                                color.name
                                            )
                                        }
                                        className={`cursor-pointer rounded-full border p-[1.2px] transition-all ${selectedColor === color.name
                                                ? "border-gray-500"
                                                : "border-gray-200"
                                            }`}
                                    >
                                        <span
                                            className="block h-5 w-5 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    color.hex,
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* PRICE + ADD TO CART */}
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <p className="font-medium">
                            ₹{displayPrice.toFixed(2)}
                        </p>
                    </div>

                    <div className="absolute right-4 bottom-4">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="flex cursor-pointer items-center gap-2 rounded-md border border-amber-800 px-3 py-2 text-sm text-amber-800 transition-all hover:bg-amber-800 hover:text-white"
                        >
                            <ShoppingCart size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;