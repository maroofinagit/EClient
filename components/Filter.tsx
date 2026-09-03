"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ArrowDownUp } from "lucide-react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value: string | null) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value || "newest");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    

    return (
        <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
            <span>Sort by :</span>
            <div className="flex items-center gap-2">
                <ArrowDownUp className="h-4 w-4 text-muted-foreground" />

                <Select onValueChange={handleFilter} defaultValue="newest">
                    <SelectTrigger className="w-47.5 rounded-lg border-amber-200 bg-white shadow-sm transition hover:border-amber-400 focus:ring-2 focus:ring-amber-500">
                        <SelectValue placeholder="Sort products" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="newest">
                            Newest
                        </SelectItem>

                        <SelectItem value="oldest">
                            Oldest
                        </SelectItem>

                        <SelectItem value="asc">
                            Price: Low to High
                        </SelectItem>

                        <SelectItem value="desc">
                            Price: High to Low
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Filter;