import ProductClientPage from "@/components/ProductClient";
import { products } from "@/Data/Products";
import { Product } from "@/types/Product";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;

    const product = products.find((p) => p.id === id);

    const BASE_URL = "https://cybermart.wordcel.app";

    if (!product) {
        return {
            title: "Product Not Found | Cyber Mart",
            description:
                "The product you're looking for could not be found.",
        };
    }

    const productUrl = `${BASE_URL}/products/${product.id}`;

    // Get unique product images from all variants
    const images = [
        ...new Set(
            product.variants.flatMap(
                (variant) => variant.images
            )
        ),
    ];

    return {
        title: `${product.name} | ${product.brand} | Cyber Mart`,

        description:
            product.shortDescription || product.description,

        keywords: [
            product.name,
            product.brand,
            product.category,
            product.type,
            product.gender,
            ...product.tags,
        ],

        alternates: {
            canonical: productUrl,
        },

        openGraph: {
            type: "website",

            url: productUrl,

            title: `${product.name} | Cyber Mart`,

            description:
                product.shortDescription || product.description,

            siteName: "Cyber Mart",

            images: images.map((image) => ({
                url: image,
                width: 1200,
                height: 630,
                alt: product.name,
            })),
        },

        twitter: {
            card: "summary_large_image",

            title: `${product.name} | Cyber Mart`,

            description:
                product.shortDescription || product.description,

            images,
        },

        robots: {
            index: product.isActive,
            follow: product.isActive,
        },
    };
}

const ProductPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const product = products.find(
        (p) => p.id === id
    );

    if (!product) {
        return null;
    }

    const BASE_URL = "https://cybermart.wordcel.app";

    const productUrl = `${BASE_URL}/products/${product.id}`;

    // Variants that have at least one size
    const availableVariants = product.variants.filter(
        (variant) =>
            variant.sizes.some(
                (sizeVariant) => sizeVariant.stock > 0
            )
    );

    // Get unique product images from all variants
    const images = [
        ...new Set(
            product.variants.flatMap(
                (variant) => variant.images
            )
        ),
    ];

    // Use the cheapest variant price for structured data
    const prices = product.variants.map(
        (variant) => variant.price
    );

    const minPrice = Math.min(...prices);

    const productJsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",

        name: product.name,

        description: product.description,

        image: images,

        sku: product.id,

        brand: {
            "@type": "Brand",
            name: product.brand,
        },

        category: `${product.category} > ${product.type}`,

        material: product.material,

        offers: {
            "@type": "Offer",

            url: productUrl,

            priceCurrency: "INR",

            price: minPrice.toFixed(2),

            availability:
                availableVariants.length > 0
                    ? "https://schema.org/InStock"
                    : "https://schema.org/OutOfStock",

            itemCondition:
                "https://schema.org/NewCondition",

            seller: {
                "@type": "Organization",
                name: "Cyber Mart",
                url: BASE_URL,
            },
        },

        aggregateRating:
            product.reviews > 0
                ? {
                    "@type": "AggregateRating",
                    ratingValue: product.rating,
                    reviewCount: product.reviews,
                }
                : undefined,
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd),
                }}
            />

            <ProductClientPage product={product} />
        </div>
    );
};

export default ProductPage;