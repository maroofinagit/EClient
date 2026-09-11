"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { Separator } from "@/components/ui/separator";
import { ShippingFormInputs } from "@/types/Cart";
import useCartStore from "@/stores/cartStore";
import { CartItem } from "@/types/Product";
import {
    ArrowRight,
    ShoppingCart,
    Trash2,
} from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { BiQuestionMark } from "react-icons/bi";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

const steps = [
    {
        id: 1,
        title: "Shopping Cart",
    },
    {
        id: 2,
        title: "Shipping Address",
    },
    {
        id: 3,
        title: "Payment Method",
    },
];

const CartClientPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [shippingForm, setShippingForm] =
        useState<ShippingFormInputs>();

    const {
        cart,
        hasHydrated,
        removeFromCart,
        removeQuantityFromCart,
        addQuantityToCart,
    } = useCartStore();


    const [newCartItems, setNewCartItems] =
        useState<CartItem[]>(cart);

    const [isPaymentAllowed, setIsPaymentAllowed] =
        useState<boolean>(false);

    useEffect(() => {
        setNewCartItems(cart);
    }, [cart]);

    useEffect(() => {
        setIsPaymentAllowed(false);
    }, [newCartItems]);

    const activeStep = parseInt(
        searchParams.get("step") || "1"
    );

    // -----------------------------
    // PAYMENT
    // -----------------------------

    const handlePaymentSubmit = () => {
        const toastId = toast.loading(
            "Processing Payment..."
        );

        setTimeout(() => {
            toast.success("Payment Successful!", {
                id: toastId,
            });

            router.push("/payment?success=true", {
                scroll: false,
            });
        }, 1000);
    };

    // -----------------------------
    // REMOVE ITEM
    // -----------------------------

    const handleRemoveFromCart = (item: CartItem) => {
        removeFromCart(item);

        setNewCartItems((prevItems) =>
            prevItems.filter(
                (cartItem) =>
                    !(
                        cartItem.id === item.id &&
                        cartItem.productVariant.id ===
                        item.productVariant.id &&
                        cartItem.productVariant.size ===
                        item.productVariant.size
                    )
            )
        );
    };

    // -----------------------------
    // ADD QUANTITY
    // -----------------------------

    const handleAddQuantity = (item: CartItem) => {
        const selectedSize = item.productVariant.sizes.find(
            (sizeVariant) =>
                sizeVariant.size ===
                item.productVariant.size
        );

        if (
            selectedSize &&
            item.quantity >= selectedSize.stock
        ) {
            toast.info("Maximum available stock reached");
            return;
        }

        addQuantityToCart(item);

        setNewCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === item.id &&
                    cartItem.productVariant.id ===
                    item.productVariant.id &&
                    cartItem.productVariant.size ===
                    item.productVariant.size
                    ? {
                        ...cartItem,
                        quantity:
                            cartItem.quantity + 1,
                    }
                    : cartItem
            )
        );
    };

    // -----------------------------
    // REMOVE QUANTITY
    // -----------------------------

    const handleRemoveQuantity = (item: CartItem) => {
        if (item.quantity > 1) {
            removeQuantityFromCart(item);

            setNewCartItems((prevItems) =>
                prevItems.map((cartItem) =>
                    cartItem.id === item.id &&
                        cartItem.productVariant.id ===
                        item.productVariant.id &&
                        cartItem.productVariant.size ===
                        item.productVariant.size
                        ? {
                            ...cartItem,
                            quantity:
                                cartItem.quantity - 1,
                        }
                        : cartItem
                )
            );
        } else {
            handleRemoveFromCart(item);
        }
    };

    // -----------------------------
    // CART TOTALS
    // -----------------------------

    const total = newCartItems.reduce(
        (acc, item) =>
            acc +
            item.productVariant.price *
            item.quantity,
        0
    );

    const shippingFee =
        newCartItems.length > 0 ? 10 : 0;

    const finalTotal = total + shippingFee;

    if (!hasHydrated) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                Loading cart...
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 px-8 py-8 lg:px-16">

            {/* TITLE */}
            <h1 className="text-2xl font-medium">
                Your Shopping Cart
            </h1>

            {/* STEPS */}
            <div className="flex flex-row items-center gap-8 lg:gap-16">
                {steps.map((step) => (
                    <div
                        className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep
                            ? "border-gray-800"
                            : "border-gray-200"
                            }`}
                        key={step.id}
                    >
                        <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full p-2 text-xs text-white md:h-8 md:w-8 md:p-4 md:text-sm ${step.id === activeStep
                                ? "bg-gray-800"
                                : "bg-gray-400"
                                }`}
                        >
                            {step.id}
                        </div>

                        <p
                            className={`text-[10px] font-medium md:text-sm ${step.id === activeStep
                                ? "text-gray-800"
                                : "text-gray-400"
                                }`}
                        >
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>

            <Breadcrumb className="w-full">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink render={
                            <Link href="/products" className="text-base">
                                Products
                            </Link>
                        } />
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        {activeStep === 1 ? (
                            <BreadcrumbPage className="text-base">Cart</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink render={
                                <Link href="/cart?step=1" className="text-base">
                                    Cart
                                </Link>
                            } />
                        )}
                    </BreadcrumbItem>

                    {activeStep >= 2 && (
                        <>
                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                {activeStep === 2 ? (
                                    <BreadcrumbPage className="text-base">Shipping</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink render={
                                        <Link href="/cart?step=2" className="text-base">
                                            Shipping
                                        </Link>
                                    } />
                                )}
                            </BreadcrumbItem>
                        </>
                    )}

                    {activeStep >= 3 && (
                        <>
                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-base">
                                    Payment
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>

            {/* STEPS & DETAILS */}
            <div className="flex w-full flex-col gap-16 lg:flex-row">

                {/* STEPS */}
                <div className="flex w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-7/12">

                    {/* CART */}
                    {activeStep === 1 &&
                        newCartItems.length > 0 ? (
                        newCartItems.map((item) => (
                            <div
                                className="flex flex-col gap-4"
                                key={`${item.id}-${item.productVariant.id}-${item.productVariant.size}`}
                            >
                                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                                    {/* IMAGE + DETAILS */}
                                    <div className="flex gap-8">

                                        {/* IMAGE */}
                                        <Link
                                            href={`/products/${item.id}`}
                                            className="cursor-pointer"
                                        >
                                            <div className="relative h-42 w-32 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                                                <Image
                                                    src={item.productVariant.images?.[0] || "/placeholder.png"}
                                                    alt={item.productVariant.color.name}
                                                    fill
                                                    sizes="100%"
                                                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                                                />
                                            </div>
                                        </Link>

                                        {/* ITEM DETAILS */}
                                        <div className="flex flex-col justify-between">
                                            <div className="flex flex-col gap-1">

                                                <p className="text-sm font-medium md:text-base">
                                                    {item.name}
                                                </p>

                                                <p className="text-xs text-gray-500 md:text-sm">
                                                    Quantity:{" "}
                                                    {item.quantity}
                                                </p>

                                                <p className="text-xs text-gray-500 md:text-sm">
                                                    Size:{" "}
                                                    {
                                                        item
                                                            .productVariant
                                                            .size
                                                    }
                                                </p>

                                                <p className="text-xs text-gray-500 md:text-sm">
                                                    Color:{" "}
                                                    {
                                                        item
                                                            .productVariant
                                                            .color
                                                            .name
                                                    }
                                                </p>
                                            </div>

                                            <p className="text-sm font-medium md:text-base">
                                                ₹
                                                {item.productVariant.price.toFixed(
                                                    2
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* QUANTITY CONTROLS */}
                                    <div className="flex w-full items-center justify-between gap-6 md:w-fit md:flex-col">

                                        {/* ADD */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleAddQuantity(
                                                    item
                                                )
                                            }
                                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-green-700 text-xl font-bold text-green-600 transition-all duration-300 hover:bg-green-700 hover:text-white"
                                        >
                                            +
                                        </button>

                                        {/* REMOVE */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveQuantity(
                                                    item
                                                )
                                            }
                                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-black text-xl font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
                                        >
                                            -
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveFromCart(
                                                    item
                                                )
                                            }
                                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-red-700 text-red-600 transition-all duration-300 hover:bg-red-700 hover:text-white"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <Separator />
                            </div>
                        ))
                    ) : activeStep === 1 &&
                        newCartItems.length === 0 ? (

                        /* EMPTY CART */
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                                <ShoppingCart className="h-7 w-7 text-amber-800" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                Your cart is empty
                            </h3>

                            <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                                Looks like you haven't
                                added anything yet.
                                Browse our collection
                                and find something
                                you'll love.
                            </p>
                        </div>

                    ) : activeStep === 2 ? (

                        /* SHIPPING */
                        <ShippingForm
                            setShippingForm={
                                setShippingForm
                            }
                        />

                    ) : activeStep === 3 &&
                        shippingForm ? (

                        /* PAYMENT */
                        <PaymentForm
                            isPaymentAllowed={
                                isPaymentAllowed
                            }
                            setIsPaymentAllowed={
                                setIsPaymentAllowed
                            }
                        />

                    ) : (

                        /* MISSING SHIPPING */
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                                <BiQuestionMark className="h-7 w-7 text-amber-800" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                Shipping information is
                                missing
                            </h3>

                            <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                                Please provide your
                                shipping information
                                before proceeding to
                                payment.
                            </p>
                        </div>
                    )}
                </div>

                {/* DETAILS */}
                <div className="flex h-max w-full flex-col gap-8 rounded-lg border border-gray-100 p-8 shadow-lg lg:w-5/12">

                    <h2 className="font-semibold">
                        Cart Details
                    </h2>

                    <div className="flex flex-col gap-4">

                        {/* SUBTOTAL */}
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">
                                Subtotal
                            </p>

                            <p className="font-medium">
                                ₹{total.toFixed(2)}
                            </p>
                        </div>

                        {/* SHIPPING */}
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">
                                Shipping Fee
                            </p>

                            <p className="font-medium">
                                ₹{shippingFee.toFixed(2)}
                            </p>
                        </div>

                        <hr className="border-gray-200" />

                        {/* TOTAL */}
                        <div className="flex justify-between">
                            <p className="font-semibold text-gray-800">
                                Total
                            </p>

                            <p className="font-medium">
                                ₹{finalTotal.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    {/* CONTINUE / CHECKOUT */}
                    {activeStep === 1 ? (
                        <button
                            type="button"
                            disabled={
                                newCartItems.length === 0
                            }
                            onClick={() =>
                                router.push(
                                    "/cart?step=2",
                                    {
                                        scroll: false,
                                    }
                                )
                            }
                            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border bg-amber-800 p-2 text-sm font-medium text-white transition-all duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-amber-800 md:text-base"
                        >
                            Continue

                            <ArrowRight className="h-3 w-3" />
                        </button>

                    ) : activeStep === 3 &&
                        shippingForm ? (

                        <button
                            type="button"
                            onClick={
                                handlePaymentSubmit
                            }
                            disabled={
                                !isPaymentAllowed
                            }
                            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-amber-800 p-2 font-medium text-white transition-all duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-amber-800"
                        >
                            Checkout

                            <ShoppingCart className="h-3 w-3" />
                        </button>

                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default CartClientPage;