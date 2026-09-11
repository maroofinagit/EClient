import { Order } from "@/types/Order";

export const order: Order = {
    id: "order-1",
    userId: "user-1",

    items: [
        {
            id: "1",
            productName: "White T-Shirt",

            color: {
                name: "White",
                hex: "#FFFFFF",
            },

            size: "M",

            image: "https://images.pexels.com/photos/12039633/pexels-photo-12039633.jpeg?auto=compress&cs=tinysrgb&w=800",

            price: 899,
            quantity: 1,
        },

        {
            id: "2",
            productName: "Blue Shirt",

            color: {
                name: "Blue",
                hex: "#0000FF",
            },

            size: "M",

            image: "https://images.pexels.com/photos/6995744/pexels-photo-6995744.jpeg?auto=compress&cs=tinysrgb&w=800",

            price: 1599,
            quantity: 1,
        },

        {
            id: "3",
            productName: "Navy Blue Jeans",

            color: {
                name: "Navy Blue",
                hex: "#000080",
            },

            size: "L",

            image: "https://images.pexels.com/photos/17630811/pexels-photo-17630811.jpeg?auto=compress&cs=tinysrgb&w=800",

            price: 2199,
            quantity: 1,
        },
    ],

    subtotal: 4697,
    shipping: 0,
    total: 4697,

    status: "confirmed",
    trackingNumber: "TRACK123456789",

    createdAt: "2026-09-11T12:00:00.000Z",
};