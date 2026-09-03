import { CartItem } from "@/types/Product";

export const cartItems: CartItem[] = [
    {
        productVariant: {
            color: {
                color: "White",
                images: [
                    "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&w=800",
                ],
            },
            size: "M",
            stock: 24,
            price: 899,
            discountPrice: 699,
        },
        quantity: 1,
        name: "White T-Shirt",
        id: "1",
    },

    {
        productVariant: {
            color: {
                color: "Blue",
                images: [
                    "https://images.pexels.com/photos/6995744/pexels-photo-6995744.jpeg?auto=compress&cs=tinysrgb&w=800",
                ],
            },
            size: "M",
            stock: 21,
            price: 1599,
            discountPrice: 1299,
        },
        quantity: 1,
        name: "Blue Shirt",
        id: "2",
    },

    {
        productVariant: {
            color: {
                color: "Navy Blue",
                images: [
                    "https://images.pexels.com/photos/17630811/pexels-photo-17630811.jpeg?auto=compress&cs=tinysrgb&w=800",
                ],
            },
            size: "L",
            stock: 11,
            price: 2199,
            discountPrice: 1799,
        },
        quantity: 1,
        name: "Navy Blue Jeans",
        id: "3",
    },
];