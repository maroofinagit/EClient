import { HomeIcon, Menu, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import CartIcon from "./CartIcon";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-display",
});

const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "Orders", href: "/orders" },
    { title: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 right-0 z-20 w-full border-b bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

                <div className="flex items-center gap-2">

                    {/* Mobile Menu */}
                    <Sheet>

                        <SheetTrigger render={
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                                aria-label="Open navigation menu"
                            >
                                <Menu className="size-5" />
                            </Button>
                        } />

                        <SheetContent
                            side="left"
                            className="w-70 sm:w-[320px]"
                        >

                            <SheetHeader className="border-b pb-5">
                                <SheetTitle
                                    className="flex items-center gap-3 text-xl"
                                    style={playfair.style}
                                >
                                    <img
                                        src="/logo.png"
                                        alt="Cyber Mart"
                                        className="h-8 w-8 object-contain"
                                    />

                                    CyberMart
                                </SheetTitle>
                            </SheetHeader>

                            {/* Mobile Navigation */}
                            <div className="flex flex-col gap-2 px-4 pt-6">

                                {navLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className="rounded-md px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-amber-800 hover:text-white"
                                    >
                                        {link.title}
                                    </Link>
                                ))}

                            </div>

                        </SheetContent>

                    </Sheet>

                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="Cyber Mart"
                            className="h-9 w-9 object-contain"
                        />

                        <span
                            className="hidden text-2xl font-bold tracking-[-0.08em] md:block"
                            style={playfair.style}
                        >
                            CyberMart
                        </span>
                    </Link>

                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="text-sm text-gray-700 transition hover:text-gray-900 lg:text-base"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 sm:gap-4">

                    {/* Desktop Search */}
                    <div className="relative hidden w-full max-w-md md:block">
                        <Search
                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        />

                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="
                                h-10 pl-9
                                focus-visible:ring-0
                                focus-visible:ring-offset-0
                                focus-visible:border-2
                            "
                        />
                    </div>

                    {/* Home */}
                    <Link
                        href="/"
                        className=" rounded-full p-2 transition hover:bg-amber-800 hover:text-white flex md:hidden"
                    >
                        <HomeIcon className="h-5 w-5" />
                    </Link>

                    {/* Cart */}
                    <CartIcon />

                    {/* Authentication */}
                    <div className="hidden items-center gap-2 sm:flex">
                        <Button
                            className="cursor-pointer border border-gray-300 bg-transparent text-gray-700 hover:bg-amber-800 hover:text-white"
                        >
                            Sign In
                        </Button>

                        <Button
                            className="cursor-pointer border border-gray-300 bg-transparent text-gray-700 hover:bg-amber-800 hover:text-white"
                        >
                            Sign Up
                        </Button>
                    </div>

                </div>
            </div>
        </nav>
    );
}