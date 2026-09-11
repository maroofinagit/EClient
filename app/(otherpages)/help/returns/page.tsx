"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    ChevronRight,
    Clock3,
    CreditCard,
    PackageCheck,
    RotateCcw,
    ShieldCheck,
    X,
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

const returnSteps = [
    {
        number: "01",
        icon: RotateCcw,
        title: "Request a return",
        description:
            "Start your return request from your order details within the eligible return window.",
    },
    {
        number: "02",
        icon: PackageCheck,
        title: "Item is reviewed",
        description:
            "Once received, the item is checked to make sure it meets our return conditions.",
    },
    {
        number: "03",
        icon: ShieldCheck,
        title: "Return approved",
        description:
            "If the item meets the requirements, your return is approved and the refund process begins.",
    },
    {
        number: "04",
        icon: CreditCard,
        title: "Refund processed",
        description:
            "The approved refund is sent back to your original payment method.",
    },
];

const returnEligible = [
    "The item is unused and in its original condition.",
    "The item is returned with its original tags, packaging, and included accessories.",
    "The return request is submitted within the applicable return window.",
    "The item received is damaged, defective, or materially different from what was ordered.",
    "The item can be reasonably inspected and identified as part of the original order.",
];

const returnNotEligible = [
    "The item has been worn, washed, altered, or used beyond reasonable inspection.",
    "Original tags, packaging, or important accessories are missing.",
    "The item has been damaged after delivery due to misuse or improper care.",
    "The return request is submitted after the applicable return window.",
    "The item is a product or category specifically marked as non-returnable.",
];

const refundEligible = [
    "A returned item has been received and passes the return inspection.",
    "The item was confirmed to be defective, damaged, or incorrectly supplied.",
    "An order was cancelled successfully before it was fulfilled, where cancellation is permitted.",
    "A refund is otherwise approved under the applicable Cybermart policy.",
];

const refundNotEligible = [
    "The returned item does not satisfy the return conditions.",
    "The issue resulted from misuse, alteration, or damage caused after delivery.",
    "The claim cannot be reasonably verified against the original order.",
    "The applicable return or refund window has expired, except where consumer law requires otherwise.",
];

