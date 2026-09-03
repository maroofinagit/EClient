import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Product } from "@/types/Product";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function ProductSection({
    title,
    subtitle,
    products,
    href,
}: {
    title: string;
    subtitle: string;
    products: Product[];
    href: string;
}) {
    if (products.length === 0) return null;

    return (
        <section>
            {/* Section Header */}
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                        {title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {subtitle}
                    </p>
                </div>

                <Link
                    href={href}
                    className="group flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-800 transition-colors hover:text-amber-900"
                >
                    View All
                    <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                </Link>
            </div>

            {/* Products */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
            >
                {products.slice(0, 4).map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.08,
                        }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}