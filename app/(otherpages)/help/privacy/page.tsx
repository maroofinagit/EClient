"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    FileText,
    LockKeyhole,
    ShieldCheck,
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

const privacySections = [
    {
        id: "information-we-collect",
        number: "01",
        title: "Information we collect",
        content: [
            {
                heading: "Information you provide",
                text: "When you create an account, place an order, contact us, or otherwise interact with Cybermart, we may collect information such as your name, email address, phone number, shipping address, billing details, and other information you choose to provide.",
            },
            {
                heading: "Order information",
                text: "When you make a purchase, we collect information necessary to process and fulfill the order, including the products purchased, order amount, delivery information, and order status.",
            },
            {
                heading: "Technical information",
                text: "We may automatically receive technical information such as your browser type, device information, IP address, pages visited, and general usage information when you use our website.",
            },
        ],
    },
    {
        id: "how-we-use-information",
        number: "02",
        title: "How we use your information",
        content: [
            {
                heading: "Providing our services",
                text: "We use your information to create and manage your account, process orders, arrange delivery, provide customer support, and operate the services you request.",
            },
            {
                heading: "Improving Cybermart",
                text: "We may use information about how our website is used to maintain, troubleshoot, improve, and develop our products and services.",
            },
            {
                heading: "Communication",
                text: "We may use your contact information to send transactional communications such as order confirmations, shipping updates, account notifications, and responses to support requests.",
            },
        ],
    },
    {
        id: "payment-information",
        number: "03",
        title: "Payment information",
        content: [
            {
                heading: "Payment processing",
                text: "Payments are processed through third-party payment providers. Payment information may be transmitted directly to the relevant payment provider to authorize and process your transaction.",
            },
            {
                heading: "What Cybermart stores",
                text: "Cybermart does not need to store complete card credentials such as your full card number, CVV, or card PIN as ordinary account information. The exact information retained may depend on the payment method and provider used.",
            },
        ],
    },
    {
        id: "sharing-information",
        number: "04",
        title: "When we share information",
        content: [
            {
                heading: "Service providers",
                text: "We may share relevant information with trusted service providers that help us operate Cybermart, including payment processors, delivery partners, hosting providers, analytics services, and customer support services.",
            },
            {
                heading: "Legal requirements",
                text: "We may disclose information when reasonably necessary to comply with applicable law, legal processes, regulatory requirements, or to protect the rights, safety, and security of Cybermart, our customers, or others.",
            },
            {
                heading: "We do not sell your personal information",
                text: "We do not sell your personal information as a standalone commercial product.",
            },
        ],
    },
    {
        id: "cookies",
        number: "05",
        title: "Cookies and similar technologies",
        content: [
            {
                heading: "How cookies are used",
                text: "Cybermart may use cookies and similar technologies to keep you signed in, remember preferences, maintain essential website functionality, understand website usage, and improve your experience.",
            },
            {
                heading: "Your choices",
                text: "Depending on your browser and device, you may be able to control or delete cookies through your browser settings. Disabling certain cookies may affect parts of the website.",
            },
        ],
    },
    {
        id: "data-security",
        number: "06",
        title: "Data security",
        content: [
            {
                heading: "Protecting your information",
                text: "We use reasonable technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, or destruction.",
            },
            {
                heading: "No system is perfect",
                text: "Although we take security seriously, no method of transmitting or storing information over the internet can be guaranteed to be completely secure.",
            },
        ],
    },
    {
        id: "data-retention",
        number: "07",
        title: "Data retention",
        content: [
            {
                heading: "How long we keep information",
                text: "We retain information for as long as reasonably necessary to provide our services, maintain business and transaction records, resolve disputes, comply with legal obligations, and enforce our agreements.",
            },
        ],
    },
    {
        id: "your-rights",
        number: "08",
        title: "Your choices and rights",
        content: [
            {
                heading: "Account information",
                text: "You may review or update certain information associated with your account through the available account settings.",
            },
            {
                heading: "Privacy requests",
                text: "Depending on applicable law, you may have rights relating to access, correction, deletion, restriction, or other handling of your personal information. You can contact us to make a privacy-related request.",
            },
        ],
    },
];