export default function ReturnsPage() {
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
                <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 sm:pb-28 sm:pt-10">
                    <Breadcrumb className="mb-16">
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
                                    Returns & Refunds
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="max-w-4xl"
                    >
                        <p
                            className="text-xs font-bold uppercase tracking-[0.25em]"
                            style={{ color: accent }}
                        >
                            Returns & refunds
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            If something isn&apos;t right,
                            <br />
                            we&apos;ll help make it right.
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
                            Our returns and refunds policy explains when an item
                            can be returned, when a refund is available, and
                            what happens after you submit a request.
                        </p>

                        <div
                            className="mt-10 h-1 w-20"
                            style={{ backgroundColor: accent }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Quick policy summary */}
            <section className="border-b border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
                    <div className="grid gap-10 md:grid-cols-3">
                        {[
                            {
                                icon: Clock3,
                                title: "Return window",
                                text: "Submit your request within the return period shown for your order or product.",
                            },
                            {
                                icon: PackageCheck,
                                title: "Item condition",
                                text: "Returned items generally need to be unused, complete, and in their original condition.",
                            },
                            {
                                icon: CreditCard,
                                title: "Refund method",
                                text: "Approved refunds are normally sent to the original payment method.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 18,
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
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    className="border-t border-black/15 pt-6"
                                >
                                    <Icon className="h-5 w-5" />

                                    <h2 className="mt-5 text-lg font-semibold">
                                        {item.title}
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-black/50">
                                        {item.text}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Return process */}
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
                            What happens after you request a return?
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
                            The process is straightforward: request, review,
                            approval, and refund.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-white/15 md:block" />

                        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
                            {returnSteps.map((step, index) => {
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
                                        <div className="relative z-10 flex items-center">
                                            <div
                                                style={{
                                                    backgroundColor: accent,
                                                }}
                                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                                            >
                                                <Icon className="h-5 w-5 text-black" />
                                            </div>

                                            <span className="ml-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 md:hidden">
                                                Step {step.number}
                                            </span>
                                        </div>

                                        <div className="mt-7 md:pr-6">
                                            <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 md:block">
                                                Step {step.number}
                                            </p>

                                            <h3 className="mt-2 text-lg font-semibold">
                                                {step.title}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-white/40">
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

            {/* Return eligibility */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p
                                className="text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Return eligibility
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                When can you return an item?
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                                A return is generally accepted when the item
                                meets the conditions below and the request is
                                made within the applicable return period.
                            </p>
                        </div>

                        <div className="divide-y divide-black/10 border-y border-black/10">
                            {returnEligible.map((item, index) => (
                                <motion.div
                                    key={item}
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
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.06,
                                    }}
                                    className="flex gap-5 py-6"
                                >
                                    <div
                                        style={{
                                            backgroundColor: accent,
                                        }}
                                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                                    >
                                        <Check className="h-4 w-4 text-black" />
                                    </div>

                                    <p className="text-sm leading-6 text-black/65">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Non-returnable */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30">
                                Return restrictions
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                When can&apos;t an item be returned?
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                                Some circumstances prevent us from accepting a
                                return. These conditions help us protect
                                product quality and keep the process fair.
                            </p>
                        </div>

                        <div className="divide-y divide-white/10 border-y border-white/10">
                            {returnNotEligible.map((item, index) => (
                                <motion.div
                                    key={item}
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
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.06,
                                    }}
                                    className="flex gap-5 py-6"
                                >
                                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15">
                                        <X className="h-4 w-4 text-white/50" />
                                    </div>

                                    <p className="text-sm leading-6 text-white/50">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Refund eligibility */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="mb-14 max-w-2xl">
                        <p
                            className="text-xs font-bold uppercase tracking-[0.25em]"
                            style={{ color: accent }}
                        >
                            Refunds
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                            When is a refund issued?
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-black/50 sm:text-base">
                            A return and a refund are related, but they are not
                            the same step. A refund is issued after the order
                            or returned item qualifies under the applicable
                            policy.
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
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
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="border-t border-black pt-7"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    style={{
                                        backgroundColor: accent,
                                    }}
                                    className="flex h-9 w-9 items-center justify-center rounded-full"
                                >
                                    <Check className="h-4 w-4 text-black" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Refund may be approved when
                                </h3>
                            </div>

                            <div className="mt-7 space-y-5">
                                {refundEligible.map((item) => (
                                    <div
                                        key={item}
                                        className="flex gap-4 text-sm leading-6 text-black/55"
                                    >
                                        <ChevronRight className="mt-1 h-4 w-4 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

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
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                            }}
                            className="border-t border-black pt-7"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15">
                                    <X className="h-4 w-4" />
                                </div>

                                <h3 className="text-xl font-semibold">
                                    Refund may be declined when
                                </h3>
                            </div>

                            <div className="mt-7 space-y-5">
                                {refundNotEligible.map((item) => (
                                    <div
                                        key={item}
                                        className="flex gap-4 text-sm leading-6 text-black/55"
                                    >
                                        <ChevronRight className="mt-1 h-4 w-4 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Refund timeline */}
            <section className="border-y border-black/10 bg-[#f7f7f5]">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <p
                                className="text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Getting your money back
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                How the refund works.
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                                Once a refund is approved, the amount is
                                processed through the payment method used for
                                the original purchase.
                            </p>
                        </div>

                        <div className="space-y-0 border-y border-black/10">
                            {[
                                {
                                    number: "01",
                                    title: "Return is received",
                                    description:
                                        "If a return is required, we wait until the item reaches us before completing the final review.",
                                },
                                {
                                    number: "02",
                                    title: "Inspection is completed",
                                    description:
                                        "The returned item is checked against the applicable return conditions.",
                                },
                                {
                                    number: "03",
                                    title: "Refund is approved",
                                    description:
                                        "Once approved, the refund amount is submitted for processing.",
                                },
                                {
                                    number: "04",
                                    title: "Payment provider processes it",
                                    description:
                                        "Your bank or payment provider may take additional time to make the refunded amount available.",
                                },
                            ].map((step, index) => (
                                <motion.div
                                    key={step.number}
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
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    className="grid gap-5 border-b border-black/10 py-7 last:border-b-0 sm:grid-cols-[70px_1fr]"
                                >
                                    <span className="font-mono text-xs text-black/25">
                                        {step.number}
                                    </span>

                                    <div>
                                        <h3 className="font-semibold">
                                            {step.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-black/50">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Important policy notes */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="border border-black/10">
                        <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
                            <div
                                style={{
                                    backgroundColor: accent,
                                }}
                                className="p-8 sm:p-10"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/50">
                                    Important
                                </p>

                                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                                    A few things to keep in mind.
                                </h2>
                            </div>

                            <div className="divide-y divide-black/10">
                                {[
                                    "Return eligibility can vary by product. Always check the return information associated with your order.",
                                    "Refund amounts may depend on the amount actually paid for the eligible item.",
                                    "The time required for a refund to appear in your account can depend on your bank or payment provider.",
                                    "Nothing in this policy is intended to limit any rights you may have under applicable consumer protection laws.",
                                ].map((item, index) => (
                                    <motion.div
                                        key={item}
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
                                            delay: index * 0.06,
                                        }}
                                        className="flex gap-5 p-7 sm:p-8"
                                    >
                                        <span className="font-mono text-xs text-black/25">
                                            0{index + 1}
                                        </span>

                                        <p className="max-w-2xl text-sm leading-6 text-black/55">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
                    <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p
                                className="text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Need help?
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                Something went wrong with your order?
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
                                Visit your orders to check the order details
                                and available actions. If you still need help,
                                our support team is here for you.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/orders"
                                className="group inline-flex items-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                            >
                                View your orders
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
                            >
                                Contact support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer note */}
            <div className="border-t border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
                    <div className="flex items-center justify-between gap-6">
                        <Link
                            href="/help"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-colors hover:text-black"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Help Center
                        </Link>

                        <p className="hidden text-xs text-black/30 sm:block">
                            Returns & refunds policy
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}