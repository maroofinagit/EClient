"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Box,
    Check,
    ChevronRight,
    Clock3,
    MapPin,
    Package,
    Search,
    ShieldCheck,
    Truck,
} from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const accent = "lab(66% 50.8 67.55)";

const shippingSteps = [
    {
        number: "01",
        icon: ShoppingBagIcon,
        title: "Order placed",
        description:
            "Once your order is successfully placed, we confirm your order details and payment.",
    },
    {
        number: "02",
        icon: Box,
        title: "Order prepared",
        description:
            "Your products are picked, checked, securely packed, and prepared for dispatch.",
    },
    {
        number: "03",
        icon: Truck,
        title: "Handed to carrier",
        description:
            "The package is handed over to one of our delivery partners for transportation.",
    },
    {
        number: "04",
        icon: MapPin,
        title: "Delivered",
        description:
            "The carrier delivers your package to the shipping address provided at checkout.",
    },
];

const deliveryPartners = [
    {
        name: "Delhivery",
        description:
            "One of our primary delivery partners for shipments across India.",
    },
    {
        name: "Blue Dart",
        description:
            "Used for selected locations and services where their network provides suitable coverage.",
    },
    {
        name: "DTDC",
        description:
            "Supports deliveries across a wide range of domestic locations.",
    },
];

const deliveryInfo = [
    {
        icon: Clock3,
        title: "Delivery estimates",
        description:
            "Estimated delivery dates are shown during checkout and may vary depending on your delivery location.",
    },
    {
        icon: MapPin,
        title: "Delivery locations",
        description:
            "We deliver to supported addresses across India. Availability may vary by location and serviceability.",
    },
    {
        icon: Package,
        title: "Package handling",
        description:
            "Orders are securely packed before dispatch to help protect products during transportation.",
    },
    {
        icon: ShieldCheck,
        title: "Secure delivery",
        description:
            "Your shipment is handled through established delivery networks and tracked throughout its journey.",
    },
];

function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 8h12l1 13H5L6 8Z" />
            <path d="M9 8a3 3 0 0 1 6 0" />
        </svg>
    );
}

