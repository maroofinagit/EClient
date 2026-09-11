"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be less than 50 characters"),

    email: z.email("Please enter a valid email address"),

    subject: z
        .string()
        .min(3, "Subject must be at least 3 characters")
        .max(100, "Subject must be less than 100 characters"),

    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onTouched",
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });
    
    const onSubmit = async (data: ContactFormData) => {
        console.log(data);
        reset();
        toast.success("Message sent successfully!");
    };

    return (
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
            }}
            className="lg:col-span-7 lg:col-start-6"
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border-2 border-black p-6 sm:p-10"
            >
                <div className="mb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                        Send a message
                    </p>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                        How can we help?
                    </h2>
                </div>

                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            {...register("name")}
                            className={`h-12 w-full border bg-white px-4 text-sm outline-none transition ${errors.name
                                    ? "border-red-500"
                                    : "border-black/20 focus:border-black"
                                }`}
                        />

                        {errors.name && (
                            <p className="text-xs text-red-600">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            {...register("email")}
                            className={`h-12 w-full border bg-white px-4 text-sm outline-none transition ${errors.email
                                    ? "border-red-500"
                                    : "border-black/20 focus:border-black"
                                }`}
                        />

                        {errors.email && (
                            <p className="text-xs text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Subject */}
                <div className="mt-6 space-y-2">
                    <label
                        htmlFor="subject"
                        className="text-sm font-medium"
                    >
                        Subject
                    </label>

                    <input
                        id="subject"
                        type="text"
                        placeholder="What can we help with?"
                        {...register("subject")}
                        className={`h-12 w-full border bg-white px-4 text-sm outline-none transition ${errors.subject
                                ? "border-red-500"
                                : "border-black/20 focus:border-black"
                            }`}
                    />

                    {errors.subject && (
                        <p className="text-xs text-red-600">
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                {/* Message */}
                <div className="mt-6 space-y-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us a little more..."
                        {...register("message")}
                        className={`w-full resize-none border bg-white p-4 text-sm outline-none transition ${errors.message
                                ? "border-red-500"
                                : "border-black/20 focus:border-black"
                            }`}
                    />

                    {errors.message && (
                        <p className="text-xs text-red-600">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-7 cursor-pointer inline-flex h-12 items-center gap-3 bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/85 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : "Send message"}

                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
            </form>
        </motion.div>
    );
}