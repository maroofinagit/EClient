import { CartStoreActionsType, CartStoreStateType } from "@/types/Cart";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist(
        (set) => ({
            cart: [],
            hasHydrated: false,

            addToCart: (product) =>
                set((state) => {
                    const existingIndex = state.cart.findIndex(
                        (p) =>
                            p.id === product.id &&
                            p.productVariant.size ===
                            product.productVariant.size &&
                            p.productVariant.color.color ===
                            product.productVariant.color.color
                    );

                    if (existingIndex !== -1) {
                        const updatedCart = [...state.cart];

                        updatedCart[existingIndex].quantity +=
                            product.quantity || 1;

                        return { cart: updatedCart };
                    }

                    return {
                        cart: [
                            ...state.cart,
                            {
                                ...product,
                                quantity: product.quantity || 1,
                                productVariant: {
                                    ...product.productVariant,
                                },
                            },
                        ],
                    };
                }),

            addQuantityToCart: (product) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === product.id &&
                            item.productVariant.size === product.productVariant.size &&
                            item.productVariant.color.color ===
                            product.productVariant.color.color
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item
                    ),
                })),

            removeFromCart: (product) =>
                set((state) => ({
                    cart: state.cart.filter(
                        (p) =>
                            !(
                                p.id === product.id &&
                                p.productVariant.size ===
                                product.productVariant.size &&
                                p.productVariant.color.color ===
                                product.productVariant.color.color
                            )
                    ),
                })),

            removeQuantityFromCart: (product) =>
                set((state) => {
                    const existingIndex = state.cart.findIndex(
                        (p) =>
                            p.id === product.id &&
                            p.productVariant.size ===
                            product.productVariant.size &&
                            p.productVariant.color.color ===
                            product.productVariant.color.color
                    );

                    if (existingIndex !== -1) {
                        const updatedCart = [...state.cart];

                        if (updatedCart[existingIndex].quantity > 1) {
                            updatedCart[existingIndex].quantity -= 1;
                        } else {
                            updatedCart.splice(existingIndex, 1);
                        }

                        return { cart: updatedCart };
                    }

                    return state;
                }),

            clearCart: () => set({ cart: [] }),
        }),

        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),

            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.hasHydrated = true;
                }
            },
        }
    )
);

export default useCartStore;