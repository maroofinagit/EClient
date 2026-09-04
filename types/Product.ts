export type ProductCategory = "Clothing" | "Shoes" | "Bags" | "Accessories"

export type Gender = "Men" | "Women" | "Unisex";

export type ClothingType =
    | "T-Shirt"
    | "Shirt"
    | "Jeans"
    | "Trousers"
    | "Jacket"
    | "Hoodie"
    | "Top"
    | "Dress";

export type ShoeType =
    | "Sneakers"
    | "Running Shoes"
    | "Formal Shoes"
    | "Heels"
    | "Flats"
    | "Sandals";

export type BagType =
    | "Backpack"
    | "Laptop Bag"
    | "Sling Bag"
    | "Handbag"
    | "Shoulder Bag";


export type AccessoryType =
    | "Watch"
    | "Belt"
    | "Sunglasses"
    | "Wallet"
    | "Hat"
    | "Scarf"
    | "Jewelry";

export type ProductType = ClothingType | ShoeType | BagType | AccessoryType;

export type ProductColor =
    | "Black"
    | "White"
    | "Red"
    | "Blue"
    | "Navy Blue"
    | "Green"
    | "Olive"
    | "Yellow"
    | "Pink"
    | "Purple"
    | "Orange"
    | "Brown"
    | "Beige"
    | "Grey"
    | "Maroon";

export type ClothingSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type ShoeSize = "6" | "7" | "8" | "9" | "10" | "11" | "12";

export type BagSize = "Small" | "Medium" | "Large";

export type ProductSize = ClothingSize | ShoeSize | BagSize;

export interface ProductVariantColor {
    color: ProductColor;
    images: string[];
}

export interface ProductVariant {
    color: ProductVariantColor;
    size: ProductSize;
    stock: number;
    price: number;
    discountPrice: number;
}

export interface Product {
    id: string;
    name: string;

    category: ProductCategory;
    gender: Gender;
    type: ProductType;

    price: number;

    variants: ProductVariant[];

    brand: string;
    material?: string;

    rating: number;
    reviews: number;

    description: string;
    shortDescription: string;

    tags: string[];

    isFeatured: boolean;
    isNew: boolean;
    isActive: boolean;

    lastUpdated: string;
}

export interface CartItem {
    productVariant: ProductVariant;
    quantity: number;
    name: Product["name"];
    id:Product["id"];
}