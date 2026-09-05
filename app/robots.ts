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
                "/checkout/",
                "/payment/",
                "/account/",
            ],
        },

        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}