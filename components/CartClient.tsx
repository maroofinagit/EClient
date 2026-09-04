"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShippingFormInputs } from "@/types/Cart";
import useCartStore from "@/stores/cartStore";
import { CartItem } from "@/types/Product";
import { ArrowLeft, ArrowRight, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { BiQuestionMark } from "react-icons/bi";


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
    const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
    const { cart, removeFromCart, removeQuantityFromCart, addQuantityToCart } = useCartStore();
    const [newCartItems, setNewCartItems] = useState<CartItem[]>(cart);
    const [isPaymentAllowed, setIsPaymentAllowed] = useState<boolean>(false);

    useEffect(() => {
        setNewCartItems(cart);
    }, [cart]);

    useEffect(() => {
        setIsPaymentAllowed(false);
    }, [newCartItems]);

    const activeStep = parseInt(searchParams.get("step") || "1");

    const handlePaymentSubmit = () => {
        const toastId = toast.loading("Processing Payment...");

        setTimeout(() => {
            toast.success("Payment Successful!", {
                id: toastId,
            });

            router.push("/payment?success=true", { scroll: false });
        }, 1000);
    };

    const handleRemoveFromCart = (item: CartItem) => {
        removeFromCart(item);
        setNewCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.id !== item.id)
        );
    };

    const handleAddQuantity = (item: CartItem) => {
        addQuantityToCart(item);
        setNewCartItems((prevItems) =>
            prevItems.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const handleRemoveQuantity = (item: CartItem) => {
        if (item.quantity > 1) {
            removeQuantityFromCart(item);
            setNewCartItems((prevItems) =>
                prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        } else {
            handleRemoveFromCart(item);
        }
    };

    return (
        <div className="flex flex-col gap-8 items-center justify-center px-8 py-8 lg:px-16">
            {/* TITLE */}
            <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
            {/* STEPS */}
            <div className="flex flex-row items-center gap-8 lg:gap-16">
                {steps.map((step) => (
                    <div
                        className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"
                            }`}
                        key={step.id}
                    >
                        <div
                            className={`w-6 h-6 rounded-full text-white text-xs md:text-sm p-2 md:p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
                                }`}
                        >
                            {step.id}
                        </div>
                        <p
                            className={`text-[10px] md:text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"
                                }`}
                        >
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* BACK BUTTON */}
            <Button
                type="button"
                onClick={() => {
                    if (activeStep === 1) {
                        router.push("/products", { scroll: false });
                    } else if (activeStep === 2) {
                        router.push("/cart?step=1", { scroll: false });
                    } else if (activeStep === 3) {
                        router.push("/cart?step=2", { scroll: false });
                    }
                }}
                className="w-fit text-xs md:text-sm hover:bg-amber-800 border border-amber-800 transition-all duration-300 text-amber-800 bg-white hover:text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 self-start"
            >
                <ArrowLeft className="w-3 h-3" />
                {activeStep === 1 ? "Continue Shopping" : activeStep === 2 ? "Back to Cart" : "Back to Shipping"}
            </Button>

            {/* STEPS & DETAILS */}
            <div className="w-full flex flex-col lg:flex-row gap-16">

                {/* STEPS */}
                <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    {activeStep === 1 && newCartItems.length > 0 ? (
                        newCartItems.map((item) => (
                            // SINGLE CART ITEM
                            <div className="flex flex-col gap-4" key={item.productVariant.size + item.productVariant.color.color}>
                                <div
                                    className="flex md:flex-row gap-6 flex-col items-center justify-between"
                                    key={item.productVariant.size + item.productVariant.color.color}
                                >
                                    {/* IMAGE AND DETAILS */}
                                    <div className="flex gap-8">
                                        {/* IMAGE */}
                                        <Link href={`/products/${item.id}`} className="cursor-pointer">
                                            <div className="relative w-32 h-42 border border-gray-200 bg-gray-50 rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.productVariant.color.images[0]}
                                                    alt={item.productVariant.color.color}
                                                    fill
                                                    sizes=" 100%"
                                                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
                                                />
                                            </div>
                                        </Link>
                                        {/* ITEM DETAILS */}
                                        <div className="flex flex-col justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="md:text-base text-sm font-medium">{item.name}</p>
                                                <p className="text-xs md:text-sm text-gray-500">
                                                    Quantity: {item.quantity}
                                                </p>
                                                <p className="text-xs md:text-sm text-gray-500">
                                                    Size: {item.productVariant.size}
                                                </p>
                                                <p className="text-xs md:text-sm text-gray-500">
                                                    Color: {item.productVariant.color.color}
                                                </p>
                                            </div>
                                            <p className="text-sm md:text-base font-medium">${item.productVariant.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div className="flex md:flex-col justify-between w-full md:w-fit gap-6 items-center">
                                        {/* Add quantity button */}
                                        <button
                                            onClick={() => handleAddQuantity(item)}
                                            className="w-8 h-8 rounded-full border border-green-700 hover:bg-green-700 hover:text-white transition-all font-bold text-xl duration-300 text-green-600 flex items-center justify-center cursor-pointer"
                                        >
                                            +
                                        </button>

                                        {/* Remove quantity button */}
                                        <button
                                            onClick={() => handleRemoveQuantity(item)}
                                            className="w-8 h-8 rounded-full border border-black hover:bg-black hover:text-white transition-all duration-300 text-black font-bold text-xl flex items-center justify-center cursor-pointer"
                                        >
                                            -
                                        </button>

                                        {/* DELETE BUTTON */}
                                        <button
                                            onClick={() => handleRemoveFromCart(item)}
                                            className="w-8 h-8 rounded-full border border-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 text-red-600 flex items-center justify-center cursor-pointer"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>

                                    </div>

                                </div>
                                <Separator />
                            </div>
                        ))
                    ) : activeStep === 1 && newCartItems.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                                <ShoppingCart className="h-7 w-7 text-amber-800" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                Your cart is empty
                            </h3>

                            <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                                Looks like you haven't added anything yet. Browse our collection and
                                find something you'll love.
                            </p>

                        </div>
                    ) : activeStep === 2 ? (

                        <ShippingForm setShippingForm={setShippingForm} />

                    ) : activeStep === 3 && shippingForm ? (
                        <PaymentForm isPaymentAllowed={isPaymentAllowed} setIsPaymentAllowed={setIsPaymentAllowed} />
                    ) : (
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                                <BiQuestionMark className="h-7 w-7 text-amber-800" />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                Shipping information is missing
                            </h3>

                            <p className="mt-1 max-w-sm text-sm leading-6 text-gray-500">
                                Please provide your shipping information before proceeding to payment.
                            </p>

                        </div>
                    )}
                </div>
                {/* DETAILS */}
                <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
                    <h2 className="font-semibold">Cart Details</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Subtotal</p>
                            <p className="font-medium">
                                $
                                {cart
                                    .reduce((acc, item) => acc + item.productVariant.price * item.quantity, 0)
                                    .toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Discount(10%)</p>
                            <p className="font-medium">$ 10</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">Shipping Fee</p>
                            <p className="font-medium">$10</p>
                        </div>
                        <hr className="border-gray-200" />
                        <div className="flex justify-between">
                            <p className="text-gray-800 font-semibold">Total</p>
                            <p className="font-medium">
                                $
                                {cart
                                    .reduce((acc, item) => acc + item.productVariant.price * item.quantity, 0)
                                    .toFixed(2)}
                            </p>
                        </div>
                    </div>
                    {activeStep === 1 ? (
                        <button
                            onClick={() => router.push("/cart?step=2", { scroll: false })}
                            className="w-full text-sm md:text-base bg-amber-800 border hover:bg-green-700 font-medium transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                        >
                            Continue
                            <ArrowRight className="w-3 h-3" />
                        </button>
                    ) : activeStep === 3 && shippingForm ? (
                        <button
                            type="submit"
                            onClick={handlePaymentSubmit}
                            disabled={!isPaymentAllowed}
                            className="w-full bg-amber-800 hover:bg-green-700 font-medium transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-amber-800"
                        >
                            Checkout
                            <ShoppingCart className="w-3 h-3" />
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default CartClientPage;