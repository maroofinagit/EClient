import type { MetadataRoute } from "next";

const BASE_URL = "https://cybermart.wordcel.app";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/admin/",
                "/api/",
                "/cart/",
                "/help/",
                "/orders/",
                "/contact/",
                "/about/",
                "orders/[id]/track",
                "orders/",
            ],
        },
        
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}