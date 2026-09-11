"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Clock,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const accent = "lab(66% 50.8 67.55)";

export default function ContactPage() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Message sent successfully!");
        toast.success("Message sent successfully!");
        // Handle form submission logic here
    };

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero */}
            <section className="border-b border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-7 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em]"
                            >
                                <span
                                    style={{ backgroundColor: accent }}
                                    className="h-2.5 w-2.5 rounded-full"
                                />
                                Get in touch
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1,
                                }}
                                className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
                            >
                                We’re here
                                <br />
                                to{" "}
                                <span
                                    style={{
                                        textDecorationColor: accent,
                                    }}
                                    className="underline decoration-8 underline-offset-8"
                                >
                                    help.
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.25,
                            }}
                            className="max-w-md text-base leading-7 text-black/60 lg:col-span-4 lg:pb-2 lg:text-lg"
                        >
                            Have a question about an order, product, delivery,
                            or anything else? Send us a message and we’ll get
                            back to you.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    style={{ backgroundColor: accent }}
                    className="h-1 w-full origin-left"
                />
            </section>

            {/* Contact area */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                <div className="grid gap-16 lg:grid-cols-12">
                    {/* Contact information */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            Contact information
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                            Let’s talk.
                        </h2>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-black/55">
                            Whether you need help with an order or simply have
                            a question, our team is ready to help.
                        </p>

                        <div className="mt-10 space-y-7">
                            <ContactDetail
                                icon={Mail}
                                title="Email"
                                value="support@cybermart.com"
                            />

                            <ContactDetail
                                icon={Phone}
                                title="Phone"
                                value="+91 00000 00000"
                            />

                            <ContactDetail
                                icon={Clock}
                                title="Support hours"
                                value="Mon – Sat · 9:00 AM – 6:00 PM"
                            />

                            <ContactDetail
                                icon={MapPin}
                                title="Location"
                                value="India"
                            />
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
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
                            delay: 0.1,
                        }}
                        className="lg:col-span-7 lg:col-start-6"
                    >
                       <ContactForm />
                    </motion.div>
                </div>
            </section>

            {/* Help CTA */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex gap-5">
                            <div
                                style={{ backgroundColor: accent }}
                                className="flex h-12 w-12 shrink-0 items-center justify-center"
                            >
                                <MessageCircle className="h-5 w-5 text-black" />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                                    Looking for quick answers?
                                </p>

                                <h2 className="mt-2 text-2xl font-semibold">
                                    Visit our Help Center.
                                </h2>

                                <p className="mt-2 text-sm text-white/50">
                                    Find answers to common questions about
                                    orders, shipping, returns, and more.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/help"
                            className="group inline-flex shrink-0 items-center gap-3 border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
                        >
                            Help Center
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                            Still browsing?
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                            Maybe your next favorite product is waiting.
                        </h2>
                    </div>

                    <Link
                        href="/products"
                        className="group inline-flex items-center gap-3 border-2 border-black px-6 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
                    >
                        Browse products
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function ContactDetail({
    icon: Icon,
    title,
    value,
}: {
    icon: React.ElementType;
    title: string;
    value: string;
}) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/15">
                <Icon className="h-4 w-4" />
            </div>

            <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                    {title}
                </p>

                <p className="mt-1 text-sm font-medium">{value}</p>
            </div>
        </div>
    );
}