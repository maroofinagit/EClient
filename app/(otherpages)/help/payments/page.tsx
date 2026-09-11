"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Banknote,
    Check,
    ChevronRight,
    CreditCard,
    HelpCircle,
    LockKeyhole,
    RefreshCcw,
    Smartphone,
    WalletCards,
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

const paymentMethods = [
    {
        icon: Smartphone,
        title: "UPI",
        description:
            "Pay securely using a supported UPI app such as Google Pay, PhonePe, Paytm, or another compatible UPI provider.",
    },
    {
        icon: CreditCard,
        title: "Credit & debit cards",
        description:
            "Use an eligible Visa, Mastercard, RuPay, or other supported card to complete your purchase.",
    },
    {
        icon: WalletCards,
        title: "Other supported methods",
        description:
            "Available payment options are shown at checkout based on your location, order, and payment provider.",
    },
];

const upiSteps = [
    {
        number: "01",
        title: "Choose UPI",
        description:
            "Select UPI as your payment method during checkout.",
    },
    {
        number: "02",
        title: "Select your UPI app",
        description:
            "Continue with your preferred supported UPI application or enter your UPI details when prompted.",
    },
    {
        number: "03",
        title: "Approve the payment",
        description:
            "Authorize the payment inside your UPI app using the security method required by your bank.",
    },
    {
        number: "04",
        title: "Payment is confirmed",
        description:
            "Once the payment provider confirms the transaction, your Cybermart order is placed.",
    },
];

const cardSteps = [
    {
        number: "01",
        title: "Enter card details",
        description:
            "Provide the card information requested by the secure payment checkout.",
    },
    {
        number: "02",
        title: "Complete verification",
        description:
            "Your bank may ask you to complete an additional verification step such as OTP or another authentication method.",
    },
    {
        number: "03",
        title: "Bank authorizes payment",
        description:
            "Your card issuer checks the transaction and either approves or declines it.",
    },
    {
        number: "04",
        title: "Order is confirmed",
        description:
            "After successful payment confirmation, the order moves forward for processing.",
    },
];

const paymentProblems = [
    {
        icon: X,
        title: "Payment failed",
        description:
            "Your bank or payment provider declined the transaction. Check your payment details and try again using the same or another supported method.",
    },
    {
        icon: RefreshCcw,
        title: "Payment is pending",
        description:
            "Sometimes the payment provider takes a little longer to confirm a transaction. Avoid repeatedly paying until the status is clear.",
    },
    {
        icon: Banknote,
        title: "Amount was debited but order failed",
        description:
            "A bank account can occasionally show a debit even when the order is not successfully created. The payment provider or bank will normally reconcile the transaction.",
    },
    {
        icon: HelpCircle,
        title: "You were charged twice",
        description:
            "If two successful charges appear for the same order, keep the transaction details and contact support so the duplicate payment can be investigated.",
    },
];

const paymentSecurity = [
    "Payment details are handled through secure payment infrastructure and are not stored as ordinary order information.",
    "Never share your UPI PIN, card PIN, CVV, OTP, or banking password with anyone claiming to be Cybermart support.",
    "Cybermart will not ask you to disclose your UPI PIN or card PIN to complete a payment.",
    "Always verify that you are completing the payment through the checkout flow you intentionally opened.",
];

