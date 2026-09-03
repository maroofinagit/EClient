import { HomeIcon, Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import CartIcon from "./CartIcon";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-display",
});

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-white/95 backdrop-blur-md z-20 sticky top-0 left-0 right-0 ">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="Cyber Mart"
                        className="h-9 w-9 object-contain"
                    />

                    <span className="hidden text-2xl tracking-[-0.08em] font-bold md:block" style={playfair.style}>
                        CyberMart
                    </span>
                </Link>

                {/* Right Actions */}
                <div className="flex items-center gap-2 sm:gap-4">

                    {/* Search */}
                    <div className="relative ml-auto hidden w-full max-w-md md:block">
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

                    <Link href='/' className="rounded-full p-2 transition hover:bg-amber-800 hover:text-white">
                        <HomeIcon className="h-5 w-5" />
                    </Link>

                    {/* Cart */}
                    <CartIcon />


                    <div className="flex items-center gap-4">
                        <Button
                            className='bg-transparent border border-gray-300 text-gray-700 hover:bg-amber-800 hover:text-white cursor-pointer '
                        >
                            Sign In
                        </Button>
                        <Button
                            className='bg-transparent border border-gray-300 text-gray-700 hover:bg-amber-800 hover:text-white cursor-pointer '
                        >
                            Sign Up
                        </Button>
                    </div>

                </div>
            </div>
        </nav>
    );
}