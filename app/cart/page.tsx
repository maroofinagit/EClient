import CartClientPage from "@/components/CartClient";
import { Suspense } from "react";


const CartPage = () => {
    return (
        <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center">Loading...</div>}>
            <CartClientPage />
        </Suspense>
    );
}

export default CartPage;