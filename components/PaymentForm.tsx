'use client';
import { PaymentFormInputs, paymentFormSchema } from "@/types/Cart";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = ({ isPaymentAllowed, setIsPaymentAllowed }: { isPaymentAllowed: boolean; setIsPaymentAllowed: (allowed: boolean) => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentFormSchema),
        mode: "onChange",
        defaultValues: {
            cardHolder: "",
            cardNumber: "",
            expirationDate: "",
            cvv: "",
        },
    });

    const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
        setIsPaymentAllowed(true);
    };

    useEffect(() => {
        setIsPaymentAllowed(isValid);
    }, [isValid, setIsPaymentAllowed]);


    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handlePaymentForm)}
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="cardHolder" className="text-xs text-gray-500 font-medium">
                    Name on card
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm"
                    type="text"
                    id="cardHolder"
                    placeholder="John Doe"
                    {...register("cardHolder")}
                />
                {errors.cardHolder && (
                    <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardNumber" className="text-xs text-gray-500 font-medium">
                    Card Number
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm"
                    type="text"
                    id="cardNumber"
                    placeholder="123456789123"
                    {...register("cardNumber")}
                />
                {errors.cardNumber && (
                    <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="expirationDate" className="text-xs text-gray-500 font-medium">
                    Expiration Date
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm"
                    type="text"
                    id="expirationDate"
                    placeholder="01/32"
                    {...register("expirationDate")}
                />
                {errors.expirationDate && (
                    <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
                    CVV
                </label>
                <input
                    className="border-b border-gray-200 py-2 outline-none text-sm"
                    type="text"
                    id="cvv"
                    placeholder="123"
                    {...register("cvv")}
                />
                {errors.cvv && (
                    <p className="text-xs text-red-500">{errors.cvv.message}</p>
                )}
            </div>
            <div className='flex items-center gap-2 mt-4 relative'>
                <Image src="/paypal.png" alt="paypal" width={50} height={25} className="rounded-md" />
                <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
                <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
            </div>

            <button
                type="reset"
                className=" w-fit self-end bg-amber-800 hover:bg-green-700 font-medium transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 mt-4"
                onClick={() => {
                    setIsPaymentAllowed(false);
                }}
            >
                Reset
            </button>
        </form>
    );
}

export default PaymentForm;