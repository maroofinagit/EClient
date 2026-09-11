"use client";

import { motion } from "framer-motion";
import {
    Clipboard,
    Check,
    CircleDot,
    Clock3,
    MapPin,
    Package,
    Truck,
} from "lucide-react";
import Link from "next/link";

import { Order } from "@/types/Order";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";
import { toast } from "sonner";

const accent = "lab(66% 50.8 67.55)";

type OrderTrackingProps = {
    order: Order;
};

const trackingSteps = [
    {
        title: "Order confirmed",
        description: "Your order has been confirmed and payment received.",
        location: "Cybermart",
        date: "Sep 11, 2026",
        time: "12:04 PM",
        icon: Check,
        completed: true,
    },
    {
        title: "Order is being prepared",
        description: "Your items are being packed and prepared for shipment.",
        location: "Cybermart Fulfillment Center",
        date: "Sep 11, 2026",
        time: "02:18 PM",
        icon: Package,
        completed: true,
    },
    {
        title: "Shipped",
        description: "Your package has left the fulfillment center.",
        location: "Delhi Distribution Center",
        date: "Sep 12, 2026",
        time: "08:42 AM",
        icon: Truck,
        completed: true,
    },
    {
        title: "In transit",
        description: "Your package is currently on its way to you.",
        location: "Kanpur Transit Hub",
        date: "Sep 12, 2026",
        time: "06:15 PM",
        icon: Truck,
        completed: true,
        current: true,
    },
    {
        title: "Out for delivery",
        description: "Your package will be delivered to your address.",
        location: "Local Delivery Center",
        date: "Expected soon",
        time: "",
        icon: MapPin,
        completed: false,
    },
    {
        title: "Delivered",
        description: "Your package has been delivered.",
        location: "Your delivery address",
        date: "Pending",
        time: "",
        icon: Check,
        completed: false,
    },
];

