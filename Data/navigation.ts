import type {
    ProductCategory,
    Gender,
    ProductType,
} from "@/types/Product";


import { GiConverseShoe } from "react-icons/gi";
import { FaShirt, FaBagShopping } from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { ElementType } from "react";



export interface NavigationItem {
    label: ProductType;
    href: string;
}

export interface NavigationGender {
    label: Gender;
    items: NavigationItem[];
}

export interface NavigationCategory {
    label: ProductCategory;
    href: string;
    icon: ElementType
    genders: NavigationGender[];
}

export const navigation: NavigationCategory[] = [
    
    {
        label: "Clothing",
        href: "/products/clothing",
        icon: FaShirt,
        genders: [
            {
                label: "Men",
                items: [
                    { label: "T-Shirt", href: "/products/clothing/men/t-shirts" },
                    { label: "Shirt", href: "/products/clothing/men/shirts" },
                    { label: "Jeans", href: "/products/clothing/men/jeans" },
                    { label: "Trousers", href: "/products/clothing/men/trousers" },
                    { label: "Jacket", href: "/products/clothing/men/jackets" },
                    { label: "Hoodie", href: "/products/clothing/men/hoodies" },
                ],
            },
            {
                label: "Women",
                items: [
                    { label: "T-Shirt", href: "/products/clothing/women/t-shirts" },
                    { label: "Shirt", href: "/products/clothing/women/shirts" },
                    { label: "Jeans", href: "/products/clothing/women/jeans" },
                    { label: "Trousers", href: "/products/clothing/women/trousers" },
                    { label: "Jacket", href: "/products/clothing/women/jackets" },
                    { label: "Hoodie", href: "/products/clothing/women/hoodies" },
                    { label: "Top", href: "/products/clothing/women/tops" },
                    { label: "Dress", href: "/products/clothing/women/dresses" },
                ],
            },
            {
                label: "Unisex",
                items: [
                    { label: "T-Shirt", href: "/products/clothing/unisex/t-shirts" },
                    { label: "Hoodie", href: "/products/clothing/unisex/hoodies" },
                    { label: "Jacket", href: "/products/clothing/unisex/jackets" },
                ],
            },
        ],
    },

    {
        label: "Shoes",
        href: "/products/shoes",
        icon: GiConverseShoe,
        genders: [
            {
                label: "Men",
                items: [
                    { label: "Sneakers", href: "/products/shoes/men/sneakers" },
                    { label: "Running Shoes", href: "/products/shoes/men/running-shoes" },
                    { label: "Formal Shoes", href: "/products/shoes/men/formal-shoes" },
                    { label: "Sandals", href: "/products/shoes/men/sandals" },
                ],
            },
            {
                label: "Women",
                items: [
                    { label: "Sneakers", href: "/products/shoes/women/sneakers" },
                    { label: "Running Shoes", href: "/products/shoes/women/running-shoes" },
                    { label: "Heels", href: "/products/shoes/women/heels" },
                    { label: "Flats", href: "/products/shoes/women/flats" },
                    { label: "Sandals", href: "/products/shoes/women/sandals" },
                ],
            },
        ],
    },

    {
        label: "Bags",
        href: "/products/bags",
        icon: FaBagShopping,
        genders: [
            {
                label: "Men",
                items: [
                    { label: "Backpack", href: "/products/bags/men/backpacks" },
                    { label: "Laptop Bag", href: "/products/bags/men/laptop-bags" },
                    { label: "Sling Bag", href: "/products/bags/men/sling-bags" },
                ],
            },
            {
                label: "Women",
                items: [
                    { label: "Handbag", href: "/products/bags/women/handbags" },
                    { label: "Shoulder Bag", href: "/products/bags/women/shoulder-bags" },
                    { label: "Sling Bag", href: "/products/bags/women/sling-bags" },
                    { label: "Backpack", href: "/products/bags/women/backpacks" },
                ],
            },
        ],
    },

    {
        label: "Accessories",
        href: "/products/accessories",
        icon: FiWatch,
        genders: [
            {
                label: "Men",
                items: [
                    { label: "Watch", href: "/products/accessories/men/watches" },
                    { label: "Belt", href: "/products/accessories/men/belts" },
                    { label: "Sunglasses", href: "/products/accessories/men/sunglasses" },
                    { label: "Wallet", href: "/products/accessories/men/wallets" },
                    { label: "Hat", href: "/products/accessories/men/hats" },
                    { label: "Scarf", href: "/products/accessories/men/scarves" },
                ],
            },
            {
                label: "Women",
                items: [
                    { label: "Watch", href: "/products/accessories/women/watches" },
                    { label: "Belt", href: "/products/accessories/women/belts" },
                    { label: "Sunglasses", href: "/products/accessories/women/sunglasses" },
                    { label: "Wallet", href: "/products/accessories/women/wallets" },
                    { label: "Hat", href: "/products/accessories/women/hats" },
                    { label: "Scarf", href: "/products/accessories/women/scarves" },
                    { label: "Jewelry", href: "/products/accessories/women/jewelry" },
                ],
            },
        ],
    },
];