'use client';
import { products } from "@/Data/Products";
import { Categories } from "./Catagories";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Filter from "./Filter";
import { SearchX } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Gender, ProductCategory, ProductType } from "@/types/Product";

export default function ProductList({
    category, gender, type, params
}: {
    category?: string;
    gender?: string;
    type?: string;
    params: "homepage" | "productspage";
}) {

    const searchParams = useSearchParams();
    const sort = searchParams.get("sort") || "newest";

    const displayedProducts =
        params === "homepage"
            ? products.filter((product) => product.isFeatured).sort((a, b) => {
                switch (sort) {
                    case "newest":
                        return (
                            new Date(b.lastUpdated).getTime() -
                            new Date(a.lastUpdated).getTime()
                        );

                    case "oldest":
                        return (
                            new Date(a.lastUpdated).getTime() -
                            new Date(b.lastUpdated).getTime()
                        );

                    case "asc":
                        return a.price - b.price;

                    case "desc":
                        return b.price - a.price;

                    default:
                        return 0;
                }
            })
            : products.filter((product) => {
                if (category && product.category !== category) {
                    return false;
                }

                if (gender && product.gender !== gender) {
                    return false;
                }

                if (type && product.type !== type) {
                    return false;
                }

                return true;
            }).sort((a, b) => {
                switch (sort) {
                    case "newest":
                        return (
                            new Date(b.lastUpdated).getTime() -
                            new Date(a.lastUpdated).getTime()
                        );

                    case "oldest":
                        return (
                            new Date(a.lastUpdated).getTime() -
                            new Date(b.lastUpdated).getTime()
                        );

                    case "asc":
                        return a.price - b.price;

                    case "desc":
                        return b.price - a.price;

                    default:
                        return 0;
                }
            });

    const categoryTitles: Record<ProductCategory | any, { title: string, description: string }> = {
        All: { title: "All Products", description: "Explore our diverse range of products across all categories" },
        Clothing: { title: "Fashion & Apparel", description: "Discover the latest in fashion and apparel" },
        Shoes: { title: "Step Into Style", description: "Find the perfect pair of shoes for any occasion" },
        Bags: { title: "Carry in Style", description: "Elevate your look with our stylish bags" },
        Accessories: { title: "Complete Your Look", description: "Complete your outfit with our range of accessories" },
    };

    interface CategoryContent {
        title: string;
        description: string;
    }

    const categoryContent: Record<
        ProductCategory,
        CategoryContent
    > = {
        Clothing: {
            title: "Fashion & Apparel",
            description:
                "Discover everyday essentials, modern styles, and timeless pieces designed for every occasion.",
        },

        Shoes: {
            title: "Step Into Style",
            description:
                "Explore sneakers, running shoes, formal footwear, and more designed to keep you moving in style.",
        },

        Bags: {
            title: "Carry in Style",
            description:
                "Find backpacks, handbags, laptop bags, and everyday carry essentials made for style and convenience.",
        },

        Accessories: {
            title: "Complete Your Look",
            description:
                "Add the finishing touch with watches, sunglasses, belts, jewelry, and everyday accessories.",
        },
    };

    const genderContent: Record<
        ProductCategory,
        Partial<Record<Gender, CategoryContent>>
    > = {
        Clothing: {
            Men: {
                title: "Men's Fashion",
                description:
                    "Explore versatile men's clothing designed for everyday comfort, confidence, and effortless style.",
            },

            Women: {
                title: "Women's Fashion",
                description:
                    "Discover modern women's clothing that blends comfort, elegance, and everyday style.",
            },

            Unisex: {
                title: "Unisex Clothing",
                description:
                    "Discover versatile styles designed to be worn and enjoyed by everyone.",
            },
        },

        Shoes: {
            Men: {
                title: "Men's Shoes",
                description:
                    "Discover footwear built for everyday wear, performance, and timeless style.",
            },

            Women: {
                title: "Women's Shoes",
                description:
                    "Step into stylish and comfortable footwear designed for every occasion.",
            },
        },

        Bags: {
            Men: {
                title: "Men's Bags",
                description:
                    "Practical and stylish bags designed to carry everything you need throughout the day.",
            },

            Women: {
                title: "Women's Bags",
                description:
                    "Discover handbags, shoulder bags, backpacks, and more to complement every look.",
            },
        },

        Accessories: {
            Men: {
                title: "Men's Accessories",
                description:
                    "Complete your everyday look with watches, belts, sunglasses, wallets, and more.",
            },

            Women: {
                title: "Women's Accessories",
                description:
                    "Discover elegant and practical accessories designed to add personality to every outfit.",
            },
        },
    };

    const typeContent: Record<ProductType, CategoryContent> = {
        "T-Shirt": {
            title: "T-Shirts",
            description:
                "Shop comfortable and versatile T-shirts for effortless everyday style.",
        },

        Shirt: {
            title: "Shirts",
            description:
                "Discover classic and modern shirts designed for casual and polished looks.",
        },

        Jeans: {
            title: "Jeans",
            description:
                "Find everyday denim in versatile fits and styles built for lasting comfort.",
        },

        Trousers: {
            title: "Trousers",
            description:
                "Explore comfortable and refined trousers for work, casual days, and everything in between.",
        },

        Jacket: {
            title: "Jackets",
            description:
                "Layer up with stylish jackets designed for comfort, versatility, and changing weather.",
        },

        Hoodie: {
            title: "Hoodies",
            description:
                "Stay comfortable with soft, relaxed hoodies made for everyday wear.",
        },

        Top: {
            title: "Tops",
            description:
                "Discover stylish tops designed to bring comfort and personality to your everyday wardrobe.",
        },

        Dress: {
            title: "Dresses",
            description:
                "Explore versatile dresses for effortless style, from everyday looks to special occasions.",
        },

        Sneakers: {
            title: "Sneakers",
            description:
                "Discover everyday sneakers combining comfort, versatility, and contemporary style.",
        },

        "Running Shoes": {
            title: "Running Shoes",
            description:
                "Find supportive running shoes designed to keep you comfortable through every stride.",
        },

        "Formal Shoes": {
            title: "Formal Shoes",
            description:
                "Complete polished looks with timeless formal footwear designed for special occasions and professional wear.",
        },

        Heels: {
            title: "Heels",
            description:
                "Elevate your look with stylish heels designed for confidence and elegance.",
        },

        Flats: {
            title: "Flats",
            description:
                "Discover comfortable and stylish flats made for effortless everyday wear.",
        },

        Sandals: {
            title: "Sandals",
            description:
                "Stay comfortable and stylish with versatile sandals made for everyday and warm-weather wear.",
        },

        Backpack: {
            title: "Backpacks",
            description:
                "Carry your essentials comfortably with practical backpacks built for everyday life.",
        },

        "Laptop Bag": {
            title: "Laptop Bags",
            description:
                "Protect and carry your laptop with practical bags designed for work and everyday travel.",
        },

        "Sling Bag": {
            title: "Sling Bags",
            description:
                "Keep your essentials close with compact and stylish sling bags.",
        },

        Handbag: {
            title: "Handbags",
            description:
                "Discover stylish handbags designed to complement your everyday wardrobe.",
        },

        "Shoulder Bag": {
            title: "Shoulder Bags",
            description:
                "Find versatile shoulder bags that combine everyday functionality with effortless style.",
        },

        Watch: {
            title: "Watches",
            description:
                "Complete your look with watches that blend timeless design and everyday functionality.",
        },

        Belt: {
            title: "Belts",
            description:
                "Discover versatile belts designed to add the perfect finishing touch to your outfit.",
        },

        Sunglasses: {
            title: "Sunglasses",
            description:
                "Explore stylish sunglasses designed to complement your everyday look.",
        },

        Wallet: {
            title: "Wallets",
            description:
                "Keep your essentials organized with practical and stylish wallets.",
        },

        Hat: {
            title: "Hats",
            description:
                "Top off your look with versatile hats designed for everyday style.",
        },

        Scarf: {
            title: "Scarves",
            description:
                "Add warmth and personality to your outfit with versatile scarves.",
        },

        Jewelry: {
            title: "Jewelry",
            description:
                "Add an elegant finishing touch with jewelry designed to express your personal style.",
        },
    };

    let pageContent: CategoryContent = {
        title: "All Products",
        description:
            "Explore our complete collection of products across every category.",
    };

    if (category && type) {
        pageContent = typeContent[type as ProductType];
    } else if (category && gender) {
        pageContent =
            genderContent[category as ProductCategory]?.[gender as Gender] ??
            categoryContent[category as ProductCategory];
    } else if (category) {
        pageContent = categoryContent[category as ProductCategory];
    }


    return (
        <div className="flex flex-col items-center justify-start pt-12 pb-20 px-12 sm:px-6 lg:px-8">
            <Categories />
            <div className="mt-10">
                <h1 className=" text-lg md:text-2xl font-bold text-amber-800 mb-2">{params === "homepage" ? "Featured Products"
                    : searchParams.get("category") ? pageContent.title : "All Products"
                }</h1>
                <p className="text-gray-500 text-sm md:text-base">
                    {params === "homepage" ? "Discover our latest collection of high-quality products" : searchParams.get("category") ? pageContent.description : "Explore our diverse range of products across all categories"}
                </p>

                <Filter />
                {displayedProducts.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" mt-5 max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {displayedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>
                ) : (
                    <div className="flex min-h-87.5 flex-col items-center justify-center px-4 text-center">
                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                            <SearchX className="h-8 w-8 text-amber-700" />
                        </div>

                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            No products found
                        </h2>

                        <p className="mb-6 max-w-md text-sm leading-6 text-gray-500">
                            We couldn't find any products matching your current filters.
                            Try changing your filters or explore all products.
                        </p>

                        {params === 'homepage' && (
                            <Link
                                href="/products"
                                className="rounded-lg bg-amber-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-900 hover:shadow-md active:scale-95"
                            >
                                View All Products
                            </Link>
                        )}
                    </div>
                )}
            </div>
            {params === "homepage" && (
                <Link href={`/products`} className="mt-10 text-amber-800 border-amber-800 font-semibold border hover:bg-amber-800 hover:text-white transition-all px-4 py-2 rounded-lg">
                    View All Products
                </Link>
            )}
        </div>
    );
}
