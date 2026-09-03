import { CheckCircle2, XCircle, ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

const PaymentPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ success?: string }>;
}) => {
    const { success } = await searchParams;

    const isSuccess = success === "true";

    return (
        <main className="min-h-[70vh] flex items-center justify-center px-8">
            <div className="w-full max-w-md text-center">
                {isSuccess ? (
                    <>
                        <div className="flex justify-center mb-6">
                            <div className="rounded-full bg-green-100 p-4">
                                <CheckCircle2 className="md:w-16 md:h-16 w-12 h-12 text-green-600" />
                            </div>
                        </div>

                        <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
                            Payment Successful!
                        </h1>

                        <p className="text-gray-500 mb-8 text-sm md:text-base">
                            Your payment has been processed successfully. Thank you for
                            shopping with us!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/orders"
                                className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-sm font-medium text-white hover:bg-gray-900 transition"
                            >
                                View Orders
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                Continue Shopping
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex justify-center mb-6">
                            <div className="rounded-full bg-red-100 p-4">
                                <XCircle className="w-16 h-16 text-red-600" />
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-3">
                            Payment Failed
                        </h1>

                        <p className="text-gray-500 mb-8">
                            We couldn't process your payment. Please try again or use a
                            different payment method.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/cart?step=3"
                                className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-5 py-3 text-sm font-medium text-white hover:bg-gray-900 transition"
                            >
                                Try Again
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                            >
                                <ShoppingBag className="w-4 h-4" />
                                Continue Shopping
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
};

export default PaymentPage;