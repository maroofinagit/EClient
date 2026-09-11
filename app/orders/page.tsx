"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Clock3,
    Package,
    Truck,
} from "lucide-react";
import Link from "next/link";

import { order } from "@/Data/OrderItems";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

const accent = "lab(66% 50.8 67.55)";

export default function OrderPage() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Header */}
            <section className="border-b border-black/10">

                <div className="mx-auto max-w-7xl px-6 sm:px-10 py-12 flex flex-col gap-8">

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<a href="/" />}>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Orders</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/40"
                            >
                                <span
                                    style={{ backgroundColor: accent }}
                                    className="h-2.5 w-2.5 rounded-full"
                                />
                                Order details
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.1,
                                }}
                                className="text-4xl font-semibold tracking-tight sm:text-5xl"
                            >
                                Order #{order.id}
                            </motion.h1>

                            <p className="mt-3 text-sm text-black/50">
                                Placed on{" "}
                                {new Date(order.createdAt).toLocaleDateString(
                                    "en-IN",
                                    {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    }
                                )}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                }}
                                style={{ backgroundColor: accent }}
                                className="inline-flex w-fit items-center gap-2 px-4 py-2 text-sm font-semibold capitalize"
                            >
                                <Check className="h-4 w-4" />
                                {order.status}
                            </motion.div>

                            <motion.a
                                href={`/orders/${order.id}/track`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                }}
                                style={{ backgroundColor: accent }}
                                className="inline-flex w-fit items-center gap-2 px-4 py-2 text-sm font-semibold capitalize"
                            >
                                <Truck className="h-4 w-4" />
                                Track order
                            </motion.a>

                        </div>
                    </div>
                </div>
            </section>

            {/* Order content */}
            <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
                <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
                    {/* Items */}
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                                    Your items
                                </p>

                                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                                    {order.items.length}{" "}
                                    {order.items.length === 1
                                        ? "item"
                                        : "items"}
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {order.items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="group border border-black/10 p-4 transition hover:border-black/30 sm:p-5"
                                >
                                    <div className="flex gap-5">
                                        {/* Product image */}
                                        <div className="h-28 w-24 shrink-0 overflow-hidden bg-black/3 sm:h-36 sm:w-28">
                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.productName}
                                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="flex h-full items-center justify-center">
                                                    <Package className="h-6 w-6 text-black/20" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Product info */}
                                        <div className="flex min-w-0 flex-1 flex-col justify-between">
                                            <div>
                                                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                                                    <div>
                                                        <h3 className="font-semibold tracking-tight">
                                                            {item.productName}
                                                        </h3>

                                                        <p className="mt-1 text-xs text-black/40">
                                                            Item #{item.id}
                                                        </p>
                                                    </div>

                                                    <p className="font-semibold">
                                                        ₹
                                                        {item.price.toLocaleString(
                                                            "en-IN"
                                                        )}
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-black/55">
                                                    <span>
                                                        Color:{" "}
                                                        <span className="font-medium text-black">
                                                            {item.color.name}
                                                        </span>
                                                    </span>

                                                    <span>
                                                        Size:{" "}
                                                        <span className="font-medium text-black">
                                                            {item.size}
                                                        </span>
                                                    </span>

                                                    <span>
                                                        Qty:{" "}
                                                        <span className="font-medium text-black">
                                                            {item.quantity}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <motion.aside
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                        className="h-fit border-2 border-black p-6 sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                            Order summary
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                            Total
                        </h2>

                        <div className="mt-8 space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-black/50">
                                    Subtotal
                                </span>

                                <span className="font-medium">
                                    ₹
                                    {order.subtotal.toLocaleString("en-IN")}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-black/50">
                                    Shipping
                                </span>

                                <span className="font-medium">
                                    {order.shipping === 0
                                        ? "Free"
                                        : `₹${order.shipping.toLocaleString(
                                            "en-IN"
                                        )}`}
                                </span>
                            </div>

                            <div className="border-t border-black/10 pt-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">
                                        Total
                                    </span>

                                    <span className="text-lg font-semibold">
                                        ₹
                                        {order.total.toLocaleString("en-IN")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{ backgroundColor: accent }}
                            className="mt-8 p-4"
                        >
                            <div className="flex items-start gap-3">
                                <Truck className="mt-0.5 h-5 w-5 shrink-0" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        Your order is confirmed
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-black/60">
                                        We’ll keep you updated as your items
                                        move through the delivery process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </section>

            {/* Order progress */}
            <section className="border-t border-white/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
                    <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                                Order progress
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                                Your order is on its way.
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-6 text-white/40">
                            We’ll keep updating your order as it moves through each stage.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Background line */}
                        <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 md:block" />

                        {/* Active line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 0.5 }}
                            transition={{
                                duration: 1,
                                delay: 0.4,
                                ease: "easeOut",
                            }}
                            style={{
                                backgroundColor: accent,
                            }}
                            className="absolute left-0 top-6 hidden h-px origin-left md:block"
                        />

                        <div className="grid gap-10 md:grid-cols-4 md:gap-0">
                            {[
                                {
                                    number: "01",
                                    title: "Confirmed",
                                    description: "Order received",
                                    icon: Check,
                                    active: true,
                                },
                                {
                                    number: "02",
                                    title: "Processing",
                                    description: "Being prepared",
                                    icon: Package,
                                    active: true,
                                },
                                {
                                    number: "03",
                                    title: "Shipped",
                                    description: "On the way",
                                    icon: Truck,
                                    active: false,
                                },
                                {
                                    number: "04",
                                    title: "Delivered",
                                    description: "Arriving soon",
                                    icon: Check,
                                    active: false,
                                },
                            ].map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={step.number}
                                        initial={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.3,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="relative md:px-4 first:md:pl-0 last:md:pr-0"
                                    >
                                        {/* Mobile connector */}
                                        {index !== 0 && (
                                            <div className="absolute -top-10 left-5 h-10 w-px bg-white/15 md:hidden" />
                                        )}

                                        {/* Step icon */}
                                        <div
                                            style={{
                                                backgroundColor: step.active
                                                    ? accent
                                                    : "black",
                                                borderColor: step.active
                                                    ? accent
                                                    : "rgba(255,255,255,0.2)",
                                            }}
                                            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border"
                                        >
                                            <Icon
                                                className={`h-5 w-5 ${step.active
                                                    ? "text-black"
                                                    : "text-white/35"
                                                    }`}
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="mt-5">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-bold tracking-[0.2em] text-white/25">
                                                    {step.number}
                                                </span>

                                                <h3
                                                    className={`font-semibold ${step.active
                                                        ? "text-white"
                                                        : "text-white/40"
                                                        }`}
                                                >
                                                    {step.title}
                                                </h3>
                                            </div>

                                            <p className="mt-2 text-sm text-white/35">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Current status */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.5,
                        }}
                        style={{
                            borderColor: "rgba(255,255,255,0.12)",
                        }}
                        className="mt-16 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <span
                                style={{ backgroundColor: accent }}
                                className="h-2 w-2 rounded-full"
                            />

                            <span className="text-sm font-medium">
                                Current status:{" "}
                                <span style={{ color: accent }}>
                                    Order confirmed
                                </span>
                            </span>
                        </div>

                        <span className="text-xs text-white/30">
                            Order #{order.id}
                        </span>
                    </motion.div>
                </div>
            </section>


            {/* Bottom */}
            <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3 text-sm text-black/50">
                        <Clock3 className="h-4 w-4" />
                        Need help with your order?
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 text-sm font-semibold"
                    >
                        Contact support
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function ProgressStep({
    icon: Icon,
    number,
    title,
    description,
    active = false,
}: {
    icon: React.ElementType;
    number: string;
    title: string;
    description: string;
    active?: boolean;
}) {
    return (
        <div className="flex gap-4">
            <div
                style={{
                    backgroundColor: active ? accent : "transparent",
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-black"
            >
                <Icon
                    className={`h-5 w-5 ${active ? "text-black" : "text-white/50"
                        }`}
                />
            </div>

            <div>
                <p className="text-xs font-bold tracking-wider text-white/30">
                    {number}
                </p>

                <h3 className="mt-1 font-semibold">{title}</h3>

                <p className="mt-1 text-sm leading-6 text-white/40">
                    {description}
                </p>
            </div>
        </div>
    );
}