export default function ShippingPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero */}
            <section className="border-b border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12">
                    <Breadcrumb className="mb-8">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<a href="/" />}>
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbLink render={<a href="/help" />}>
                                    Help Center
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    Shipping
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                                <span
                                    style={{ backgroundColor: accent }}
                                    className="h-2.5 w-2.5 rounded-full"
                                />
                                Shipping information
                            </div>

                            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                                From our door
                                <br />
                                to{" "}
                                <span
                                    style={{
                                        textDecorationColor: accent,
                                    }}
                                    className="underline decoration-8 underline-offset-8"
                                >
                                    yours.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15,
                            }}
                            className="max-w-md text-base leading-7 text-black/50"
                        >
                            Everything you need to know about how Cybermart
                            processes, ships, and delivers your orders.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                    }}
                    style={{ backgroundColor: accent }}
                    className="h-1 w-full origin-left"
                />
            </section>

            {/* Overview */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                            How shipping works
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                            A simple journey from checkout to delivery.
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <p className="text-base leading-8 text-black/60">
                            After you place an order, our team processes the
                            order and prepares your products for dispatch.
                            Once packed, the shipment is handed over to an
                            appropriate delivery partner based on the
                            destination and available service.
                        </p>

                        <p className="mt-6 text-base leading-8 text-black/60">
                            Your package then travels through the carrier’s
                            network before reaching the local delivery center
                            and, finally, your delivery address.
                        </p>

                        <Link
                            href="/orders"
                            className="group mt-8 inline-flex items-center gap-3 border-2 border-black px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
                        >
                            View your orders
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <p className="mt-3 text-xs text-black/35">
                            You can open an order there to see its available
                            tracking information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Shipping process */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="mb-16 max-w-2xl">
                        <p
                            className="text-xs font-bold uppercase tracking-[0.25em]"
                            style={{ color: accent }}
                        >
                            The process
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                            From checkout to your doorstep.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
                            Once your order is placed, we take care of the rest.
                            Here&apos;s what happens before your package reaches you.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute left-5 top-6 hidden h-px w-[calc(100%-2.5rem)] bg-white/15 md:block" />

                        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
                            {shippingSteps.map((step, index) => {
                                const Icon = step.icon;

                                return (
                                    <motion.div
                                        key={step.number}
                                        initial={{
                                            opacity: 0,
                                            y: 24,
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
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="relative"
                                    >
                                        {/* Step marker */}
                                        <div className="relative z-10 flex items-center">
                                            <div
                                                style={{
                                                    backgroundColor: accent,
                                                }}
                                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                                            >
                                                <Icon className="h-5 w-5 text-black" />
                                            </div>

                                            <span className="ml-4 font-mono text-[11px] tracking-widest text-white/25 md:hidden">
                                                STEP {step.number}
                                            </span>
                                        </div>

                                        <div className="mt-7 md:pr-6">
                                            <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 md:block">
                                                Step {step.number}
                                            </div>

                                            <h3 className="mt-2 text-lg font-semibold tracking-tight">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 max-w-xs text-sm leading-6 text-white/40">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery information */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                <div className="mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                        Delivery information
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                        What to expect.
                    </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {deliveryInfo.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
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
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="border border-black/10 p-7 sm:p-8"
                            >
                                <div
                                    style={{
                                        backgroundColor: accent,
                                    }}
                                    className="flex h-11 w-11 items-center justify-center"
                                >
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="mt-7 text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 max-w-lg text-sm leading-7 text-black/50">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Delivery partners */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                                Delivery partners
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                Carriers we
                                <br />
                                work with.
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
                                We work with established delivery networks to
                                help us serve customers across supported
                                locations in India.
                            </p>
                        </div>

                        <div className="border-t border-white/15">
                            {deliveryPartners.map((partner, index) => (
                                <motion.div
                                    key={partner.name}
                                    initial={{
                                        opacity: 0,
                                        x: 20,
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
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="group flex items-center justify-between gap-6 border-b border-white/15 py-7"
                                >
                                    <div className="flex items-start gap-5">
                                        <span
                                            style={{
                                                color: accent,
                                            }}
                                            className="font-mono text-xs"
                                        >
                                            0{index + 1}
                                        </span>

                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {partner.name}
                                            </h3>

                                            <p className="mt-2 max-w-md text-sm leading-6 text-white/40">
                                                {partner.description}
                                            </p>
                                        </div>
                                    </div>

                                    <ChevronRight className="h-5 w-5 shrink-0 text-white/20 transition-transform group-hover:translate-x-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timing */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                    <motion.div
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
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        style={{
                            backgroundColor: accent,
                        }}
                        className="p-8 sm:p-12"
                    >
                        <Clock3 className="h-7 w-7" />

                        <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                            Delivery estimates
                        </p>

                        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Your estimated delivery date is shown at checkout.
                        </h2>
                    </motion.div>

                    <div className="max-w-xl">
                        <p className="text-base leading-8 text-black/60">
                            Delivery estimates are calculated based on factors
                            such as your shipping location, product
                            availability, and the delivery service selected
                            for your order.
                        </p>

                        <p className="mt-6 text-base leading-8 text-black/60">
                            These dates are estimates rather than guarantees.
                            Delays can occasionally occur because of weather,
                            operational issues, remote locations, or other
                            circumstances outside our control.
                        </p>

                        <div className="mt-8 flex items-start gap-3 border-l-2 border-black pl-5">
                            <Search className="mt-0.5 h-4 w-4 shrink-0" />

                            <p className="text-sm leading-6 text-black/50">
                                For the latest information about your specific
                                shipment, visit your{" "}
                                <Link
                                    href="/orders"
                                    className="font-semibold text-black underline underline-offset-4"
                                >
                                    orders
                                </Link>{" "}
                                and open the relevant order.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important notes */}
            <section className="border-t border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
                    <div className="grid gap-10 md:grid-cols-3">
                        <div>
                            <Check
                                className="h-5 w-5"
                                style={{ color: accent }}
                            />

                            <h3 className="mt-5 font-semibold">
                                Accurate address
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-black/45">
                                Make sure your shipping address and contact
                                details are correct before placing your order.
                            </p>
                        </div>

                        <div>
                            <Check
                                className="h-5 w-5"
                                style={{ color: accent }}
                            />

                            <h3 className="mt-5 font-semibold">
                                Tracking updates
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-black/45">
                                Shipment information may take some time to
                                update as your package moves between carrier
                                facilities.
                            </p>
                        </div>

                        <div>
                            <Check
                                className="h-5 w-5"
                                style={{ color: accent }}
                            />

                            <h3 className="mt-5 font-semibold">
                                Delivery attempts
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-black/45">
                                If delivery cannot be completed, the carrier
                                may make another attempt or contact you using
                                the details provided with your order.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-black/10 bg-[#faf9f7] text-black">
                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p
                            className="text-xs font-bold uppercase tracking-[0.25em]"
                            style={{ color: accent }}
                        >
                            Already placed an order?
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                            Check its latest shipping information.
                        </h2>
                    </div>

                    <Link
                        href="/orders"
                        className="group inline-flex w-fit items-center gap-3 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-95"
                        style={{ backgroundColor: accent }}
                    >
                        View my orders
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </main>
    );
}