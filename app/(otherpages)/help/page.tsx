"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ChevronDown,
    CircleHelp,
    CreditCard,
    Headphones,
    Package,
    RotateCcw,
    Search,
    ShieldCheck,
    ShoppingBag,
    Truck,
} from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const accent = "lab(66% 50.8 67.55)";

const helpTopics = [
    {
        icon: Package,
        title: "Orders",
        description: "Track an order, check its status, or understand your order details.",
        href: "/orders",
    },
    {
        icon: Truck,
        title: "Shipping",
        description: "Learn about delivery times, shipping updates, and tracking.",
        href: "/help/shipping",
    },
    {
        icon: RotateCcw,
        title: "Returns & Refunds",
        description: "Understand our return process and how refunds are handled.",
        href: "/help/returns",
    },
    {
        icon: CreditCard,
        title: "Payments",
        description: "Get help with payments, checkout, and transaction issues.",
        href: "/help/payments",
    },
    {
        icon: ShoppingBag,
        title: "Products",
        description: "Browse products, sizes, colors, and availability.",
        href: "/products",
    },
    {
        icon: ShieldCheck,
        title: "Account & Security",
        description: "Manage your account and keep your information secure.",
        href: "#account",
    },
];

const faqs = [
    {
        question: "How can I track my order?",
        answer: "Open your order from the Orders section of your account and select the item you want to track. You’ll see the latest shipment status and tracking updates there.",
    },
    {
        question: "How long does shipping take?",
        answer: "Delivery times depend on your location and the shipping method available for your order. You can find the latest estimated delivery information in your order details.",
    },
    {
        question: "Can I cancel my order?",
        answer: "Orders can generally only be cancelled before they enter the shipping process. If cancellation is available, you’ll see the relevant option in your order details.",
    },
    {
        question: "How do returns work?",
        answer: "If your order is eligible for a return, you can follow the return instructions provided on our Returns & Refunds page. Eligibility can depend on the product and its condition.",
    },
    {
        question: "When will I receive my refund?",
        answer: "Once an eligible return has been received and processed, the refund is sent back through the applicable payment method. Processing time can vary depending on the payment provider.",
    },
    {
        question: "What should I do if I received the wrong item?",
        answer: "Please contact our support team with your order details and a description of the issue. We’ll help you figure out the next step.",
    },
];

export default function HelpCenterPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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

                     <Breadcrumb className="mb-6">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<a href="/" />}>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Help Center</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <div className="mb-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            <span
                                style={{ backgroundColor: accent }}
                                className="h-2.5 w-2.5 rounded-full"
                            />
                            Help Center
                        </div>

                        <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                            How can we
                            <br />
                            <span
                                style={{
                                    textDecorationColor: accent,
                                }}
                                className="underline decoration-8 underline-offset-8"
                            >
                                help?
                            </span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
                            Find answers about your orders, shipping, returns,
                            payments, and everything else you need to know
                            about Cybermart.
                        </p>
                    </motion.div>

               
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

            {/* Topics */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                <div className="mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/35">
                        Browse topics
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        What do you need help with?
                    </h2>
                </div>

                <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
                    {helpTopics.map((topic, index) => {
                        const Icon = topic.icon;

                        return (
                            <motion.div
                                key={topic.title}
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
                                    duration: 0.45,
                                    delay: index * 0.06,
                                }}
                            >
                                <Link
                                    href={topic.href}
                                    className="group block h-full bg-white p-7 transition-colors hover:bg-black hover:text-white sm:p-8"
                                >
                                    <div className="flex items-start justify-between">
                                        <div
                                            style={{
                                                backgroundColor: accent,
                                            }}
                                            className="flex h-11 w-11 items-center justify-center"
                                        >
                                            <Icon className="h-5 w-5 text-black" />
                                        </div>

                                        <ArrowRight className="h-5 w-5 text-black/20 transition-transform group-hover:translate-x-1 group-hover:text-white/50" />
                                    </div>

                                    <h3 className="mt-8 text-lg font-semibold">
                                        {topic.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-black/45 group-hover:text-white/45">
                                        {topic.description}
                                    </p>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* FAQ */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                                Frequently asked
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                Answers to the
                                <br />
                                usual questions.
                            </h2>

                            <CircleHelp
                                className="mt-10 h-8 w-8"
                                style={{ color: accent }}
                            />
                        </div>

                        <div className="border-t border-white/15">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;

                                return (
                                    <motion.div
                                        key={faq.question}
                                        initial={{
                                            opacity: 0,
                                            y: 10,
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
                                            duration: 0.4,
                                            delay: index * 0.05,
                                        }}
                                        className="border-b border-white/15"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(
                                                    isOpen ? null : index
                                                )
                                            }
                                            className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer"
                                        >
                                            <span className="text-sm font-medium sm:text-base">
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                className={`h-5 w-5 shrink-0 text-white/35 transition-transform ${
                                                    isOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>

                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isOpen ? "auto" : 0,
                                                opacity: isOpen ? 1 : 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-white/45">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
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
                    className="relative overflow-hidden border-2 border-black p-8 sm:p-12 lg:p-16"
                >
                    <div className="relative z-10 max-w-2xl">
                        <div
                            style={{
                                backgroundColor: accent,
                            }}
                            className="mb-7 flex h-12 w-12 items-center justify-center"
                        >
                            <Headphones className="h-5 w-5" />
                        </div>

                        <p className=" font-bold uppercase tracking-[0.25em] text-black/35">
                            Still need help?
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                            Talk to our support team.
                        </h2>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-black/50 sm:text-base">
                            If you couldn’t find what you were looking for,
                            send us a message. We’ll help you get things
                            sorted.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-8 inline-flex items-center gap-3 bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                        >
                            Contact us
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div
                        style={{
                            backgroundColor: accent,
                        }}
                        className="absolute -right-12 -top-12 h-40 w-40 rounded-full sm:h-56 sm:w-56"
                    />

                    <div className="absolute -bottom-24 right-24 h-40 w-40 rounded-full border-24 border-black/5" />
                </motion.div>
            </section>

            {/* Footer note */}
            <section className="border-t border-black/10">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-8 sm:px-10">
                    <p className=" text-black/35">
                        Need something else?
                    </p>

                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 font-semibold"
                    >
                        Back to Cybermart
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </main>
    );
}