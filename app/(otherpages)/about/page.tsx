"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Heart,
    Package,
    ShieldCheck,
    Sparkles,
    Truck,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const accent = "lab(66% 50.8 67.55)";

export default function AboutPage() {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32 lg:py-40">
                    <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_0.7fr]">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em]"
                            >
                                <span
                                    className="h-2.5 w-2.5 rounded-full"
                                    style={{ backgroundColor: accent }}
                                />
                                About Cybermart
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.1,
                                }}
                                className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
                            >
                                Shopping,
                                <br />
                                <span
                                    style={{
                                        textDecorationColor: accent,
                                    }}
                                    className="underline decoration-8 underline-offset-8"
                                >
                                    without
                                </span>{" "}
                                the noise.
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.25,
                            }}
                            className="max-w-md lg:pb-2"
                        >
                            <p className="text-lg leading-8 text-black/60">
                                Cybermart is built around a simple belief:
                                finding something you want shouldn’t feel
                                complicated.
                            </p>

                            <Link
                                href="/products"
                                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                            >
                                Explore Cybermart
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative accent */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ backgroundColor: accent }}
                    className="absolute bottom-0 left-0 h-1 w-full origin-left"
                />
            </section>

            {/* Intro */}
            <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            Our story
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 lg:col-start-6"
                    >
                        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            We believe good shopping should feel{" "}
                            <span
                                style={{
                                    backgroundColor: accent,
                                }}
                                className="px-2"
                            >
                                natural.
                            </span>
                        </h2>

                        <div className="mt-10 space-y-6 text-base leading-8 text-black/60">
                            <p>
                                Cybermart was created to bring products and
                                people together through an experience that is
                                straightforward, thoughtful, and easy to use.
                            </p>

                            <p>
                                No unnecessary complexity. No endless maze of
                                choices. Just a place where you can discover
                                products, understand what you’re buying, and
                                get on with your day.
                            </p>

                            <p>
                                We’re building Cybermart one detail at a time,
                                with the goal of making every part of the
                                journey feel considered.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
                    <div className="grid gap-16 lg:grid-cols-12">
                        <div className="lg:col-span-4">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
                                What matters
                            </p>

                            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Simple ideas.
                                <br />
                                <span style={{ color: accent }}>
                                    Strong values.
                                </span>
                            </h2>
                        </div>

                        <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:col-span-8">
                            {[
                                {
                                    icon: ShieldCheck,
                                    title: "Trust",
                                    text: "Clear information and a straightforward experience, from browsing to checkout.",
                                },
                                {
                                    icon: Heart,
                                    title: "People first",
                                    text: "Every part of Cybermart is designed around the people using it.",
                                },
                                {
                                    icon: Package,
                                    title: "Quality",
                                    text: "We want products to be easy to discover, understand, and choose.",
                                },
                                {
                                    icon: Truck,
                                    title: "Reliability",
                                    text: "A dependable experience matters just as much as the products themselves.",
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
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
                                        className="bg-black p-8 sm:p-10"
                                    >
                                        <Icon
                                            className="mb-8 h-6 w-6"
                                            style={{ color: accent }}
                                        />

                                        <h3 className="text-xl font-semibold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-white/50">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Statement */}
            <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-36">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden border-2 border-black p-8 sm:p-14 lg:p-20"
                >
                    <div
                        style={{ backgroundColor: accent }}
                        className="absolute right-0 top-0 h-24 w-24 sm:h-32 sm:w-32"
                    />

                    <Sparkles className="mb-10 h-7 w-7" />

                    <h2 className="relative max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                        Less friction.
                        <br />
                        More discovery.
                        <br />
                        <span
                            style={{
                                backgroundColor: accent,
                            }}
                            className="inline-block px-2"
                        >
                            Better shopping.
                        </span>
                    </h2>

                    <p className="mt-10 max-w-xl text-base leading-8 text-black/60">
                        That’s the direction we’re taking Cybermart—and we’re
                        only getting started.
                    </p>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="border-t border-black/10">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center sm:px-10">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                            Your next find
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                            See what’s waiting for you.
                        </h2>
                    </div>

                    <Link
                        href="/products"
                        className="group inline-flex items-center gap-3 border-2 border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
                    >
                        Browse products
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </main>
    );
}