const termsSections = [
    {
        id: "acceptance",
        number: "01",
        title: "Acceptance of these terms",
        content: [
            {
                heading: "Using Cybermart",
                text: "By accessing or using Cybermart, you agree to these Terms of Service and any policies referenced by them. If you do not agree with these terms, you should not use the service.",
            },
            {
                heading: "Eligibility",
                text: "You must be legally capable of entering into a binding agreement under the laws applicable to you in order to place an order or use services that require an agreement.",
            },
        ],
    },
    {
        id: "accounts",
        number: "02",
        title: "Accounts",
        content: [
            {
                heading: "Account responsibility",
                text: "If you create an account, you are responsible for providing accurate information and maintaining the confidentiality of your account credentials.",
            },
            {
                heading: "Unauthorized activity",
                text: "You should notify Cybermart promptly if you believe your account has been accessed without authorization or if you become aware of suspicious activity.",
            },
        ],
    },
    {
        id: "products-orders",
        number: "03",
        title: "Products and orders",
        content: [
            {
                heading: "Product information",
                text: "We make reasonable efforts to display accurate product descriptions, images, prices, availability, and other information. However, product presentation may vary by device and actual availability can change.",
            },
            {
                heading: "Order acceptance",
                text: "Submitting an order does not necessarily mean that Cybermart has accepted it. We may decline or cancel an order where necessary, including where a product is unavailable, pricing information is incorrect, payment cannot be verified, or suspicious activity is detected.",
            },
            {
                heading: "Pricing",
                text: "Prices and applicable charges are displayed during checkout. We may correct pricing or information errors and, where appropriate, provide you with the option to confirm the order at the corrected price or cancel it.",
            },
        ],
    },
    {
        id: "payments",
        number: "04",
        title: "Payments",
        content: [
            {
                heading: "Payment authorization",
                text: "You authorize the applicable payment provider to process the payment associated with your order when you complete checkout.",
            },
            {
                heading: "Payment failures",
                text: "An order may not be completed when a payment is declined, remains unresolved, or cannot be successfully confirmed. You should not repeatedly submit payments when a previous transaction is still pending.",
            },
        ],
    },
    {
        id: "shipping",
        number: "05",
        title: "Shipping and delivery",
        content: [
            {
                heading: "Delivery estimates",
                text: "Delivery estimates are provided for guidance and may vary based on destination, product availability, carrier conditions, weather, operational delays, or other circumstances outside our reasonable control.",
            },
            {
                heading: "Tracking",
                text: "Where tracking information is available, it can be viewed through the order tracking experience provided by Cybermart.",
            },
        ],
    },
    {
        id: "returns-refunds",
        number: "06",
        title: "Returns and refunds",
        content: [
            {
                heading: "Separate policy",
                text: "Returns and refunds are governed by Cybermart's Returns & Refunds policy. Eligibility, exclusions, return conditions, and refund processing are described there.",
            },
            {
                heading: "Your responsibility",
                text: "You are responsible for following the applicable return instructions and ensuring that returned products meet the stated return conditions.",
            },
        ],
    },
    {
        id: "acceptable-use",
        number: "07",
        title: "Acceptable use",
        content: [
            {
                heading: "You agree not to",
                text: "Use Cybermart for unlawful purposes, interfere with the operation or security of the service, attempt unauthorized access, submit fraudulent information, abuse promotions or payment systems, or engage in activity that could harm Cybermart or other users.",
            },
        ],
    },
    {
        id: "intellectual-property",
        number: "08",
        title: "Intellectual property",
        content: [
            {
                heading: "Our content",
                text: "Unless otherwise stated, Cybermart's website, branding, designs, text, graphics, software, and other content are owned by or licensed to Cybermart and are protected by applicable intellectual property laws.",
            },
            {
                heading: "Limited use",
                text: "You may use the website for its intended personal or business purpose, but you may not reproduce, distribute, modify, or commercially exploit Cybermart content without appropriate authorization.",
            },
        ],
    },
    {
        id: "disclaimers",
        number: "09",
        title: "Disclaimers and liability",
        content: [
            {
                heading: "Service availability",
                text: "We aim to keep Cybermart available and reliable, but we do not guarantee that the service will always be uninterrupted, error-free, or available at every moment.",
            },
            {
                heading: "Limitation of liability",
                text: "To the extent permitted by applicable law, Cybermart will not be responsible for indirect, incidental, special, or consequential losses arising from your use of the service.",
            },
            {
                heading: "Mandatory rights",
                text: "Nothing in these terms is intended to exclude or limit any rights or protections that cannot legally be excluded or limited under applicable law.",
            },
        ],
    },
    {
        id: "changes",
        number: "10",
        title: "Changes to these terms",
        content: [
            {
                heading: "Updates",
                text: "We may update these Terms of Service or Privacy Policy from time to time. When we make material changes, we may provide notice through the website or other appropriate communication.",
            },
            {
                heading: "Continued use",
                text: "Your continued use of Cybermart after updated terms become effective means that you accept the revised terms to the extent permitted by law.",
            },
        ],
    },
    {
        id: "contact",
        number: "11",
        title: "Contact",
        content: [
            {
                heading: "Questions about these policies",
                text: "If you have questions about this Privacy Policy or Terms of Service, you can contact the Cybermart support team through our contact page.",
            },
        ],
    },
];

