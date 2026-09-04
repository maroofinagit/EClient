"use client";

import useCartStore from "@/stores/cartStore";
import {
    Product,
    ProductColor,
    ProductSize,
    ProductVariantColor,
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
                        variant.color.color,
                        variant.color,
                    ])
                ).values()
            ),
        [product.variants]
    );

    const [selectedColor, setSelectedColor] = useState<ProductColor>(
        colors[0]?.color
    );

    // Get variants available for the selected color
    const colorVariants = useMemo(
        () =>
            product.variants.filter(
                (variant) => variant.color.color === selectedColor
            ),
        [product.variants, selectedColor]
    );

    // Get sizes available for the selected color
    const sizes = useMemo(
        () =>
            Array.from(
                new Set(colorVariants.map((variant) => variant.size))
            ) as ProductSize[],
        [colorVariants]
    );

    const [selectedSize, setSelectedSize] = useState<ProductSize>(
        sizes[0]
    );

    const { addToCart, cart } = useCartStore();

    // Find the exact selected variant
    const selectedVariant = useMemo(
        () =>
            colorVariants.find(
                (variant) => variant.size === selectedSize
            ),
        [colorVariants, selectedSize]
    );

    // Selected color's images
    const selectedColorVariant = colors.find(
        (color) => color.color === selectedColor
    );

    const image =
        selectedColorVariant?.images[0] ?? "/placeholder.png";

    const handleColorChange = (color: ProductColor) => {
        setSelectedColor(color);

        // Reset size to the first available size for the new color
        const newSizes = product.variants
            .filter((variant) => variant.color.color === color)
            .map((variant) => variant.size);

        setSelectedSize(newSizes[0]);
    };

    const handleSizeChange = (size: ProductSize) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {

        console.log("Selected Variant:", selectedVariant);
        if (!selectedVariant) {
            toast.error("Selected variant is not available");
            return;
        }

        if (selectedVariant.stock <= 0) {
            toast.error("Selected variant is out of stock");
            return;
        }

        if (cart.some(item => item.id === product.id && item.productVariant.size === selectedVariant.size && item.productVariant.color.color === selectedVariant.color.color)) {
            toast.info("This product variant is already in the cart");
            return;
        }

        console.log("Adding to cart:", {
            id: product.id,
            name: product.name,
            productVariant: selectedVariant,
            quantity: 1,
        });

        addToCart({
            id: product.id,
            name: product.name,
            productVariant: selectedVariant,
            quantity: 1,
        });

        toast.success(`${product.name} added to cart!`,{
            duration: 1500,
        })
    };

    const displayPrice =
        selectedVariant?.discountPrice ?? selectedVariant?.price ?? product.price;

    return (
        <div className="overflow-hidden relative rounded-lg shadow-lg">

            {product.isNew && (
                <Badge className="absolute top-2 left-2 z-10 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded-md shadow-md shadow-gray-600">
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
                <div>
                    <h2 className="font-medium">{product.name}</h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {product.shortDescription}
                    </p>
                </div>

                {/* PRODUCT TYPES */}
                <div className="flex items-center gap-8 text-sm">
                    {/* SIZES */}
                    {sizes.length > 0 && (
                        <div className="flex flex-col gap-2 ">
                            <span className="text-gray-500">Size</span>

                            <select
                                name={`size-${product.id}`}
                                value={selectedSize}
                                onChange={(e) =>
                                    handleSizeChange(e.target.value as ProductSize)
                                }
                                className="rounded-md p-2 text-xs ring-1 ring-gray-300 outline-none"
                            >
                                {sizes.map((size) => (
                                    <option key={size} value={size}>
                                        {size.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* COLORS */}
                    {colors.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500">Color</span>

                            <div className="flex items-center gap-2">
                                {colors.map((colorVariant) => (
                                    <button
                                        type="button"
                                        key={colorVariant.color}
                                        aria-label={`Select ${colorVariant.color}`}
                                        onClick={() =>
                                            handleColorChange(colorVariant.color)
                                        }
                                        className={`cursor-pointer rounded-full border p-[1.2px] transition-all ${selectedColor === colorVariant.color
                                            ? "border-gray-500"
                                            : "border-gray-200"
                                            }`}
                                    >
                                        <span
                                            className="block h-5 w-5 rounded-full"
                                            style={{
                                                backgroundColor: colorVariant.color,
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* PRICE AND ADD TO CART */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <p className="font-medium">
                            ₹{displayPrice.toFixed(2)}
                        </p>

                        {selectedVariant?.discountPrice && (
                            <p className="text-sm text-gray-400 line-through">
                                ₹{selectedVariant.price.toFixed(2)}
                            </p>
                        )}
                    </div>
                        
                    <div className="absolute bottom-4 right-4">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="flex cursor-pointer items-center gap-2 rounded-md border border-amber-800 px-3 py-2 text-sm text-amber-800  hover:text-white transition-all hover:bg-amber-800"
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