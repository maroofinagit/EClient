"use client";

import useCartStore from "@/stores/cartStore";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
    const { cart, hasHydrated } = useCartStore();

    if (!hasHydrated) return null;
    return (
        <Link href="/cart" className="relative mr-2 rounded-full p-2 transition hover:bg-amber-800 hover:text-white">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
                {cart.length}
            </span>
        </Link>
    );
};

export default CartIcon;