function PolicySection({
    section,
    dark = false,
}: {
    section: (typeof privacySections)[number];
    dark?: boolean;
}) {
    return (
        <motion.section
            id={section.id}
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
                amount: 0.15,
            }}
            transition={{
                duration: 0.45,
            }}
            className={`scroll-mt-24 border-t ${dark ? "border-white/10" : "border-black/10"
                } py-10 sm:py-14`}
        >
            <div className="grid gap-7 md:grid-cols-[80px_0.7fr_1.3fr]">
                <span
                    className={`font-mono text-xs ${dark ? "text-white/25" : "text-black/25"
                        }`}
                >
                    {section.number}
                </span>

                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {section.title}
                </h3>

                <div className="space-y-8">
                    {section.content.map((item) => (
                        <div key={item.heading}>
                            <h4 className="text-sm font-semibold">
                                {item.heading}
                            </h4>

                            <p
                                className={`mt-2 text-sm leading-7 ${dark
                                        ? "text-white/45"
                                        : "text-black/50"
                                    }`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default function PrivacyPage() {
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
                                <BreadcrumbPage>
                                    Privacy & Terms
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
                            Legal
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            Privacy & terms,
                            <br />
                            clearly stated.
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
                            This page explains how Cybermart handles your
                            information and the terms that apply when you use
                            our website and services.
                        </p>

                        <div
                            className="mt-10 h-1 w-20"
                            style={{ backgroundColor: accent }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Navigation */}
            <section className="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur">
                <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10">
                    <nav className="flex min-w-max">
                        <a
                            href="#privacy"
                            className="border-b-2 border-transparent px-1 py-5 mr-8 text-sm font-semibold transition-colors hover:border-black"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#terms"
                            className="border-b-2 border-transparent px-1 py-5 text-sm font-semibold transition-colors hover:border-black"
                        >
                            Terms of Service
                        </a>
                    </nav>
                </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="scroll-mt-20">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
                        <div className="lg:sticky lg:top-28 lg:h-fit">
                            <div
                                style={{
                                    backgroundColor: accent,
                                }}
                                className="flex h-12 w-12 items-center justify-center rounded-full"
                            >
                                <LockKeyhole className="h-5 w-5 text-black" />
                            </div>

                            <p
                                className="mt-7 text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Privacy Policy
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                Your information.
                                <br />
                                Your trust.
                            </h2>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-black/50">
                                We collect and use information to operate
                                Cybermart, process your orders, provide
                                support, and improve the experience.
                            </p>

                            <p className="mt-6 text-xs text-black/30">
                                Last updated: September 11, 2026
                            </p>
                        </div>

                        <div>
                            {privacySections.map((section) => (
                                <PolicySection
                                    key={section.id}
                                    section={section}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-start gap-5">
                            <div
                                style={{
                                    backgroundColor: accent,
                                }}
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                            >
                                <FileText className="h-5 w-5 text-black" />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30">
                                    Next section
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                                    Terms of Service
                                </h2>

                                <p className="mt-2 text-sm text-white/40">
                                    The rules that apply when using Cybermart.
                                </p>
                            </div>
                        </div>

                        <a
                            href="#terms"
                            className="group inline-flex w-fit items-center gap-3 text-sm font-semibold"
                        >
                            Read the terms
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Terms */}
            <section id="terms" className="scroll-mt-20 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
                        <div className="lg:sticky lg:top-28 lg:h-fit">
                            <div
                                style={{
                                    backgroundColor: accent,
                                }}
                                className="flex h-12 w-12 items-center justify-center rounded-full"
                            >
                                <ShieldCheck className="h-5 w-5 text-black" />
                            </div>

                            <p
                                className="mt-7 text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Terms of Service
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                Fair rules.
                                <br />
                                Clear expectations.
                            </h2>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                                These terms describe how Cybermart&apos;s
                                website, accounts, orders, payments, and
                                services may be used.
                            </p>

                            <p className="mt-6 text-xs text-white/25">
                                Last updated: September 11, 2026
                            </p>
                        </div>

                        <div>
                            {termsSections.map((section) => (
                                <PolicySection
                                    key={section.id}
                                    section={section}
                                    dark
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="border-t border-black/10 bg-[#faf9f7] text-black">
                <div className="mx-auto max-w-7xl px-6 pb-20 pt-4 sm:px-10 sm:pb-24">
                    <div className="border border-black/10 bg-white p-8 sm:p-10">
                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div>
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.25em]"
                                    style={{ color: accent }}
                                >
                                    Questions?
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                                    Need clarification on a policy?
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-black/50">
                                    Our support team can help with questions about your
                                    account, orders, privacy, or these terms.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="group inline-flex w-fit shrink-0 items-center gap-3 bg-black px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-black/90"
                            >
                                Contact support
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-6">
                        <Link
                            href="/help"
                            className="group inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors hover:text-black"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Help Center
                        </Link>

                        <a
                            href="#privacy"
                            className="inline-flex items-center gap-2 text-sm font-medium text-black/45 transition-colors hover:text-black"
                        >
                            Privacy Policy
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}