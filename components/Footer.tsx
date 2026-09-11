
import Image from "next/image";
import Link from "next/link";
import {
    FaXTwitter,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaGithub,
} from "react-icons/fa6";

const accent = "#f97316";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: "https://x.com/maroofalysyed", icon: FaXTwitter, label: "X" },
        { href: "https://instagram.com/maroofalysyed", icon: FaInstagram, label: "Instagram" },
        { href: "https://linkedin.com/in/maroofalysyed", icon: FaLinkedin, label: "LinkedIn" },
        { href: "https://facebook.com/maroofalysyed", icon: FaFacebook, label: "Facebook" },
        { href: "https://github.com/maroofinagit", icon: FaGithub, label: "GitHub" },
    ];

    const shopLinks = [
        ["All Products", "/products"],
        ["New Arrivals", "/products?sort=newest"],
        ["Best Sellers", "/products?sort=popular"],
    ];

    const companyLinks = [
        ["Home", "/"],
        ["About Us", "/about"],
        ["Contact", "/contact"],
        ["Track Order", "/orders"],
    ];

    const supportLinks = [
        ["Help Center", "/help"],
        ["Returns & Refunds", "/help/returns"],
        ["Shipping", "/help/shipping"],
        ["Payments", "/help/payments"],
        ["Privacy & Terms", "/help/privacy"],
    ];

    return (
        <footer
            className="relative overflow-hidden border-t border-white/10 text-white"
            style={{
                background:
                    "linear-gradient(135deg, #080808 0%, #140d09 50%, #2a170d 100%)",
            }}
        >      {/* Subtle background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 85% 15%, rgba(249,115,22,0.08), transparent 28%), radial-gradient(circle at 10% 90%, rgba(255,255,255,0.035), transparent 25%)",
                }}
            />

            {/* Decorative circle */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/4"
            />

            <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
                {/* Main */}
                <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-5">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-4"
                        >
                            <div className="relative">
                                <Image
                                    src="/logo.png"
                                    alt="Cyber Mart logo"
                                    width={50}
                                    height={50}
                                    className="rounded-full transition-transform duration-300 group-hover:scale-105"
                                />

                                <span
                                    className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#111111]"
                                    style={{ backgroundColor: accent }}
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white">
                                    Cyber Mart
                                </h2>

                                <p className="mt-1 text-xs text-white/45">
                                    Your everyday shopping destination.
                                </p>
                            </div>
                        </Link>

                        <p className="mt-7 max-w-md text-sm leading-7 text-white/55">
                            Cyber Mart makes online shopping simple with a wide
                            selection of quality products, easy browsing, secure
                            checkout, and a smooth shopping experience.
                        </p>

                        {/* Social links */}
                        <div className="mt-8 flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={social.href}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="flex items-center justify-center rounded-full border border-white/40 bg-white/3 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10 hover:text-white p-2"
                                    >
                                        <Icon className=" size-5 md:size-6" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
                            {[
                                ["Shop", shopLinks],
                                ["Company", companyLinks],
                                ["Support", supportLinks],
                            ].map(([heading, links]) => (
                                <div
                                    key={heading as string}
                                    className={
                                        heading === "Support"
                                            ? "col-span-2 sm:col-span-1"
                                            : ""
                                    }
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                                        {heading as string}
                                    </p>

                                    <ul className="mt-6 space-y-4">
                                        {(links as string[][]).map(
                                            ([title, href]) => (
                                                <li key={title}>
                                                    <Link
                                                        href={href}
                                                        className="group inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors duration-200 hover:text-white"
                                                    >
                                                        <span>{title}</span>

                                                        <span
                                                            className="h-px w-0 transition-all duration-300 group-hover:w-3"
                                                            style={{
                                                                backgroundColor:
                                                                    accent,
                                                            }}
                                                        />
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="relative h-px w-full bg-white/8">
                    <div
                        className="absolute left-0 top-0 h-px w-20"
                        style={{ backgroundColor: accent }}
                    />
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs font-medium text-white/35">
                        © {currentYear} Cyber Mart. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-xs font-medium text-white/35">
                        <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: accent }}
                        />

                        <span>Built with ❤️ for shoppers.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}