export default function OrderTrack({
    order,
}: OrderTrackingProps) {
    const currentStepIndex = trackingSteps.findIndex(
        (step) => step.current
    );

    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    if (!mount) {
        return null;
    }

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Header */}
            <section className="border-b border-black/10">
                <div className="mx-auto max-w-6xl px-6 py-10 sm:px-12 flex flex-col gap-8">

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<a href="/" />}>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<a href="/orders" />}>Orders</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Track Order</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
                        <div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.5,
                                }}
                                className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/40"
                            >
                                <span
                                    style={{
                                        backgroundColor: accent,
                                    }}
                                    className="h-2.5 w-2.5 rounded-full"
                                />

                                Shipment tracking
                            </motion.div>

                            <motion.h1
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
                                    delay: 0.1,
                                }}
                                className="text-4xl font-semibold tracking-tight sm:text-5xl"
                            >
                                Track your order
                            </motion.h1>

                            <p className="mt-3 text-sm text-black/45">
                                Order #{order.id}
                            </p>
                        </div>

                        <motion.button
                            onClick={() => {
                                navigator.clipboard.writeText(order.trackingNumber ? order.trackingNumber : "");
                                toast.success("Tracking ID copied to clipboard!");
                            }}
                            type="button"
                            title="Copy tracking ID"
                            aria-label="Copy tracking ID"
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                            }}
                            className="w-fit border border-black/15 px-4 py-3 cursor-pointer flex items-center gap-4 justify-between"
                        >
                            <Clipboard className="mr-2 size-5" />
                            <div className="flex flex-col items-start gap-1">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">
                                    Tracking ID
                                </p>

                                <p className="mt-1 font-mono text-sm font-semibold">
                                    {order.trackingNumber}
                                </p>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Current status */}
            <section className="mx-auto max-w-6xl px-6 py-10 sm:px-10">
                <motion.div
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
                    style={{
                        backgroundColor: accent,
                    }}
                    className="relative overflow-hidden p-6 sm:p-8"
                >
                    <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="flex gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-black">
                                <Truck className="h-5 w-5 text-white" />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                                    Current status
                                </p>

                                <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                                    In transit
                                </h2>

                                <div className="mt-2 flex items-center gap-2 text-sm text-black/60">
                                    <MapPin className="h-4 w-4" />
                                    Kanpur Transit Hub
                                </div>
                            </div>
                        </div>

                        <div className="md:text-right">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                                Estimated delivery
                            </p>

                            <p className="mt-1 text-xl font-semibold">
                                September 13, 2026
                            </p>

                            <p className="mt-1 text-sm text-black/55">
                                By end of day
                            </p>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full border-30 border-black/5" />
                    <div className="pointer-events-none absolute -bottom-24 right-20 h-40 w-40 rounded-full border-20 border-black/5" />
                </motion.div>
            </section>

            {/* Tracking timeline */}
            <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 sm:pb-28">
                <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                    {/* Timeline */}
                    <div>
                        <div className="mb-10">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                                Shipment history
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                                Tracking updates
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Base line */}
                            <div className="absolute bottom-6 left-4.75 top-6 w-px bg-black/10" />

                            {/* Active line */}
                            <motion.div
                                initial={{
                                    height: 0,
                                }}
                                animate={{
                                    height: `${Math.max(
                                        0,
                                        (currentStepIndex /
                                            (trackingSteps.length - 1)) *
                                        100
                                    )
                                        }%`,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.4,
                                    ease: "easeOut",
                                }}
                                style={{
                                    backgroundColor: accent,
                                }}
                                className="absolute left-4.75 top-6 w-px"
                            />

                            <div className="space-y-0">
                                {trackingSteps.map((step, index) => {
                                    const Icon = step.icon;

                                    return (
                                        <motion.div
                                            key={step.title}
                                            initial={{
                                                opacity: 0,
                                                x: -15,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                            transition={{
                                                duration: 0.45,
                                                delay: index * 0.07,
                                            }}
                                            className="relative flex gap-5 pb-10 last:pb-0"
                                        >
                                            {/* Timeline dot */}
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        step.completed
                                                            ? accent
                                                            : "white",
                                                    borderColor:
                                                        step.completed
                                                            ? accent
                                                            : "rgba(0,0,0,0.15)",
                                                }}
                                                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                                            >
                                                <Icon
                                                    className={`h - 4 w - 4 ${step.completed
                                                        ? "text-black"
                                                        : "text-black/25"
                                                        }`}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="min-w-0 flex-1 pt-1">
                                                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                                                    <div>
                                                        <div className="flex items-center gap-3">
                                                            <h3
                                                                className={`font - semibold ${step.completed
                                                                    ? "text-black"
                                                                    : "text-black/35"
                                                                    }`}
                                                            >
                                                                {step.title}
                                                            </h3>

                                                            {step.current && (
                                                                <span
                                                                    style={{
                                                                        backgroundColor:
                                                                            accent,
                                                                    }}
                                                                    className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black"
                                                                >
                                                                    Current
                                                                </span>
                                                            )}
                                                        </div>

                                                        <p className="mt-1 max-w-lg text-sm leading-6 text-black/45">
                                                            {
                                                                step.description
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="shrink-0 sm:text-right">
                                                        <p
                                                            className={`text - xs font - medium ${step.completed
                                                                ? "text-black/70"
                                                                : "text-black/25"
                                                                }`}
                                                        >
                                                            {step.date}
                                                        </p>

                                                        {step.time && (
                                                            <p className="mt-1 text-xs text-black/35">
                                                                {step.time}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="mt-3 flex items-center gap-2 text-xs text-black/35">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    {step.location}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Shipment details */}
                    <motion.aside
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="h-fit border border-black/10 p-6"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                            Shipment details
                        </p>

                        <div className="mt-7 space-y-6">
                            <div>
                                <p className="text-xs text-black/35">
                                    Tracking ID
                                </p>

                                <p className="mt-1 font-mono text-sm font-semibold">
                                    {order.trackingNumber}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-black/35">
                                    Order
                                </p>

                                <p className="mt-1 text-sm font-semibold">
                                    #{order.id}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-black/35">
                                    Items
                                </p>

                                <p className="mt-1 text-sm font-semibold">
                                    {order.items.length}{" "}
                                    {order.items.length === 1
                                        ? "item"
                                        : "items"}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-black/35">
                                    Last updated
                                </p>

                                <div className="mt-1 flex items-center gap-2 text-sm font-semibold">
                                    <Clock3 className="h-4 w-4" />
                                    Sep 12, 2026 · 6:15 PM
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-black/10 pt-6">
                            <div className="flex items-start gap-3">
                                <CircleDot
                                    className="mt-0.5 h-4 w-4 shrink-0"
                                    style={{ color: accent }}
                                />

                                <p className="text-xs leading-5 text-black/45">
                                    Tracking information may take some time to
                                    update while your package moves between
                                    facilities.
                                </p>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </section>
        </main>
    );
}