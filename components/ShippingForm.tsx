"use client";

import { ShippingFormInputs, shippingFormSchema } from "@/types/Cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Field,
    FieldError,
    FieldLabel,
    FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const ShippingForm = ({
    setShippingForm,
}: {
    setShippingForm: (data: ShippingFormInputs) => void;
}) => {
    const form = useForm<ShippingFormInputs>({
        resolver: zodResolver(shippingFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            city: "",
        },
    });

    const router = useRouter();

    const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data);
        router.push("/cart?step=3", { scroll: false });
    };

    return (
        <form
            onSubmit={form.handleSubmit(handleShippingForm)}
            className="flex flex-col gap-4"
        >
            <FieldGroup>
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Name</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                placeholder="John Doe"
                                aria-invalid={fieldState.invalid}
                                className={`placeholder:text-sm ${field.value ? "text-sm" : ""}`}
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                type="email"
                                placeholder="johndoe@gmail.com"
                                className={`placeholder:text-sm ${field.value ? "text-sm" : ""}`}
                                aria-invalid={fieldState.invalid}
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Phone</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                type="text"
                                placeholder="123456789"
                                aria-invalid={fieldState.invalid}
                                className={`placeholder:text-sm ${field.value ? "text-sm" : ""}`}
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="address"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>Address</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                placeholder="123 Main St, Anytown"
                                className={`placeholder:text-sm ${field.value ? "text-sm" : ""}`}
                                aria-invalid={fieldState.invalid}
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                <Controller
                    name="city"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>City</FieldLabel>

                            <Input
                                {...field}
                                id={field.name}
                                placeholder="New York"
                                className={`placeholder:text-sm ${field.value ? "text-sm" : ""}`}
                                aria-invalid={fieldState.invalid}
                            />

                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>

            <div className="flex items-center justify-between mt-4">

                <Button
                    type="reset"
                    onClick={() => form.reset()}
                    className="w-fit hover:bg-amber-800 border border-amber-800 transition-all duration-300 text-amber-800 bg-white hover:text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                >
                    Reset
                </Button>

                <Button
                    type="submit"
                    className="w-fit bg-amber-800 border hover:bg-green-700 font-medium transition-all duration-300 text-white p-4 rounded-lg cursor-pointer flex items-center justify-center gap-2"
                >
                    Continue
                    <ArrowRight className="w-3 h-3" />
                </Button>

            </div>
        </form>
    );
};

export default ShippingForm;