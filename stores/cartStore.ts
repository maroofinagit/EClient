import {
    CartStoreActionsType,
    CartStoreStateType,
} from "@/types/Cart";
import { create } from "zustand";
import {
    persist,
    createJSONStorage,
} from "zustand/middleware";

const useCartStore = create<
    CartStoreStateType & CartStoreActionsType
>()(
    persist(
        (set) => ({
            cart: [],
            hasHydrated: false,

            // -----------------------------
            // ADD TO CART
            // -----------------------------

            addToCart: (product) =>
                set((state) => {
                    const existingIndex =
                        state.cart.findIndex(
                            (item) =>
                                item.id === product.id &&
                                item.productVariant.id ===
                                    product.productVariant.id &&
                                item.productVariant.size ===
                                    product.productVariant.size
                        );

                    // Already exists
                    if (existingIndex !== -1) {
                        const updatedCart = [
                            ...state.cart,
                        ];

                        updatedCart[
                            existingIndex
                        ] = {
                            ...updatedCart[
                                existingIndex
                            ],
                            quantity:
                                updatedCart[
                                    existingIndex
                                ].quantity +
                                (product.quantity || 1),
                        };

                        return {
                            cart: updatedCart,
                        };
                    }

                    // New item
                    return {
                        cart: [
                            ...state.cart,
                            {
                                ...product,
                                quantity:
                                    product.quantity || 1,
                                productVariant: {
                                    ...product.productVariant,
                                },
                            },
                        ],
                    };
                }),

            // -----------------------------
            // ADD QUANTITY
            // -----------------------------

            addQuantityToCart: (product) =>
                set((state) => ({
                    cart: state.cart.map(
                        (item) =>
                            item.id === product.id &&
                            item.productVariant.id ===
                                product.productVariant.id &&
                            item.productVariant.size ===
                                product.productVariant.size
                                ? {
                                      ...item,
                                      quantity:
                                          item.quantity + 1,
                                  }
                                : item
                    ),
                })),

            // -----------------------------
            // REMOVE ITEM
            // -----------------------------

            removeFromCart: (product) =>
                set((state) => ({
                    cart: state.cart.filter(
                        (item) =>
                            !(
                                item.id === product.id &&
                                item.productVariant.id ===
                                    product.productVariant.id &&
                                item.productVariant.size ===
                                    product.productVariant.size
                            )
                    ),
                })),

            // -----------------------------
            // REMOVE QUANTITY
            // -----------------------------

            removeQuantityFromCart: (product) =>
                set((state) => {
                    const existingIndex =
                        state.cart.findIndex(
                            (item) =>
                                item.id === product.id &&
                                item.productVariant.id ===
                                    product.productVariant.id &&
                                item.productVariant.size ===
                                    product.productVariant.size
                        );

                    if (existingIndex === -1) {
                        return state;
                    }

                    const updatedCart = [
                        ...state.cart,
                    ];

                    if (
                        updatedCart[existingIndex]
                            .quantity > 1
                    ) {
                        updatedCart[
                            existingIndex
                        ] = {
                            ...updatedCart[
                                existingIndex
                            ],
                            quantity:
                                updatedCart[
                                    existingIndex
                                ].quantity - 1,
                        };
                    } else {
                        updatedCart.splice(
                            existingIndex,
                            1
                        );
                    }

                    return {
                        cart: updatedCart,
                    };
                }),

            // -----------------------------
            // CLEAR CART
            // -----------------------------

            clearCart: () =>
                set({
                    cart: [],
                }),
        }),

        {
            name: "cart",

            storage: createJSONStorage(
                () => localStorage
            ),

            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.hasHydrated = true;
                }
            },
        }
    )
);

export default useCartStore;