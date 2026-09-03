"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { navigation } from "@/Data/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { Gender, ProductCategory, ProductType } from "@/types/Product";
import { useEffect, useState } from "react";
import { i } from "framer-motion/client";
import { FaShoppingCart } from "react-icons/fa";

export function Categories() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleChange = (
        category: ProductCategory | null | "All" = null,
        gender: Gender | null = null,
        type: ProductType | null = null
    ) => {
        const params = new URLSearchParams(searchParams);

        if (category === "All" || category === null) {
            params.delete("category");
            params.delete("gender");
            params.delete("type");
        } else {
            params.set("category", category);

            if (gender) {
                params.set("gender", gender);
            } else {
                params.delete("gender");
            }

            if (type) {
                params.set("type", type);
            } else {
                params.delete("type");
            }
        }


        router.push(`/products/?${params.toString()}`);
    };

    return (
        <NavigationMenu className="w-full bg-amber-100 rounded-xl p-2">
            <NavigationMenuList className="flex flex-nowrap items-center justify-start gap-2 md:gap-4 overflow-x-auto">

                {/* ALL */}
                <NavigationMenuItem>
                    <button
                        onClick={() => handleChange("All")}
                        className="cursor-pointer flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-amber-800 hover:text-amber-100"
                    >
                        <FaShoppingCart className="mr-2 h-4 w-4" />
                        All
                    </button>
                </NavigationMenuItem>

                {navigation.map((category) => {
                    const Icon = category.icon;
                    return (
                        <NavigationMenuItem key={category.label} className="hover:bg-amber-800 hover:text-amber-100 data-[state=open]:bg-amber-800 data-[state=open]:text-amber-100 rounded-md">
                            <NavigationMenuTrigger
                                onClick={() => handleChange(category.label, null, null)}
                            >
                                <Icon className="mr-2 h-4 w-4" />
                                {category.label}
                            </NavigationMenuTrigger>

                            <NavigationMenuContent className=" p-5 w-full">
                                <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                                    {category.genders.map((gender) => (
                                        <div key={gender.label}>
                                            <h3 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                                {gender.label}
                                            </h3>

                                            <ul className="space-y-0">
                                                {gender.items.map((item) => (
                                                    <li key={item.href}>
                                                        <NavigationMenuLink render={
                                                            <button
                                                                onClick={() => handleChange(category.label, gender.label, item.label)}
                                                                className="cursor-pointer group flex items-center rounded-md px-2.5 py-2 text-sm font-medium transition-colors hover:border hover:border-amber-800 hover:text-amber-800 border border-transparent"
                                                            >
                                                                {item.label}
                                                            </button>
                                                        }
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu >
    );
}