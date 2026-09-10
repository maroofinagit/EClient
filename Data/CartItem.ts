import { CartItem } from "@/types/Product";

export const cartItems: CartItem[] = [
    {
        id: "1",
        name: "White T-Shirt",
        quantity: 1,

        productVariant: {
            id: "variant-1",
            color: {
                name: "White",
                hex: "#FFFFFF",
            },
            images: [
                "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
            sizes: [
                {
                    size: "M",
                    stock: 24,
                },
            ],
            price: 899,
            size: "M",
        },
    },

    {
        id: "2",
        name: "Blue Shirt",
        quantity: 1,

        productVariant: {
            id: "variant-2",
            color: {
                name: "Blue",
                hex: "#0000FF",
            },
            images: [
                "https://images.pexels.com/photos/6995744/pexels-photo-6995744.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
            sizes: [
                {
                    size: "M",
                    stock: 21,
                },
            ],
            price: 1599,
            size: "M",
        },
    },

    {
        id: "3",
        name: "Navy Blue Jeans",
        quantity: 1,

        productVariant: {
            id: "variant-3",
            color: {
                name: "Navy Blue",
                hex: "#000080",
            },
            images: [
                "https://images.pexels.com/photos/17630811/pexels-photo-17630811.jpeg?auto=compress&cs=tinysrgb&w=800",
            ],
            sizes: [
                {
                    size: "L",
                    stock: 11,
                },
            ],
            price: 2199,
            size: "L",
        },
    },
];