export default function PaymentsPage() {
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
                                    Payments
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
                            Payments
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            Simple, secure
                            <br />
                            checkout.
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
                            Everything you need to know about paying for your
                            Cybermart order — from UPI and cards to failed,
                            pending, or unexpected payment issues.
                        </p>

                        <div
                            className="mt-10 h-1 w-20"
                            style={{ backgroundColor: accent }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Payment methods */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="mb-14 max-w-2xl">
                        <p
                            className="text-xs font-bold uppercase tracking-[0.25em]"
                            style={{ color: accent }}
                        >
                            Payment methods
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                            Choose how you want to pay.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-black/50 sm:text-base">
                            Available payment methods are displayed during
                            checkout. Choose the option that works best for
                            you and complete the payment through the secure
                            payment flow.
                        </p>
                    </div>

                    <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
                        {paymentMethods.map((method, index) => {
                            const Icon = method.icon;

                            return (
                                <motion.div
                                    key={method.title}
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
                                        delay: index * 0.08,
                                    }}
                                    className="bg-white p-8 sm:p-10"
                                >
                                    <div
                                        style={{
                                            backgroundColor: accent,
                                        }}
                                        className="flex h-11 w-11 items-center justify-center rounded-full"
                                    >
                                        <Icon className="h-5 w-5 text-black" />
                                    </div>

                                    <h3 className="mt-8 text-xl font-semibold">
                                        {method.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-black/50">
                                        {method.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* When payment is taken */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <p
                                className="text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Payment timing
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                When is your payment taken?
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <div className="border-t border-white/15 pt-6">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25">
                                    At checkout
                                </p>

                                <h3 className="mt-3 text-xl font-semibold">
                                    Payment is initiated when you place your
                                    order.
                                </h3>

                                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
                                    When you submit a paid order, the selected
                                    payment method is sent through the
                                    payment provider for authorization and
                                    processing.
                                </p>
                            </div>

                            <div className="border-t border-white/15 pt-6">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/25">
                                    After confirmation
                                </p>

                                <h3 className="mt-3 text-xl font-semibold">
                                    Your order moves forward after successful
                                    payment confirmation.
                                </h3>

                                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
                                    Once the payment provider confirms the
                                    transaction, Cybermart can treat the order
                                    as paid and begin the next stage of
                                    fulfillment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UPI */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="mb-14">
                        <div className="flex items-center gap-4">
                            <div
                                style={{
                                    backgroundColor: accent,
                                }}
                                className="flex h-12 w-12 items-center justify-center rounded-full"
                            >
                                <Smartphone className="h-5 w-5 text-black" />
                            </div>

                            <div>
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.25em]"
                                    style={{ color: accent }}
                                >
                                    UPI payments
                                </p>

                                <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
                                    Paying with UPI.
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-black/10 md:block" />

                        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
                            {upiSteps.map((step, index) => (
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
                                            <span className="font-mono text-xs font-bold">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-7 md:pr-6">
                                        <h3 className="text-lg font-semibold">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-black/45">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="border-y border-black/10 bg-[#f7f7f5]">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="mb-14">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white">
                                <CreditCard className="h-5 w-5" />
                            </div>

                            <div>
                                <p
                                    className="text-xs font-bold uppercase tracking-[0.25em]"
                                    style={{ color: accent }}
                                >
                                    Card payments
                                </p>

                                <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
                                    Paying by card.
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-5 hidden h-px w-[calc(100%-2.5rem)] bg-black/10 md:block" />

                        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
                            {cardSteps.map((step, index) => (
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
                                            <span className="font-mono text-xs font-bold">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-7 md:pr-6">
                                        <h3 className="text-lg font-semibold">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-black/45">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
                        <div>
                            <p
                                className="text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Payment problems
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                Something went wrong?
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-black/50">
                                Payment failures do not always mean your money
                                is lost. Here&apos;s what the most common
                                situations mean.
                            </p>
                        </div>

                        <div className="divide-y divide-black/10 border-y border-black/10">
                            {paymentProblems.map((problem, index) => {
                                const Icon = problem.icon;

                                return (
                                    <motion.div
                                        key={problem.title}
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
                                        className="flex gap-5 py-7"
                                    >
                                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10">
                                            <Icon className="h-4 w-4" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                {problem.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-black/50">
                                                {problem.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pending / debited explanation */}
            <section className="border-y border-black/10 bg-black text-white">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p
                                className="text-xs font-bold uppercase tracking-[0.25em]"
                                style={{ color: accent }}
                            >
                                Important
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                What if money was deducted?
                            </h2>

                            <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                                A debit shown by your bank does not always mean
                                that the payment has been successfully
                                completed.
                            </p>
                        </div>

                        <div className="space-y-0 border-y border-white/10">
                            {[
                                {
                                    title: "Check your order status first.",
                                    description:
                                        "Before trying to pay again, check whether the order was actually created and whether the payment is still being processed.",
                                },
                                {
                                    title: "Give pending transactions time to settle.",
                                    description:
                                        "Payment providers and banks may take time to reconcile a transaction, especially when the checkout result is unclear.",
                                },
                                {
                                    title: "Avoid repeated payments.",
                                    description:
                                        "If your bank shows a debit but Cybermart has not confirmed the order, making another payment immediately can create an unnecessary duplicate transaction.",
                                },
                                {
                                    title: "Contact support when needed.",
                                    description:
                                        "If the payment remains unresolved, keep the transaction reference and contact Cybermart support so the payment can be investigated.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
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
                                    className="border-b border-white/10 py-7 last:border-b-0"
                                >
                                    <div className="flex gap-5">
                                        <span
                                            style={{
                                                color: accent,
                                            }}
                                            className="font-mono text-xs"
                                        >
                                            0{index + 1}
                                        </span>

                                        <div>
                                            <h3 className="font-semibold">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 text-sm leading-6 text-white/40">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Security */}
            <section>
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
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
                                Stay secure
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                Your payment security matters.
                            </h2>
                        </div>

                        <div className="divide-y divide-black/10 border-y border-black/10">
                            {paymentSecurity.map((item, index) => (
                                <motion.div
                                    key={item}
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
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.07,
                                    }}
                                    className="flex gap-5 py-6"
                                >
                                    <Check className="mt-1 h-4 w-4 shrink-0" />

                                    <p className="text-sm leading-6 text-black/55">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
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
                                Still stuck?
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                                We can help with payment issues.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
                                Keep your order or transaction details handy
                                and contact our support team if your payment
                                needs investigation.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex w-fit items-center gap-3 bg-white px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
                        >
                            Contact support
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="border-t border-black/10">
                <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
                    <Link
                        href="/help"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-black/50 transition-colors hover:text-black"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Help Center
                    </Link>
                </div>
            </div>
        </main>
    );
}